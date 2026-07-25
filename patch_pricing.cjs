const fs = require('fs');
let code = fs.readFileSync('src/pages/Pricing.tsx', 'utf-8');

code = code.replace("import { Link } from 'react-router-dom';", "import { Link } from 'react-router-dom';\nimport { useCMS } from '../context/CMSContext';");

code = code.replace("export function Pricing() {", "export function Pricing() {\n  const { siteContent } = useCMS();\n  const { pricing } = siteContent;");

code = code.replace(
  ">Simple, transparent <",
  ">{pricing.heroTitle} <"
);

code = code.replace(
  ">pricing<",
  ">{pricing.heroTitleHighlight}<"
);

code = code.replace(
  />\s*Choose the perfect plan for your business needs. No hidden fees or surprises.\s*</g,
  ">{pricing.heroDesc}<"
);

fs.writeFileSync('src/pages/Pricing.tsx', code);
console.log('Pricing patched');
