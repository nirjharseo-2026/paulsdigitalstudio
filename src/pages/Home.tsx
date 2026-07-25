import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Bot, Code, LineChart, Globe, Zap, Smartphone, Search, Users, Star, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCMS } from '../context/CMSContext';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function Home() {
  const { siteContent } = useCMS();
  const { home } = siteContent;
  return (
    <div className="flex flex-col gap-24 md:gap-32 pb-24 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-12 md:pt-24 min-h-[85vh] flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen" />
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              className="max-w-2xl"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.div 
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { 
                    opacity: 1, 
                    y: [0, -4, 0],
                    boxShadow: [
                      "0px 0px 0px 0px rgba(91, 92, 235, 0)",
                      "0px 0px 15px 2px rgba(91, 92, 235, 0.3)",
                      "0px 0px 0px 0px rgba(91, 92, 235, 0)"
                    ],
                    transition: { 
                      opacity: { duration: 0.5 },
                      y: { repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 },
                      boxShadow: { repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }
                    }
                  }
                }}
                className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6"
              >
                {home.heroTag}
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-7xl font-heading font-extrabold leading-[1.1] mb-6 tracking-tight text-foreground flex flex-wrap gap-x-3 gap-y-2"
                variants={{
                  animate: { transition: { staggerChildren: 0.1 } }
                }}
              >
                {[home.heroTitle1, home.heroTitle2].filter(Boolean).map((word, idx) => (
                  <motion.span 
                    key={idx}
                    variants={{
                      initial: { opacity: 0, y: 40, rotate: 2 },
                      animate: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } }
                    }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
                <div className="w-full h-0"></div>
                <motion.span 
                  variants={{
                    initial: { opacity: 0, y: 40, rotate: 2 },
                    animate: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } }
                  }}
                  className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block"
                >
                  Digital Presence
                </motion.span>
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
                Helping businesses grow with AI-powered websites, digital marketing, automation, and modern technology.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-xl font-bold text-md hover:-translate-y-0.5 transition-all shadow-xl group">
                  {home.ctaPrimary}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/portfolio" className="inline-flex items-center justify-center gap-2 bg-card border border-border text-muted-foreground px-8 py-4 rounded-xl font-semibold text-md hover:bg-muted transition-all">
                  View Portfolio
                </Link>
              </motion.div>

              <motion.div variants={fadeIn} className="mt-12 flex items-center gap-8 text-sm font-medium text-muted-foreground pt-8 border-t border-border">
                <div>
                  <p className="text-2xl font-bold text-foreground">95+</p>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest mt-1">Lighthouse Score</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">250%</p>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest mt-1">Average ROI</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">4.9/5</p>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest mt-1">Client Rating</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Illustration / Visual */}
            <motion.div 
              className="relative hidden lg:flex h-[600px] w-full bg-muted/30 rounded-3xl items-center justify-center p-12 overflow-hidden border border-border"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#F8FAFC_100%)] dark:bg-[radial-gradient(circle_at_center,_#111827_0%,_#000000_100%)] opacity-50"></div>
              
              <div className="relative w-full max-w-sm bg-card rounded-3xl shadow-2xl p-6 border border-border transform rotate-2">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-amber-400 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full"></div>
                  </div>
                  <div className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded">LIVE DASHBOARD</div>
                </div>
                
                <div className="space-y-4">
                  <div className="h-24 bg-muted/50 rounded-xl border border-dashed border-border flex items-center justify-center">
                    <div className="flex flex-col items-center">
                      <span className="text-xs font-semibold text-muted-foreground">AI Lead Conversion</span>
                      <span className="text-xl font-bold text-primary">+184%</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-16 bg-primary/5 rounded-xl p-3">
                      <div className="w-5 h-1.5 bg-primary/20 rounded mb-2"></div>
                      <div className="w-8 h-3 bg-primary/40 rounded"></div>
                    </div>
                    <div className="h-16 bg-muted/50 rounded-xl p-3">
                      <div className="w-5 h-1.5 bg-border rounded mb-2"></div>
                      <div className="w-8 h-3 bg-muted-foreground/30 rounded"></div>
                    </div>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-primary"></div>
                  </div>
                </div>
              </div>

              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute bottom-24 left-10 p-4 bg-card/90 backdrop-blur rounded-2xl shadow-lg border border-border flex items-center space-x-3 -rotate-3"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">Ultra Fast Delivery</p>
                  <p className="text-[10px] text-muted-foreground">Launched in 7 days</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-card border-y border-border py-8">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] whitespace-nowrap">
              Trusted by innovative brands
            </span>
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 opacity-30 grayscale">
              <div className="text-xl font-black italic">VERCEL</div>
              <div className="text-xl font-black">LINEAR</div>
              <div className="text-xl font-black">STRIPE</div>
              <div className="text-xl font-black italic underline decoration-4">apple</div>
              <div className="text-xl font-black tracking-tighter">Webflow</div>
            </div>
            <div className="hidden lg:flex items-center space-x-2 text-success text-xs font-bold whitespace-nowrap">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span>System Status: 100% Online</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Our Services</h2>
          <p className="text-lg text-muted-foreground">Comprehensive digital solutions to accelerate your business growth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Globe, title: 'AI Website Development', desc: 'Custom, high-converting websites built with modern frameworks and AI workflows.' },
            { icon: Search, title: 'SEO Optimization', desc: 'Dominate search results with data-driven on-page and technical SEO strategies.' },
            { icon: LineChart, title: 'Digital Marketing', desc: 'Targeted campaigns across Facebook, Google, and Social Media to drive real leads.' },
            { icon: Bot, title: 'AI Automation', desc: 'Streamline operations with smart chatbots, lead generation, and email automation.' },
            { icon: Smartphone, title: 'Responsive Design', desc: 'Flawless experiences across all devices, prioritizing mobile-first design.' },
            { icon: Code, title: 'Website Maintenance', desc: 'Ongoing support, security updates, and performance optimization for your site.' },
          ].map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-card border border-border hover:shadow-xl hover:shadow-primary/5 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/50 py-24 border-y border-border">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Built for Performance & Scale</h2>
              <p className="text-lg text-muted-foreground mb-8">We don't just build websites; we build digital growth engines. Our AI-driven workflow ensures maximum quality and speed.</p>
              
              <div className="space-y-6">
                {[
                  { title: 'Lightning Fast Load Times', desc: '95+ Lighthouse scores guaranteed for better user experience.' },
                  { title: 'AI-Powered Workflow', desc: 'Leveraging cutting-edge AI to reduce development time and cost.' },
                  { title: 'Scalable Architecture', desc: 'Built on modern stacks like React and Tailwind for future growth.' }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 w-8 h-8 rounded-full bg-success/20 text-success flex items-center justify-center flex-shrink-0">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               {/* Stats Grid */}
               <div className="glass p-6 rounded-3xl flex flex-col justify-center items-center text-center gap-2 aspect-square">
                  <div className="text-4xl font-black font-heading text-primary">150+</div>
                  <div className="text-sm font-medium text-muted-foreground">Projects Delivered</div>
               </div>
               <div className="glass p-6 rounded-3xl flex flex-col justify-center items-center text-center gap-2 aspect-square mt-8">
                  <div className="text-4xl font-black font-heading text-secondary">99%</div>
                  <div className="text-sm font-medium text-muted-foreground">Client Satisfaction</div>
               </div>
               <div className="glass p-6 rounded-3xl flex flex-col justify-center items-center text-center gap-2 aspect-square -mt-8">
                  <div className="text-4xl font-black font-heading text-accent">5x</div>
                  <div className="text-sm font-medium text-muted-foreground">Avg. ROI Increase</div>
               </div>
               <div className="glass p-6 rounded-3xl flex flex-col justify-center items-center text-center gap-2 aspect-square">
                  <div className="text-4xl font-black font-heading text-success">24/7</div>
                  <div className="text-sm font-medium text-muted-foreground">Support Available</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
        <div className="relative rounded-3xl overflow-hidden bg-foreground text-background py-16 px-8 md:px-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-50 mix-blend-overlay" />
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Ready to scale your business?</h2>
            <p className="text-lg text-background/80 mb-8">Book a free consultation today and let's discuss how we can transform your digital presence.</p>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 active:scale-95">
              Book Free Consultation
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}
