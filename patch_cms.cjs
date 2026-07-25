const fs = require('fs');
let code = fs.readFileSync('src/context/CMSContext.tsx', 'utf-8');

const interfaceInjection = `
export interface PageContentData {
  [key: string]: string;
}

export interface SiteContent {
  [page: string]: PageContentData;
}
`;

const defaultSiteContentCode = `
const defaultSiteContent: SiteContent = {
  home: {
    heroTag: "AI-Powered Digital Agency",
    heroTitle1: "Transform",
    heroTitle2: "Your",
    heroTitleHighlight: "Digital Presence",
    heroDesc: "We build high-performance websites and execute data-driven performance marketing campaigns powered by cutting-edge artificial intelligence.",
    ctaPrimary: "Start Your Project",
    ctaSecondary: "View Our Work"
  },
  about: {
    heroTag: "About Us",
    heroTitle: "Building the Future of",
    heroTitleHighlight: "Digital Experiences",
    heroDesc: "We are a team of visionary designers, developers, and AI specialists dedicated to pushing the boundaries of what's possible on the web."
  },
  services: {
    heroTitle: "Digital Solutions for the",
    heroTitleHighlight: "AI Era",
    heroDesc: "We leverage cutting-edge technology and artificial intelligence to deliver solutions that drive measurable growth."
  },
  pricing: {
    heroTitle: "Simple, transparent",
    heroTitleHighlight: "pricing",
    heroDesc: "Choose the perfect plan for your business needs. No hidden fees or surprises."
  },
  contact: {
    heroTitle: "Let's build something",
    heroTitleHighlight: "amazing",
    heroDesc: "Ready to take your digital presence to the next level? Get in touch with us today."
  }
};
`;

code = code.replace('interface CMSContextType {', interfaceInjection + '\ninterface CMSContextType {\n  siteContent: SiteContent;\n  updateSiteContent: (page: string, data: PageContentData) => void;');
code = code.replace('const defaultSettings: SiteSettings = {', defaultSiteContentCode + '\nconst defaultSettings: SiteSettings = {');

const stateInjection = `
  const [siteContent, setSiteContentState] = useState<SiteContent>(() => {
    const saved = localStorage.getItem('cms_site_content_v1');
    return saved ? JSON.parse(saved) : defaultSiteContent;
  });

  useEffect(() => {
    localStorage.setItem('cms_site_content_v1', JSON.stringify(siteContent));
  }, [siteContent]);

  const updateSiteContent = (page: string, data: PageContentData) => {
    setSiteContentState(prev => ({ ...prev, [page]: { ...prev[page], ...data } }));
  };
`;

code = code.replace('const addProject =', stateInjection + '\n  const addProject =');
code = code.replace('settings, updateSettings', 'settings, updateSettings,\n      siteContent, updateSiteContent');

fs.writeFileSync('src/context/CMSContext.tsx', code);
console.log('patched');
