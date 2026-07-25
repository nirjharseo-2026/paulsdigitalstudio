const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.tsx', 'utf-8');

code = code.replace("import { Link } from 'react-router-dom';", "import { Link } from 'react-router-dom';\nimport { useCMS } from '../context/CMSContext';");

code = code.replace("export function Home() {", "export function Home() {\n  const { siteContent } = useCMS();\n  const { home } = siteContent;");

code = code.replace(
  ">AI-Powered Digital Agency<",
  ">{home.heroTag}<"
);

code = code.replace(
  "['Transform', 'Your']",
  "[home.heroTitle1, home.heroTitle2].filter(Boolean)"
);

code = code.replace(
  ">Digital Presence<",
  ">{home.heroTitleHighlight}<"
);

code = code.replace(
  ">Helping businesses grow with AI-powered websites, digital marketing, automation, and modern technology.<",
  ">{home.heroDesc}<"
);

code = code.replace(
  /Start Your Project/g,
  "{home.ctaPrimary}"
);

code = code.replace(
  />\s*View Our Work\s*</g,
  ">{home.ctaSecondary}<"
);


fs.writeFileSync('src/pages/Home.tsx', code);
console.log('Home patched');
