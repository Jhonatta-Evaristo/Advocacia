const fs = require('fs');
const path = require('path');

const distDir = 'dist';
const assetsDir = path.join(distDir, 'assets');

const html = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
const cssFile = fs.readdirSync(assetsDir).find(f => f.endsWith('.css'));
const jsFile = fs.readdirSync(assetsDir).find(f => f.endsWith('.js'));

const css = fs.readFileSync(path.join(assetsDir, cssFile), 'utf8');
const js = fs.readFileSync(path.join(assetsDir, jsFile), 'utf8');

// Replace link tag with inline style
let out = html.replace(
  /<link rel="stylesheet"[^>]*>/,
  '<style>' + css + '</style>'
);

// Replace script tag with inline script
out = out.replace(
  /<script type="module"[^>]*><\/script>/,
  '<script type="module">' + js + '</script>'
);

fs.writeFileSync('bundle.html', out, 'utf8');
console.log('bundle.html created! Size:', Math.round(fs.statSync('bundle.html').size / 1024), 'KB');
