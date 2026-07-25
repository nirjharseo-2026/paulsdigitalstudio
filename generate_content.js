const fs = require('fs');

const defaultSiteContent = {
  home: {
    heroTag: "AI-Powered Digital Agency",
    heroTitle1: "Transform",
    heroTitle2: "Your",
    heroTitleHighlight: "Digital Presence",
    heroDesc: "We build high-performance websites and execute data-driven performance marketing campaigns powered by cutting-edge artificial intelligence.",
    ctaPrimary: "Start Your Project",
    ctaSecondary: "View Our Work"
  },
  about: {
    heroTag: "About Us",
    heroTitle: "Building the Future of",
    heroTitleHighlight: "Digital Experiences",
    heroDesc: "We are a team of visionary designers, developers, and AI specialists dedicated to pushing the boundaries of what's possible on the web."
  },
  services: {
    heroTitle: "Digital Solutions for the",
    heroTitleHighlight: "AI Era",
    heroDesc: "We leverage cutting-edge technology and artificial intelligence to deliver solutions that drive measurable growth."
  },
  pricing: {
    heroTitle: "Simple, transparent",
    heroTitleHighlight: "pricing",
    heroDesc: "Choose the perfect plan for your business needs. No hidden fees or surprises."
  },
  contact: {
    heroTitle: "Let's build something",
    heroTitleHighlight: "amazing",
    heroDesc: "Ready to take your digital presence to the next level? Get in touch with us today."
  }
};

console.log(JSON.stringify(defaultSiteContent, null, 2));
