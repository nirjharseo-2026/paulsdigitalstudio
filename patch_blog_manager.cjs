const fs = require('fs');
let code = fs.readFileSync('src/admin/BlogManager.tsx', 'utf-8');

code = code.replace(
  "    excerpt: '',\n    image: '',",
  "    excerpt: '',\n    content: '',\n    image: '',"
);

code = code.replace(
  "      excerpt: post.excerpt || '',\n      image: post.image || '',",
  "      excerpt: post.excerpt || '',\n      content: post.content || '',\n      image: post.image || '',"
);

code = code.replace(
  "setFormData({ title: '', slug: '', category: '', date: '', excerpt: '', image: '', status: 'Draft' });",
  "setFormData({ title: '', slug: '', category: '', date: '', excerpt: '', content: '', image: '', status: 'Draft' });"
);

// Now, insert the Content field after the excerpt field
const excerptField = `<div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium">Excerpt</label>
              <div className="relative">
                <FileText className="absolute left-3 top-2.5 w-5 h-5 text-muted-foreground" />
                <textarea 
                  required
                  rows={3}
                  value={formData.excerpt}
                  onChange={e => setFormData({...formData, excerpt: e.target.value})}
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Write a brief excerpt..."
                />
              </div>
            </div>`;

const contentField = `<div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium">Content</label>
              <div className="relative">
                <FileText className="absolute left-3 top-2.5 w-5 h-5 text-muted-foreground" />
                <textarea 
                  rows={10}
                  value={formData.content || ''}
                  onChange={e => setFormData({...formData, content: e.target.value})}
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 font-mono text-sm"
                  placeholder="Write the full blog post content here (Markdown supported)..."
                />
              </div>
            </div>`;

code = code.replace(
  excerptField,
  excerptField + '\n            ' + contentField
);

fs.writeFileSync('src/admin/BlogManager.tsx', code);
console.log('BlogManager patched');
