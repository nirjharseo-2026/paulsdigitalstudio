import { motion } from 'motion/react';
import { useCMS } from '../context/CMSContext';
import { Link } from 'react-router-dom';

export function Blog() {
  const { posts } = useCMS();
  const publishedPosts = posts.filter(p => p.status === 'Published');
  
  const mainPosts = publishedPosts.slice(0, 3);
  const featuredPosts = publishedPosts.slice(3, 6);
  const latestPosts = publishedPosts.slice(3); // You can adjust this slice as needed

  return (
    <div className="pt-24 pb-24">
      {/* Header Section */}
      <div className="flex items-center mb-8 max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold font-heading whitespace-nowrap mr-6 text-foreground">
          Insights on AI & Performance Marketing
        </h2>
        <div className="h-[1px] w-full bg-border flex-1"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Main 3 Cards Area */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
            {mainPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={`/blog/${post.slug}`} className="relative h-[480px] rounded-2xl overflow-hidden group block">
                  <img 
                    src={post.image || 'https://images.unsplash.com/photo-1473496169904-658ba37448eb?auto=format&fit=crop&w=800&q=80'} 
                    alt={post.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end text-white">
                    <span className="bg-white text-black text-xs font-semibold px-3 py-1 rounded-full self-start mb-4 shadow-sm">
                      {post.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold font-heading mb-3 leading-tight group-hover:text-gray-200 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-white/80 text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Sidebar Area */}
          <div className="w-full lg:w-80 flex flex-col gap-10">
            {/* Featured */}
            <div>
              <div className="flex items-center mb-6">
                <h3 className="font-bold text-lg mr-4 text-foreground">Featured</h3>
                <div className="h-[1px] bg-border flex-1"></div>
              </div>
              <div className="flex flex-col gap-6">
                {featuredPosts.map((post, i) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link to={`/blog/${post.slug}`} className="flex gap-4 group">
                      <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 shadow-sm border border-border">
                        <img 
                          src={post.image || 'https://images.unsplash.com/photo-1473496169904-658ba37448eb?auto=format&fit=crop&w=800&q=80'} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="text-xs text-muted-foreground mb-1 font-medium">{post.date}</span>
                        <h4 className="font-bold text-sm leading-tight group-hover:text-primary transition-colors line-clamp-3">
                          {post.title}
                        </h4>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Latest */}
            <div>
              <div className="flex items-center mb-6">
                <h3 className="font-bold text-lg mr-4 text-foreground">Latest</h3>
                <div className="h-[1px] bg-border flex-1"></div>
              </div>
              <div className="flex flex-col gap-6">
                {latestPosts.map((post, i) => (
                  <motion.div
                    key={post.id + '-latest'}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <Link to={`/blog/${post.slug}`} className="flex gap-4 group">
                      <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 shadow-sm border border-border">
                        <img 
                          src={post.image || 'https://images.unsplash.com/photo-1473496169904-658ba37448eb?auto=format&fit=crop&w=800&q=80'} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="text-xs text-muted-foreground mb-1 font-medium">{post.date}</span>
                        <h4 className="font-bold text-sm leading-tight group-hover:text-primary transition-colors line-clamp-3">
                          {post.title}
                        </h4>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
