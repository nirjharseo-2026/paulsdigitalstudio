import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl pb-24 pt-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            Let's build something <span className="text-gradient">amazing</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground mb-12"
          >
            Whether you need a new website, a complex web application, or a digital marketing strategy, we're here to help.
          </motion.p>

          <div className="space-y-8">
            {[
              { icon: Mail, title: 'Email Us', info: 'hello@paulsdigital.com' },
              { icon: Phone, title: 'Call Us', info: '+1 (555) 123-4567' },
              { icon: MapPin, title: 'Visit Us', info: '123 Innovation Drive, Tech City, TC 10010' },
              { icon: MessageSquare, title: 'WhatsApp', info: 'Available Mon-Fri, 9am-6pm' },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-muted-foreground">{item.info}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass p-8 md:p-10 rounded-3xl"
        >
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <div className="w-16 h-16 bg-success/20 text-success rounded-full flex items-center justify-center mb-4">
                <Send className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-heading">Message Sent!</h3>
              <p className="text-muted-foreground">Thank you for reaching out. We will get back to you within 24 hours.</p>
              <button onClick={() => setSubmitted(false)} className="mt-4 text-primary font-medium hover:underline">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-2xl font-bold font-heading mb-6">Book a Free Consultation</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <input required type="email" className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Service Needed</label>
                <select className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow">
                  <option>Website Development</option>
                  <option>E-commerce Solutions</option>
                  <option>SEO & Digital Marketing</option>
                  <option>AI & Automation</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Project Details</label>
                <textarea required rows={4} className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none" placeholder="Tell us about your project..." />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Send Message <Send className="w-5 h-5" /></>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
