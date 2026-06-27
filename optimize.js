const fs = require('fs');
const path = require('path');

const dir = __dirname;
const htmlFiles = fs.readdirSync(dir).filter(file => file.endsWith('.html'));

htmlFiles.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Defer scripts
  content = content.replace(/<script\s+src="([^"]+)">\s*<\/script>/g, (match, src) => {
    if (match.includes('defer')) return match;
    return `<script src="${src}" defer></script>`;
  });

  // Lazy load images (except hero/top)
  content = content.replace(/<img([^>]+)>/g, (match, attrs) => {
    if (attrs.includes('loading="lazy"')) return match;
    if (attrs.includes('hero') || attrs.includes('top-') || attrs.includes('gopuram')) return match;
    return `<img${attrs} loading="lazy">`;
  });

  fs.writeFileSync(filePath, content, 'utf-8');
});

console.log('HTML optimization complete.');
