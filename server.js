const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = process.env.PORT || 3000;
const BASE_DIR = __dirname;

// Explicit references so Vercel's static asset bundler (@vercel/nft) traces all files
const _STATIC_ASSETS = [
  path.join(__dirname, 'index.html'),
  path.join(__dirname, 'concepts', 'concept1-journey-planner.html'),
  path.join(__dirname, 'concepts', 'concept2-trusted-companion.html'),
  path.join(__dirname, 'concepts', 'concept3-kerala-darshan.html'),
  path.join(__dirname, 'concepts', 'concept4-power-user.html'),
  path.join(__dirname, 'concepts', 'concept5-hybrid-experience.html'),
  path.join(__dirname, 'concepts', 'concept6-minimalist-transformer.html'),
  path.join(__dirname, 'ksrtc-concept1-journey-planner.html'),
  path.join(__dirname, 'ksrtc-concept2-trusted-companion.html'),
  path.join(__dirname, 'ksrtc-concept3-kerala-darshan.html'),
  path.join(__dirname, 'ksrtc-concept4-power-user.html'),
  path.join(__dirname, 'ksrtc-concept5-hybrid-experience.html'),
  path.join(__dirname, 'ksrtc-concept6-minimalist-transformer.html')
];

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml; charset=UTF-8',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  // Parse URL & decode URI components
  let safePath = decodeURIComponent(req.url.split('?')[0]);
  if (safePath === '/' || safePath === '') {
    safePath = '/index.html';
  }

  // Prevent directory traversal
  const normalizedPath = path.normalize(safePath).replace(/^(\.\.[\/\\])+/, '');
  let filePath = path.join(BASE_DIR, normalizedPath);

  // Support clean URLs (e.g. /concepts/concept1-journey-planner -> .html)
  if (!fs.existsSync(filePath) && fs.existsSync(filePath + '.html')) {
    filePath = filePath + '.html';
  }

  fs.stat(filePath, (err, stats) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
      res.end(`
        <!DOCTYPE html>
        <html>
        <head><title>404 Not Found</title></head>
        <body style="font-family:sans-serif; text-align:center; padding:50px;">
          <h2>404 - Page Not Found</h2>
          <p>The requested file <code>${safePath}</code> was not found.</p>
          <a href="/">← Return to Master Gallery</a>
        </body>
        </html>
      `);
      return;
    }

    if (stats.isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server Error: ' + readErr.code);
        return;
      }
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    });
  });
});

// Run server listener only in local development, not when executed inside Vercel serverless environment
if (!process.env.VERCEL && require.main === module) {
  server.listen(PORT, () => {
    const url = `http://localhost:${PORT}`;
    console.log(`\n=============================================================`);
    console.log(`🚌 KSRTC-SWIFT Redesign Showcase Server Running`);
    console.log(`🌐 Local URL: ${url}`);
    console.log(`📁 Directory: ${BASE_DIR}`);
    console.log(`=============================================================\n`);
    console.log(`Opening showcase in your default web browser...\n`);

    // Auto-open browser on Windows / macOS / Linux
    const startCmd = process.platform === 'win32' ? `start ${url}` :
                     process.platform === 'darwin' ? `open ${url}` : `xdg-open ${url}`;
    exec(startCmd, (err) => {
      if (err) {
        console.log(`👉 Please open your browser and navigate to: ${url}`);
      }
    });
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      const fallbackPort = Number(PORT) + 1;
      console.log(`Port ${PORT} is busy, retrying on port ${fallbackPort}...`);
      server.listen(fallbackPort);
    } else {
      console.error('Server error:', err);
    }
  });
}

// Export server instance for Vercel Serverless Function entrypoint
module.exports = server;
