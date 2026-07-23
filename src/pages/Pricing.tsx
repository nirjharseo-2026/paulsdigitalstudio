import { motion } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      desc: "Perfect for small businesses just getting started online.",
      price: "$999",
      period: "one-time",
      features: [
        "Up to 5 Pages",
        "Mobile Responsive Design",
        "Basic SEO Setup",
        "Contact Form Integration",
        "1 Revision Round",
        "30 Days Support"
      ],
      missing: [
        "AI Chatbot Integration",
        "CMS / Blog Setup",
        "Advanced Analytics"
      ],
      popular: false
    },
    {
      name: "Business",
      desc: "Comprehensive solution for growing companies.",
      price: "$2,499",
      period: "one-time",
      features: [
        "Up to 10 Pages",
        "Premium Custom Design",
        "Advanced SEO Optimization",
        "CMS / Blog Setup",
        "AI Chatbot Integration",
        "3 Revision Rounds",
        "3 Months Support",
        "Basic Analytics Dashboard"
      ],
      missing: [],
      popular: true
    },
    {
      name: "Enterprise",
      desc: "Custom web applications and complex integrations.",
      price: "Custom",
      period: "tailored",
      features: [
        "Unlimited Pages",
        "Full-Stack Web App",
        "E-commerce Functionality",
        "Custom API Integrations",
        "Unlimited Revisions",
        "1 Year Priority Support",
        "Advanced Security Setup",
        "Dedicated Account Manager"
      ],
      missing: [],
      popular: false
    }
  ];

  return (
    <div className="pb-24 pt-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6"
        >
          Transparent, <span className="text-gradient">Value-Based</span> Pricing
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Invest in a digital presence that actually drives ROI. No hidden fees, just predictable growth.
        </motion.p>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-3xl border bg-card flex flex-col h-full ${
                plan.popular ? 'border-primary shadow-2xl shadow-primary/10' : 'border-border shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold font-heading mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm h-10">{plan.desc}</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black font-heading">{plan.price}</span>
                  <span className="text-muted-foreground font-medium">/{plan.period}</span>
                </div>
              </div>
              
              <div className="space-y-4 flex-1 mb-8">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
                {plan.missing.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3 opacity-50">
                    <X className="w-5 h-5 text-muted-foreground shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Link
                to="/contact"
                className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                  plan.popular 
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98]' 
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Maintenance Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl mt-24">
         <div className="glass p-8 md:p-12 rounded-3xl text-center border-t-4 border-t-accent">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">Need Ongoing Maintenance?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
               Websites are living digital assets. Keep yours secure, fast, and up-to-date with our monthly care plans starting at just <strong>$199/mo</strong>.
            </p>
            <Link to="/contact" className="text-primary font-semibold hover:underline inline-flex items-center gap-2">
               Ask about our maintenance plans &rarr;
            </Link>
         </div>
      </div>
    </div>
  );
}
