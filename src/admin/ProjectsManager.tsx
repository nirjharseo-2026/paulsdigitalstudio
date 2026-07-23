import { useState } from 'react';
import { useCMS, Project } from '../context/CMSContext';
import { Plus, Trash2, Edit2, Image as ImageIcon, Link as LinkIcon, Briefcase } from 'lucide-react';

export function ProjectsManager() {
  const { projects, addProject, deleteProject } = useCMS();
  const [isAdding, setIsAdding] = useState(false);
  
  const [formData, setFormData] = useState<Omit<Project, 'id'>>({
    title: '',
    category: '',
    image: '',
    client: '',
    url: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProject: Project = {
      ...formData,
      id: Date.now().toString()
    };
    addProject(newProject);
    setIsAdding(false);
    setFormData({ title: '', category: '', image: '', client: '', url: '' });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-heading font-bold">Projects Manager</h1>
        <button 
          onClick={() => setIsAdding(!isAdding)}
          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
        >
          {isAdding ? 'Cancel' : <><Plus className="w-4 h-4" /> Add Project</>}
        </button>
      </div>

      {isAdding && (
        <div className="mb-8 p-6 rounded-2xl bg-card border border-border shadow-sm">
          <h3 className="font-heading font-bold text-lg mb-6">Add New Project</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Project Title</label>
              <input 
                required
                type="text" 
                value={formData.title}
                onChange={e => setFormData({...formData, title: e.target.value})}
                className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="e.g. E-commerce Redesign"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Category</label>
              <input 
                required
                type="text" 
                value={formData.category}
                onChange={e => setFormData({...formData, category: e.target.value})}
                className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="e.g. Web Development"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium">Image URL</label>
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <ImageIcon className="absolute left-3 top-2.5 w-5 h-5 text-muted-foreground" />
                  <input 
                    required
                    type="url" 
                    value={formData.image}
                    onChange={e => setFormData({...formData, image: e.target.value})}
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Client Name</label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-2.5 w-5 h-5 text-muted-foreground" />
                <input 
                  type="text" 
                  value={formData.client}
                  onChange={e => setFormData({...formData, client: e.target.value})}
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Acme Corp"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Live URL</label>
              <div className="relative">
                <LinkIcon className="absolute left-3 top-2.5 w-5 h-5 text-muted-foreground" />
                <input 
                  type="text" 
                  value={formData.url}
                  onChange={e => setFormData({...formData, url: e.target.value})}
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="example.com"
                />
              </div>
            </div>
            <div className="md:col-span-2 flex justify-end">
              <button type="submit" className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Save Project
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
                <th className="px-6 py-4 font-semibold">Project</th>
                <th className="px-6 py-4 font-semibold">Category</th>
                <th className="px-6 py-4 font-semibold">Client</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-muted-foreground">
                    No projects found.
                  </td>
                </tr>
              ) : (
                projects.map(project => (
                  <tr key={project.id} className="border-b border-border last:border-0 hover:bg-muted/20">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={project.image} alt="" className="w-10 h-10 rounded object-cover bg-muted" />
                        <span className="font-medium">{project.title}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">{project.category}</td>
                    <td className="px-6 py-4">{project.client}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => deleteProject(project.id)}
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
