import { motion } from 'framer-motion';
import { useCMS } from '../context/CMSContext';
import { ArrowUpRight, FolderGit2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Portfolio() {
  const { projects } = useCMS();

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl pb-24 pt-12">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-heading font-bold mb-6"
        >
          Our <span className="text-gradient">Work</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground"
        >
          A selection of our recent projects. We help brands thrive in the digital era.
        </motion.p>
      </div>

      {projects.length === 0 ? (
        <div className="text-center py-24 glass rounded-3xl">
          <FolderGit2 className="w-16 h-16 mx-auto text-muted-foreground mb-4 opacity-50" />
          <h3 className="text-xl font-bold">No projects yet</h3>
          <p className="text-muted-foreground mt-2">Check back soon or add some from the admin dashboard.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-card border border-border flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a href={`https://${project.url}`} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm font-medium text-primary mb-2">{project.category}</div>
                <h3 className="text-xl font-bold font-heading mb-1">{project.title}</h3>
                <div className="text-sm text-muted-foreground">Client: {project.client}</div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <div className="mt-24 text-center">
        <h3 className="text-2xl font-bold font-heading mb-6">Have a project in mind?</h3>
        <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-semibold text-lg hover:bg-foreground/90 transition-all">
          Let's Talk
        </Link>
      </div>
    </div>
  );
}
