const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg' };
const allowedFiles = new Set(['/index.html', '/styles.css', '/script.js', '/assets/favicon.svg', '/assets/portrait.png', '/assets/renew360-icon.jpg', '/assets/renew360-screen.jpg', '/assets/renew360-dashboard.jpg', '/assets/gigsters-icon.jpg', '/assets/gigsters-screen.jpg', '/assets/gigsters-jobs.jpg', '/assets/menbili-icon.jpg', '/assets/menbili-community.jpg']);
const portFlag = process.argv.indexOf('--port');
['/assets/rolla-icon.jpg', '/assets/rolla-map.jpg', '/assets/rolla-share.jpg', '/assets/luckyorange-website.jpg', '/assets/miumiu-website.jpg'].forEach(file => allowedFiles.add(file));
const port = Number(process.env.PORT || (portFlag >= 0 && process.argv[portFlag + 1]) || 3000);
http.createServer((req, res) => {
  let requested;
  try { requested = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { res.writeHead(400); res.end('Bad request'); return; }
  if (requested === '/') requested = '/index.html';
  if (!allowedFiles.has(requested)) { res.writeHead(404); res.end('Not found'); return; }
  if (req.method !== 'GET' && req.method !== 'HEAD') { res.writeHead(405, { Allow: 'GET, HEAD' }); res.end(); return; }
  const file = path.join(root, requested);
  fs.stat(file, (error, stat) => {
    if (error || !stat.isFile()) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream', 'Content-Length': stat.size, 'X-Content-Type-Options': 'nosniff' });
    if (req.method === 'HEAD') { res.end(); return; }
    fs.createReadStream(file).on('error', () => res.destroy()).pipe(res);
  });
}).listen(port, '127.0.0.1', () => console.log(`Portfolio ready at http://localhost:${port}`));
