import { useState } from 'react';
import { useCMS, PageContentData } from '../context/CMSContext';

export function PagesManager() {
  const { siteContent, updateSiteContent } = useCMS();
  const [activePage, setActivePage] = useState<string>(Object.keys(siteContent)[0]);

  const [formData, setFormData] = useState<PageContentData>(siteContent[activePage]);

  const handleTabChange = (page: string) => {
    setActivePage(page);
    setFormData(siteContent[page]);
  };

  const handleChange = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSiteContent(activePage, formData);
    // show success indicator here if needed
  };

  const formatKeyName = (key: string) => {
    return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-heading font-bold">Pages Content Manager</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Tabs */}
        <div className="w-full md:w-64 space-y-2">
          {Object.keys(siteContent).map(page => (
            <button
              key={page}
              onClick={() => handleTabChange(page)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-colors capitalize ${
                activePage === page 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-card border border-border text-foreground hover:bg-muted/50'
              }`}
            >
              {page} Page
            </button>
          ))}
        </div>

        {/* Content Form */}
        <div className="flex-1 bg-card rounded-2xl border border-border p-6 md:p-8">
          <h2 className="text-xl font-bold font-heading mb-6 capitalize">{activePage} Page Content</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {Object.entries(formData).map(([key, value]) => (
              <div key={key} className="space-y-2">
                <label className="text-sm font-medium">{formatKeyName(key)}</label>
                {value.length > 50 || key.toLowerCase().includes('desc') ? (
                  <textarea 
                    value={value}
                    onChange={e => handleChange(key, e.target.value)}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                ) : (
                  <input 
                    type="text" 
                    value={value}
                    onChange={e => handleChange(key, e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                )}
              </div>
            ))}
            
            <div className="pt-4 flex justify-end">
              <button 
                type="submit" 
                className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
