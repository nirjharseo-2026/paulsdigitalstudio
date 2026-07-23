import { motion } from 'framer-motion';
import { useCMS } from '../context/CMSContext';
import { Calendar, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Blog() {
  const { posts } = useCMS();
  const publishedPosts = posts.filter(p => p.status === 'Published');

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl pb-24 pt-12">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-heading font-bold mb-6"
        >
          Insights & <span className="text-gradient">Articles</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground"
        >
          Latest news, tips, and trends in AI, Web Development, and Digital Marketing.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {publishedPosts.map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group flex flex-col p-6 rounded-3xl bg-card border border-border hover:shadow-xl hover:border-primary/30 transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                {post.category}
              </span>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                {post.date}
              </div>
            </div>
            
            <h3 className="text-xl font-bold font-heading mb-3 group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            
            <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
              {post.excerpt}
            </p>
            
            <div className="flex items-center text-sm font-semibold text-primary">
              Read Article <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
