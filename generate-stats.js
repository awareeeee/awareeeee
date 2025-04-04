const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));

const svg = `
<svg width="380" height="130" viewBox="0 0 380 130" xmlns="http://www.w3.org/2000/svg">
  <style>
    .bg { fill: #0d1117; }
    .title { font: bold 16px sans-serif; fill: #58a6ff; }
    .stat { font: 14px sans-serif; fill: #c9d1d9; }
  </style>
  <rect width="100%" height="100%" class="bg" rx="10"/>
  <text x="20" y="30" class="title">Aware's GitHub Stats (Privées)</text>
  <text x="20" y="60" class="stat">📦 Commits ${data.year} : ${data.commits}</text>
  <text x="20" y="80" class="stat">🐛 Issues : ${data.issues}</text>
  <text x="20" y="100" class="stat">🔀 Pull Requests : ${data.prs}</text>
  <text x="20" y="120" class="stat">⭐ Stars : ${data.stars}</text>
</svg>
`;

fs.writeFileSync('./assets/github-stats.svg', svg);
console.log('✅ Stats SVG généré avec succès !');
