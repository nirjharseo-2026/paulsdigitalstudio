import { motion } from 'motion/react';

export function PlaceholderPage({ title, description }: { title: string, description: string }) {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <div className="w-20 h-20 bg-primary/10 text-primary rounded-3xl mx-auto flex items-center justify-center mb-8 rotate-3">
          <div className="w-10 h-10 bg-primary rounded-xl -rotate-6" />
        </div>
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">{title}</h1>
        <p className="text-lg text-muted-foreground">{description}</p>
        <div className="mt-12 p-8 rounded-3xl glass border-dashed border-2 border-border text-muted-foreground">
          This is a placeholder page. Real content would be populated here via the CMS or manual editing.
        </div>
      </motion.div>
    </div>
  );
}

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-black font-heading text-primary/20 mb-4">404</h1>
      <h2 className="text-3xl font-bold font-heading mb-4">Page Not Found</h2>
      <p className="text-muted-foreground mb-8">The page you are looking for doesn't exist or has been moved.</p>
      <a href="/" className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors">
        Back to Home
      </a>
    </div>
  );
}
