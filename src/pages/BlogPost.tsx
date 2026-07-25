import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { useCMS } from '../context/CMSContext';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import { NotFound } from './Shared';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { posts } = useCMS();
  
  const post = posts.find(p => p.slug === slug && p.status === 'Published');

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <article className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <div className="mb-8">
          <Link to="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-4 text-sm font-medium text-muted-foreground mb-6">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary">
              <Tag className="w-3.5 h-3.5" />
              {post.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-[1.1] text-foreground">
            {post.title}
          </h1>
        </motion.div>

        {post.image && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl overflow-hidden mb-12 shadow-2xl border border-border"
          >
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </motion.div>
        )}

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg prose-gray dark:prose-invert max-w-none"
        >
          <p className="lead text-xl text-muted-foreground mb-8">
            {post.excerpt}
          </p>
          
          {/* Placeholder content since we only store excerpts right now */}
          <h2>Introduction</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          
          <h3>Key Insights</h3>
          <ul>
            <li>First important point about {post.category.toLowerCase()}</li>
            <li>Second crucial aspect of the topic</li>
            <li>Third perspective on {post.title}</li>
          </ul>
          
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          
          <blockquote>
            "The future belongs to those who prepare for it today, and understanding {post.category.toLowerCase()} is the first step."
          </blockquote>
          
          <h2>Conclusion</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </motion.div>
      </article>
    </div>
  );
}
