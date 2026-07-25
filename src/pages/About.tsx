import { motion } from 'motion/react';
import { useCMS } from '../context/CMSContext';
import { Target, Eye, Users, Heart, Zap, Shield, CheckCircle2, Handshake } from 'lucide-react';

export function About() {
  const { siteContent } = useCMS();
  const { about } = siteContent;
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const values = [
    { icon: <Zap className="w-6 h-6" />, title: "Innovation through AI" },
    { icon: <CheckCircle2 className="w-6 h-6" />, title: "Quality without compromise" },
    { icon: <Shield className="w-6 h-6" />, title: "Transparency and trust" },
    { icon: <Heart className="w-6 h-6" />, title: "Customer-first approach" },
    { icon: <Target className="w-6 h-6" />, title: "Continuous improvement" },
    { icon: <Handshake className="w-6 h-6" />, title: "Long-term partnerships" },
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl mb-24">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial="hidden"
          animate="animate"
          variants={stagger}
        >
          <motion.div variants={fadeIn} className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            About Us
          </motion.div>
          <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-heading font-extrabold leading-[1.1] mb-6 text-foreground">
            Building the Future of <br className="hidden md:block"/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">{about.heroTitleHighlight}</span>
          </motion.h1>
          <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Pauls Digital Studio is a modern AI-powered web development and digital marketing agency dedicated to helping businesses build a powerful online presence.
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold font-heading text-foreground">Our Mission</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our mission is to empower small and medium-sized businesses with AI-powered digital solutions that are fast, affordable, and results-driven. We combine creativity, technology, and automation to build high-quality websites, effective digital marketing campaigns, and smart business solutions that help our clients grow in the digital world.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-3xl overflow-hidden bg-card border border-border shadow-2xl flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
            <Target className="w-32 h-32 text-primary opacity-20" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1 relative h-[400px] rounded-3xl overflow-hidden bg-card border border-border shadow-2xl flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5" />
            <Eye className="w-32 h-32 text-secondary opacity-20" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2 space-y-6"
          >
            <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold font-heading text-foreground">Our Vision</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our vision is to become one of the most trusted AI-powered digital studios, helping businesses across Bangladesh and around the world embrace the future of technology. We strive to make professional web development and digital marketing accessible to every business, enabling them to compete, innovate, and succeed in the AI era.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story/Detailed About Section */}
      <section className="bg-muted py-24 border-y border-border mb-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl text-center">
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
           >
            <div className="w-12 h-12 bg-card rounded-2xl flex items-center justify-center text-foreground mx-auto mb-6 shadow-sm border border-border">
              <Users className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold font-heading mb-8 text-foreground">What We Do</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-left">
              <p>
                We specialize in creating beautiful, responsive, and SEO-friendly websites, developing high-converting landing pages, implementing AI automation, managing social media marketing, and delivering digital strategies that drive real business growth.
              </p>
              <p>
                By combining the latest AI technologies with creative design and data-driven marketing, we deliver solutions that are faster, smarter, and more cost-effective than traditional approaches.
              </p>
              <p>
                Whether you're a startup, a local business, or an established company, Pauls Digital Studio is your trusted digital partner—turning ideas into impactful digital experiences and helping your business grow with confidence.
              </p>
            </div>
           </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">Our Core Values</h2>
          <p className="text-muted-foreground text-lg">The principles that guide everything we do.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border p-8 rounded-3xl hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
