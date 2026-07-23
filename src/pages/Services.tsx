import { motion } from 'framer-motion';
import { Globe, Search, LineChart, Bot, Smartphone, Code, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Services() {
  const services = [
    { icon: Globe, title: 'AI Website Development', desc: 'Custom, high-converting websites built with modern frameworks and AI workflows for lightning-fast delivery.', features: ['Custom React Development', 'Headless CMS Integration', 'Performance Optimization', 'AI-assisted Content'] },
    { icon: Search, title: 'SEO & Content Marketing', desc: 'Dominate search results with data-driven on-page and technical SEO strategies.', features: ['Technical SEO Audits', 'Keyword Strategy', 'Content Generation', 'Link Building'] },
    { icon: LineChart, title: 'Performance Marketing', desc: 'Targeted campaigns across Facebook, Google, and Social Media to drive real leads.', features: ['Google Ads Management', 'Meta Ads', 'Conversion Tracking', 'ROI Analytics'] },
    { icon: Bot, title: 'AI Automation & Chatbots', desc: 'Streamline operations with smart chatbots, lead generation, and email automation.', features: ['Custom Chatbot Training', 'Workflow Automation', 'CRM Integration', '24/7 Lead Capture'] },
    { icon: Smartphone, title: 'Mobile-First Design', desc: 'Flawless experiences across all devices, prioritizing mobile-first design methodologies.', features: ['Responsive Layouts', 'Touch Optimization', 'Cross-browser Testing', 'PWA Development'] },
    { icon: Code, title: 'Maintenance & Support', desc: 'Ongoing support, security updates, and performance optimization for your site.', features: ['24/7 Monitoring', 'Security Updates', 'Content Updates', 'Monthly Reporting'] },
  ];

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="pt-24 pb-16 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6"
          >
            Digital Solutions for the <span className="text-gradient">AI Era</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            We leverage cutting-edge technology and artificial intelligence to deliver solutions that drive measurable growth.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 md:p-10 rounded-3xl bg-card border border-border hover:shadow-2xl hover:shadow-primary/5 transition-all group flex flex-col h-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-heading">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">{service.desc}</p>
              
              <div className="mt-auto pt-8 border-t border-border">
                <ul className="space-y-3">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl text-center">
        <div className="glass p-12 rounded-3xl">
          <h2 className="text-3xl font-heading font-bold mb-4">Not sure what you need?</h2>
          <p className="text-muted-foreground mb-8">Schedule a free consultation and we'll help you map out the perfect digital strategy.</p>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/25">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
