import { useState } from 'react';
import { useCMS, BlogPost } from '../context/CMSContext';
import { Plus, Trash2, Edit2, Image as ImageIcon, Calendar, FileText, Tag, Link as LinkIcon } from 'lucide-react';

export function BlogManager() {
  const { posts, addPost, updatePost, deletePost } = useCMS();
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  
  const [formData, setFormData] = useState<Omit<BlogPost, 'id'>>({
    title: '',
    slug: '',
    category: '',
    date: '',
    excerpt: '',
    image: '',
    status: 'Draft'
  });

  const handleEdit = (post: BlogPost) => {
    setFormData({
      title: post.title || '',
      slug: post.slug || '',
      category: post.category || '',
      date: post.date || '',
      excerpt: post.excerpt || '',
      image: post.image || '',
      status: post.status || 'Draft'
    });
    setIsEditing(post.id);
    setIsAdding(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancel = () => {
    setIsAdding(false);
    setIsEditing(null);
    setFormData({ title: '', slug: '', category: '', date: '', excerpt: '', image: '', status: 'Draft' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      updatePost({
        ...formData,
        id: isEditing
      });
    } else {
      const newPost: BlogPost = {
        ...formData,
        id: Date.now().toString()
      };
      addPost(newPost);
    }
    handleCancel();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-heading font-bold">Blog Post Manager</h1>
        <button 
          onClick={() => isAdding ? handleCancel() : setIsAdding(true)}
          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
        >
          {isAdding ? 'Cancel' : <><Plus className="w-4 h-4" /> Add Post</>}
        </button>
      </div>

      {isAdding && (
        <div className="mb-8 p-6 rounded-2xl bg-card border border-border shadow-sm">
          <h3 className="font-heading font-bold text-lg mb-6">{isEditing ? 'Edit Post' : 'Add New Post'}</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Post Title</label>
              <input 
                required
                type="text" 
                value={formData.title}
                onChange={e => setFormData({...formData, title: e.target.value})}
                className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="e.g. The Future of AI in Web Development"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Slug</label>
              <div className="relative">
                <LinkIcon className="absolute left-3 top-2.5 w-5 h-5 text-muted-foreground" />
                <input 
                  required
                  type="text" 
                  value={formData.slug}
                  onChange={e => setFormData({...formData, slug: e.target.value})}
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="e.g. ai-in-web-dev"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Category</label>
              <div className="relative">
                <Tag className="absolute left-3 top-2.5 w-5 h-5 text-muted-foreground" />
                <input 
                  required
                  type="text" 
                  value={formData.category}
                  onChange={e => setFormData({...formData, category: e.target.value})}
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="e.g. Technology"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-2.5 w-5 h-5 text-muted-foreground" />
                <input 
                  required
                  type="text" 
                  value={formData.date}
                  onChange={e => setFormData({...formData, date: e.target.value})}
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="e.g. Oct 12, 2026"
                />
              </div>
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium">Image URL</label>
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <ImageIcon className="absolute left-3 top-2.5 w-5 h-5 text-muted-foreground" />
                  <input 
                    type="url" 
                    value={formData.image}
                    onChange={e => setFormData({...formData, image: e.target.value})}
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-2 md:col-span-2">
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
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium">Status</label>
              <select 
                value={formData.status}
                onChange={e => setFormData({...formData, status: e.target.value as 'Draft' | 'Published'})}
                className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
              </select>
            </div>
            <div className="md:col-span-2 flex justify-end">
              <button type="submit" className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                {isEditing ? 'Update Post' : 'Save Post'}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-card rounded-2xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/50 border-b border-border">
              <tr>
                <th className="px-6 py-4 font-semibold">Post</th>
                <th className="px-6 py-4 font-semibold">Category</th>
                <th className="px-6 py-4 font-semibold">Date</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-muted-foreground">
                    No posts found.
                  </td>
                </tr>
              ) : (
                posts.map(post => (
                  <tr key={post.id} className="border-b border-border last:border-0 hover:bg-muted/20">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {post.image ? (
                          <img src={post.image} alt="" className="w-10 h-10 rounded object-cover bg-muted" />
                        ) : (
                          <div className="w-10 h-10 rounded bg-muted flex items-center justify-center">
                            <ImageIcon className="w-4 h-4 text-muted-foreground" />
                          </div>
                        )}
                        <div className="flex flex-col">
                           <span className="font-medium line-clamp-1">{post.title}</span>
                           <span className="text-xs text-muted-foreground">/{post.slug}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">{post.category}</td>
                    <td className="px-6 py-4">{post.date}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                        post.status === 'Published' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                      }`}>
                        {post.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button type="button" onClick={() => handleEdit(post)} className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button 
                          type="button"
                          onClick={() => deletePost(post.id)}
                          className="p-2 text-muted-foreground hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
