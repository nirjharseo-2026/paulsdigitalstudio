const fs = require('fs');
let code = fs.readFileSync('src/context/CMSContext.tsx', 'utf-8');

code = code.replace(
  "  excerpt: string;\n  image?: string;",
  "  excerpt: string;\n  content?: string;\n  image?: string;"
);

// We won't bother adding `content` to the defaultPosts for now since it's optional, but it's fine either way.
fs.writeFileSync('src/context/CMSContext.tsx', code);
console.log('CMSContext patched');
