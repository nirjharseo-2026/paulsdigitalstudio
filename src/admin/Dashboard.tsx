import { useCMS } from '../context/CMSContext';
import { Users, FileText, Briefcase, TrendingUp, MessageSquare } from 'lucide-react';

export function Dashboard() {
  const { projects, posts, messages } = useCMS();
  const unreadMessagesCount = messages.filter(m => !m.read).length;

  const stats = [
    { name: 'Total Projects', value: projects.length, icon: Briefcase, color: 'text-primary', bg: 'bg-primary/10' },
    { name: 'Blog Posts', value: posts.length, icon: FileText, color: 'text-secondary', bg: 'bg-secondary/10' },
    { name: 'Unread Messages', value: unreadMessagesCount, icon: MessageSquare, color: 'text-accent', bg: 'bg-accent/10' },
    { name: 'Conversion Rate', value: '4.2%', icon: TrendingUp, color: 'text-success', bg: 'bg-success/10' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-heading font-bold mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="p-6 rounded-2xl bg-card border border-border flex items-center gap-4 shadow-sm">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground font-medium">{stat.name}</div>
              <div className="text-2xl font-bold font-heading">{stat.value}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
          <h3 className="font-heading font-bold text-lg mb-4">Recent Projects</h3>
          <div className="space-y-4">
            {projects.slice(0, 3).map(project => (
              <div key={project.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors">
                <img src={project.image} alt={project.title} className="w-12 h-12 rounded-lg object-cover" />
                <div>
                  <div className="font-semibold text-sm">{project.title}</div>
                  <div className="text-xs text-muted-foreground">{project.category}</div>
                </div>
              </div>
            ))}
            {projects.length === 0 && <div className="text-sm text-muted-foreground">No projects yet.</div>}
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
          <h3 className="font-heading font-bold text-lg mb-4">Recent Posts</h3>
          <div className="space-y-4">
            {posts.slice(0, 3).map(post => (
              <div key={post.id} className="flex flex-col gap-1 p-3 rounded-lg hover:bg-muted transition-colors">
                <div className="font-semibold text-sm">{post.title}</div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{post.date}</span>
                  <span className={`px-2 py-0.5 rounded-full ${post.status === 'Published' ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'}`}>
                    {post.status}
                  </span>
                </div>
              </div>
            ))}
            {posts.length === 0 && <div className="text-sm text-muted-foreground">No posts yet.</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
