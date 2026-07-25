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
  image?: string;
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
  { id: '1', title: 'The Rise of AI Automation in Modern Marketing', slug: 'ai-automation-marketing', category: 'AI Automation', date: 'Oct 12, 2026', excerpt: 'Discover how artificial intelligence is transforming marketing workflows and driving unprecedented efficiency.', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80', status: 'Published' },
  { id: '2', title: 'Mastering Performance Marketing in 2026', slug: 'mastering-performance-marketing', category: 'Performance Marketing', date: 'Oct 05, 2026', excerpt: 'A comprehensive guide to scaling your ad campaigns, optimizing ROI, and mastering data-driven decisions.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80', status: 'Published' },
  { id: '3', title: 'How Machine Learning is Revolutionizing Lead Generation', slug: 'machine-learning-lead-gen', category: 'AI Automation', date: 'Sep 28, 2026', excerpt: 'Learn how predictive algorithms and machine learning models are qualifying leads faster than ever before.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', status: 'Published' },
  { id: '4', title: '5 AI Tools Every Performance Marketer Needs', slug: 'ai-tools-marketers', category: 'AI Automation', date: 'Sep 15, 2026', excerpt: 'Boost your productivity with these top-tier AI automation tools designed for high-performance marketing teams.', image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&w=800&q=80', status: 'Published' },
  { id: '5', title: 'A/B Testing on Steroids: Leveraging AI', slug: 'ab-testing-ai', category: 'Performance Marketing', date: 'Sep 02, 2026', excerpt: 'Take the guesswork out of your campaigns by letting AI automate your A/B testing and creative optimization.', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80', status: 'Published' },
  { id: '6', title: 'Data-Driven Decisions: The Core of Marketing', slug: 'data-driven-marketing', category: 'Performance Marketing', date: 'Aug 20, 2026', excerpt: 'Why clean data and accurate tracking remain the undisputed champions of successful performance marketing.', image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=800&q=80', status: 'Published' },
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
    const saved = localStorage.getItem('cms_projects_v4');
    return saved ? JSON.parse(saved) : defaultProjects;
  });

  const [posts, setPostsState] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem('cms_posts_v4');
    return saved ? JSON.parse(saved) : defaultPosts;
  });

  const [settings, setSettingsState] = useState<SiteSettings>(() => {
    const saved = localStorage.getItem('cms_settings_v4');
    return saved ? JSON.parse(saved) : defaultSettings;
  });

  // Persist to local storage
  useEffect(() => {
    localStorage.setItem('cms_projects_v4', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('cms_posts_v4', JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem('cms_settings_v4', JSON.stringify(settings));
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
