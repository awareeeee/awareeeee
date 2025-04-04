const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./data.json", "utf8"));

// S'assurer que le dossier 'assets' existe
if (!fs.existsSync("./assets")) {
  fs.mkdirSync("./assets");
}

// SVG généré
const svg = `
<svg width="400" height="160" viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
  <style>
    .bg { fill: #0d1117; stroke: #30363d; rx: 8; }
    .title { font: bold 16px 'Segoe UI', Ubuntu, sans-serif; fill: #58a6ff; }
    .label { font: 14px 'Segoe UI', sans-serif; fill: #c9d1d9; }
    .footer { font: 10px 'Segoe UI', sans-serif; fill: #8b949e; }
  </style>

  <rect width="100%" height="100%" class="bg" rx="10"/>

  <text x="20" y="30" class="title">🌐 Aware's GitHub Stats</text>

  <text x="20" y="60" class="label">📦 Commits in ${data.year} : ${data.commits}</text>
  <text x="20" y="80" class="label">🐛 Issues : ${data.issues}</text>
  <text x="20" y="100" class="label">🔀 Pull Requests : ${data.prs}</text>
  <text x="20" y="120" class="label">⭐ Stars : ${data.stars}</text>

  <text x="200" y="145" class="footer" text-anchor="middle">Dernière mise à jour : ${data.maj}</text>
</svg>
`;

// Écriture du fichier
fs.writeFileSync("./assets/github-stats.svg", svg);
console.log("✅ Stats SVG généré avec succès !");