/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout, AdminLayout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { Services } from './pages/Services';
import { Pricing } from './pages/Pricing';
import { About } from './pages/About';
import { PlaceholderPage, NotFound } from './pages/Shared';
import { Dashboard } from './admin/Dashboard';
import { ProjectsManager } from './admin/ProjectsManager';
import { CMSProvider } from './context/CMSContext';

export default function App() {
  return (
    <CMSProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="case-studies" element={<PlaceholderPage title="Case Studies" description="In-depth analysis of how we helped businesses achieve their goals." />} />
            <Route path="faq" element={<PlaceholderPage title="Frequently Asked Questions" description="Find answers to common questions about our services." />} />
            <Route path="privacy" element={<PlaceholderPage title="Privacy Policy" description="How we handle and protect your data." />} />
            <Route path="terms" element={<PlaceholderPage title="Terms of Service" description="The terms and conditions for using our services." />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="projects" element={<ProjectsManager />} />
            <Route path="blog" element={<div className="p-8 text-center glass rounded-3xl mt-12">Blog manager coming soon.</div>} />
            <Route path="settings" element={<div className="p-8 text-center glass rounded-3xl mt-12">Settings panel coming soon.</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CMSProvider>
  );
}
