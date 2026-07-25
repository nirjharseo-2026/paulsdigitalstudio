import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Types
export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  client: string;
  url: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  excerpt: string;
  status: 'Published' | 'Draft';
}

interface SiteSettings {
  siteName: string;
  tagline: string;
  contactEmail: string;
  primaryColor: string;
}

interface CMSContextType {
  projects: Project[];
  setProjects: (projects: Project[]) => void;
  addProject: (project: Project) => void;
  deleteProject: (id: string) => void;
  
  posts: BlogPost[];
  setPosts: (posts: BlogPost[]) => void;
  addPost: (post: BlogPost) => void;
  deletePost: (id: string) => void;

  settings: SiteSettings;
  updateSettings: (settings: Partial<SiteSettings>) => void;
}

const defaultProjects: Project[] = [
  { id: '1', title: 'Fintech Dashboard', category: 'Web App', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', client: 'Acme Corp', url: 'example.com' },
  { id: '2', title: 'Healthcare Portal', category: 'Website', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80', client: 'MedTech', url: 'example.com' },
  { id: '3', title: 'E-commerce Redesign', category: 'E-commerce', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80', client: 'StyleStore', url: 'example.com' },
];

const defaultPosts: BlogPost[] = [
  { id: '1', title: 'The Future of AI in Web Development', slug: 'ai-in-web-dev', category: 'Technology', date: 'Oct 12, 2026', excerpt: 'How artificial intelligence is changing the way we build websites.', status: 'Published' },
  { id: '2', title: 'Maximizing ROI with SEO', slug: 'roi-seo', category: 'Marketing', date: 'Oct 05, 2026', excerpt: 'Actionable tips to improve your search engine rankings.', status: 'Published' },
  { id: '3', title: 'Design Trends 2027', slug: 'design-trends-2027', category: 'Design', date: 'Sep 28, 2026', excerpt: 'What to expect in UI/UX design next year.', status: 'Draft' },
];

const defaultSettings: SiteSettings = {
  siteName: 'Pauls Digital Studio',
  tagline: 'AI-Powered Web Development',
  contactEmail: 'paulsdigitalstudio.info@gmail.com',
  primaryColor: '#5B5CEB'
};

const CMSContext = createContext<CMSContextType | undefined>(undefined);

export function CMSProvider({ children }: { children: ReactNode }) {
  const [projects, setProjectsState] = useState<Project[]>(() => {
    const saved = localStorage.getItem('cms_projects');
    return saved ? JSON.parse(saved) : defaultProjects;
  });

  const [posts, setPostsState] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem('cms_posts');
    return saved ? JSON.parse(saved) : defaultPosts;
  });

  const [settings, setSettingsState] = useState<SiteSettings>(() => {
    const saved = localStorage.getItem('cms_settings');
    return saved ? JSON.parse(saved) : defaultSettings;
  });

  // Persist to local storage
  useEffect(() => {
    localStorage.setItem('cms_projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('cms_posts', JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem('cms_settings', JSON.stringify(settings));
  }, [settings]);

  const addProject = (project: Project) => setProjectsState([...projects, project]);
  const deleteProject = (id: string) => setProjectsState(projects.filter(p => p.id !== id));
  
  const addPost = (post: BlogPost) => setPostsState([...posts, post]);
  const deletePost = (id: string) => setPostsState(posts.filter(p => p.id !== id));

  const updateSettings = (newSettings: Partial<SiteSettings>) => setSettingsState({ ...settings, ...newSettings });

  return (
    <CMSContext.Provider value={{
      projects, setProjects: setProjectsState, addProject, deleteProject,
      posts, setPosts: setPostsState, addPost, deletePost,
      settings, updateSettings
    }}>
      {children}
    </CMSContext.Provider>
  );
}

export function useCMS() {
  const context = useContext(CMSContext);
  if (context === undefined) {
    throw new Error('useCMS must be used within a CMSProvider');
  }
  return context;
}
