const fs = require('fs');
let code = fs.readFileSync('src/pages/Services.tsx', 'utf-8');

code = code.replace("import { Link } from 'react-router-dom';", "import { Link } from 'react-router-dom';\nimport { useCMS } from '../context/CMSContext';");

code = code.replace("export function Services() {", "export function Services() {\n  const { siteContent } = useCMS();\n  const { services: servicesContent } = siteContent;");

code = code.replace(
  ">Digital Solutions for the <",
  ">{servicesContent.heroTitle} <"
);

code = code.replace(
  ">AI Era<",
  ">{servicesContent.heroTitleHighlight}<"
);

code = code.replace(
  />\s*We leverage cutting-edge technology and artificial intelligence to deliver solutions that drive measurable growth.\s*</g,
  ">{servicesContent.heroDesc}<"
);

fs.writeFileSync('src/pages/Services.tsx', code);
console.log('Services patched');
