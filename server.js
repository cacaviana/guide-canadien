import sirv from 'sirv';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 8080;

const handler = sirv(join(__dirname, 'build'), {
  single: true,
  etag: true,
  maxAge: 0,
  setHeaders(res, pathname) {
    if (pathname.endsWith('.mp3')) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      res.setHeader('Accept-Ranges', 'bytes');
    } else if (pathname.startsWith('/_app/immutable/')) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
  }
});

createServer(handler).listen(PORT, () => {
  console.log(`guide-canadien serving on port ${PORT}`);
});
