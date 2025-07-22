import React from 'react';
import './TechStack.css';

const backendTech = [
  {
    icon: '🧩',
    title: 'Microservice Architecture',
    desc: 'Scalable and modular backend architecture for building scalable and maintainable applications.'
  },
  {
    icon: '🐹',
    title: 'Golang',
    desc: 'Fast and efficient programming language for building scalable and maintainable applications.'
  },
  {
    icon: '🅴',
    title: 'Express.js',
    desc: 'Minimal backend web framework for Node.js.'
  },
  {
    icon: '🪝',
    title: 'Kafka',
    desc: 'Scalable message broker for building real-time applications.'
  },
  {
    icon: '🔗',
    title: 'GraphQL',
    desc: 'Query language for APIs that allows clients to request exactly the data they need and nothing more.'
  },
  {
    icon: '🚂',
    title: 'Ruby on Rails',
    desc: 'Full-stack framework for building web apps with Ruby.'
  }
];

const frontendTech = [
  {
    icon: '⚛️',
    title: 'React.js',
    desc: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.'
  },
  {
    icon: '⏭️',
    title: 'Next.js',
    desc: 'The React framework for production, enabling server-side rendering and static site generation.'
  },
  {
    icon: '🌐',
    title: 'HTML',
    desc: 'The standard markup language for creating web pages.'
  },
  {
    icon: '🎨',
    title: 'CSS',
    desc: 'Style sheet language used for describing the look and formatting of a document written in HTML.'
  },
  {
    icon: '📜',
    title: 'JavaScript',
    desc: 'High-level, versatile programming language for web development.'
  },
  {
    icon: '🅱️',
    title: 'Bootstrap',
    desc: 'Popular CSS framework for developing responsive and mobile-first websites.'
  }
];

const TechStack = () => (
  <section className="techstack-section" id="tech">
    <div className="techstack-title">TECH STACK OVERVIEW</div>
    <div className="techstack-subtitle">BACKEND</div>
    <div className="techstack-grid">
      {backendTech.map((tech, idx) => (
        <div className="techstack-card" key={idx}>
          <div className="techstack-icon">{tech.icon}</div>
          <div className="techstack-card-title">{tech.title}</div>
          <div className="techstack-card-desc">{tech.desc}</div>
        </div>
      ))}
    </div>
    <div className="techstack-subtitle" style={{marginTop: '2.5rem'}}>FRONTEND</div>
    <div className="techstack-grid">
      {frontendTech.map((tech, idx) => (
        <div className="techstack-card" key={idx}>
          <div className="techstack-icon">{tech.icon}</div>
          <div className="techstack-card-title">{tech.title}</div>
          <div className="techstack-card-desc">{tech.desc}</div>
        </div>
      ))}
    </div>
  </section>
);

export default TechStack; 