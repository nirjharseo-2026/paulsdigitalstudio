const fs = require('fs');
let code = fs.readFileSync('src/pages/Contact.tsx', 'utf-8');

code = code.replace("import { useState } from 'react';", "import { useState } from 'react';\nimport { useCMS } from '../context/CMSContext';");

code = code.replace("export function Contact() {", "export function Contact() {\n  const { siteContent } = useCMS();\n  const { contact } = siteContent;");

code = code.replace(
  ">Let's build something <",
  ">{contact.heroTitle} <"
);

code = code.replace(
  ">amazing<",
  ">{contact.heroTitleHighlight}<"
);

code = code.replace(
  />Whether you need a new website, a complex web application, or a digital marketing strategy, we're here to help.</,
  ">{contact.heroDesc}<"
);

fs.writeFileSync('src/pages/Contact.tsx', code);
console.log('Contact patched');
