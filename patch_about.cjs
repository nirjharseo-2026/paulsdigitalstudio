const fs = require('fs');
let code = fs.readFileSync('src/pages/About.tsx', 'utf-8');

code = code.replace("import { Target", "import { useCMS } from '../context/CMSContext';\nimport { Target");

code = code.replace("export function About() {", "export function About() {\n  const { siteContent } = useCMS();\n  const { about } = siteContent;");

code = code.replace(
  ">About Us<",
  ">{about.heroTag}<"
);

code = code.replace(
  ">Building the Future of <",
  ">{about.heroTitle} <"
);

code = code.replace(
  ">Digital Experiences<",
  ">{about.heroTitleHighlight}<"
);

code = code.replace(
  />We are a team of visionary designers, developers, and AI specialists dedicated to pushing the boundaries of what's possible on the web.</,
  ">{about.heroDesc}<"
);

fs.writeFileSync('src/pages/About.tsx', code);
console.log('About patched');
