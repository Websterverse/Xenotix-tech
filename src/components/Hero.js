import React from 'react';
import './Hero.css';

const iotNodes = [
  { icon: '💻', label: 'PC' },
  { icon: '🤖', label: 'Robot' },
  { icon: '🛴', label: 'Scooter' },
  { icon: '🛰️', label: 'Satellite' },
  { icon: '🚗', label: 'Car' },
  { icon: '🦾', label: 'Arm' },
];

const userImgs = [
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/65.jpg',
  'https://randomuser.me/api/portraits/women/12.jpg',
];

const floatingCards = [
  {
    style: { top: '30%', right: '13%', transform: 'rotate(-7deg)' },
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    title: 'Google Ads',
    desc: '4.8 Reviews',
  },
];

const leftFloatingCards = [
  {
    style: { top: '6%', left: '2%', transform: 'rotate(-7deg)', zIndex: 2 },
    icon: '💬',
    title: 'Xenotix Tech',
    desc: 'Tired of your 9-5? Dreaming of your own brand? Quit Dreaming. Start Building.'
  },
  {
    style: { top: '20%', left: '7%', transform: 'rotate(-12deg)', zIndex: 3 },
    icon: '🤖',
    title: 'Artificial Intelligence',
    desc: 'Smart solutions for modern problems.'
  },
  {
    style: { top: '38%', left: '3%', transform: 'rotate(6deg)', zIndex: 2 },
    icon: '🔗',
    title: 'Blockchain',
    desc: 'Automation, Security, Decentralization.'
  },
  {
    style: { top: '55%', left: '10%', transform: 'rotate(-8deg)', zIndex: 4 },
    icon: '⚙️',
    logo: 'https://cdn-icons-png.flaticon.com/512/3523/3523887.png',
    title: 'Automation',
    desc: 'Smart workflows for efficiency.'
  },
  {
    style: { top: '70%', left: '5%', transform: 'rotate(10deg)', zIndex: 2 },
    icon: '🎨',
    title: 'UI/UX Designing',
    desc: 'Crafting intuitive, aesthetic, and user-friendly digital experiences.'
  }
];

const rightFloatingCards = [
  {
    style: { top: '7%', right: '2%', transform: 'rotate(7deg)', zIndex: 2 },
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    title: 'Google Ads',
    desc: '4.8 Reviews',
  },
  {
    style: { top: '20%', right: '7%', transform: 'rotate(-12deg)', zIndex: 3 },
    icons: ['🌐', '📘', '📸', '🐦', '✅'],
    title: 'META ADS',
    desc: 'Social Media Marketing',
  },
  {
    style: { top: '38%', right: '3%', transform: 'rotate(6deg)', zIndex: 2 },
    icon: '🏷️',
    title: 'Branding',
    desc: 'Living Identities',
  },
  {
    style: { top: '55%', right: '10%', transform: 'rotate(-8deg)', zIndex: 4 },
    icon: '💬',
    title: 'Xenotix Tech',
    desc: 'Posting but getting zero traction? Start Online Business?',
  },
  {
    style: { top: '70%', right: '5%', transform: 'rotate(10deg)', zIndex: 2 },
    icon: '📢',
    title: 'Social Media Marketing',
    desc: 'Unlock a world of possibilities for your brand. Our streamlined approach ensures that you can maximize your online presence.',
    tags: ['S1', 'Checklist', 'S2', 'Trending Things'],
  }
];

const FloatingCards = () => (
  <div className="floating-cards-container">
    {floatingCards.map((card, i) => (
      <div className="floating-card-glass" style={card.style} key={i}>
        {card.logo && (
          <img src={card.logo} alt={card.title + ' logo'} className="floating-card-logo" />
        )}
        <div className="floating-card-title">{card.title}</div>
        <div className="floating-card-desc">{card.desc}</div>
      </div>
    ))}
  </div>
);

const LeftFloatingCards = () => (
  <div className="left-floating-cards-container">
    {leftFloatingCards.map((card, i) => (
      <div className="floating-card-glass" style={card.style} key={i}>
        {card.logo && (
          <img src={card.logo} alt={card.title + ' logo'} className="left-floating-card-logo" />
        )}
        <div className="left-floating-card-icon">{card.icon}</div>
        <div className="left-floating-card-title">{card.title}</div>
        <div className="left-floating-card-desc">{card.desc}</div>
      </div>
    ))}
  </div>
);

const RightFloatingCards = () => (
  <div className="right-floating-cards-container">
    {rightFloatingCards.map((card, i) => (
      <div className="floating-card-glass" style={card.style} key={i}>
        {card.logo && (
          <img src={card.logo} alt={card.title + ' logo'} className="right-floating-card-logo" />
        )}
        {card.icons && (
          <div className="right-floating-card-icons">
            {card.icons.map((ic, idx) => (
              <span key={idx} className="right-floating-card-icon">{ic}</span>
            ))}
          </div>
        )}
        {card.icon && <div className="right-floating-card-icon">{card.icon}</div>}
        <div className="right-floating-card-title">{card.title}</div>
        <div className="right-floating-card-desc">{card.desc}</div>
        {card.tags && (
          <div className="right-floating-card-tags">
            {card.tags.map((tag, idx) => (
              <span key={idx} className="right-floating-card-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    ))}
  </div>
);

const floatingIconRow = [
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React', rotate: '-12deg' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', alt: 'Figma', rotate: '8deg' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg', alt: 'WordPress', rotate: '-7deg' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg', alt: 'SEO', rotate: '10deg' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', alt: 'GitHub', rotate: '-8deg' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf8ZwQVJ4EjnO8oWqjAZGEy-IbyqfLCcmYHg&s', alt: 'AWS', rotate: '7deg' },
];

const FloatingIconRow = () => (
  <div className="floating-icon-row">
    {floatingIconRow.map((icon, i) => (
      <div
        className="floating-icon-square"
        style={{ transform: `rotate(${icon.rotate})` }}
        key={i}
      >
        <img src={icon.src} alt={icon.alt} className="floating-icon-img" />
      </div>
    ))}
  </div>
);

const Hero = () => (
  <section className="hero-section">
    <FloatingCards />
    <LeftFloatingCards />
    <RightFloatingCards />
    <div className="hero-content">
      <div className="hero-title-group">
        <div className="hero-brand">Xenotix Tech</div>
        <div className="hero-title-row">
          <h1 className="hero-title">Got a startup Idea ?</h1>
          <svg className="hero-squiggle-arrow-inline" width="60" height="60" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 80 Q 30 60, 40 70 Q 55 85, 60 60 Q 65 35, 80 40" stroke="url(#arrow-gradient)" strokeWidth="4" fill="none"/>
            <defs>
              <linearGradient id="arrow-gradient" x1="10" y1="80" x2="80" y2="40" gradientUnits="userSpaceOnUse">
                <stop stopColor="#b39ddb"/>
                <stop offset="1" stopColor="#7c4dff"/>
              </linearGradient>
            </defs>
            <polygon points="80,40 74,44 77,40 74,36" fill="#7c4dff" />
          </svg>
        </div>
        <div className="hero-subtitle">Let's Turn It Into Reality.</div>
        <FloatingIconRow />
        <div className="hero-icons-row">
          <span className="hero-icon">🛠️</span>
          <span className="hero-icon">⚡</span>
          <span className="hero-icon">🌐</span>
          <span className="hero-icon">🔒</span>
          <span className="hero-icon">☁️</span>
        </div>
      </div>
      <div className="iot-network-card">
        <div className="iot-center-container">
          <div className="iot-title">Curious About IoT..?</div>
          <div className="iot-subtitle">Why Not Create It?</div>
          <button className="iot-pracpoint-btn">Pracpoint →</button>
          <div className="iot-network">
            <svg className="iot-lines" width="320" height="320">
              <circle cx="160" cy="160" r="110" fill="none" stroke="#44476a" strokeWidth="2" />
              {iotNodes.map((_, i) => {
                const angle = (i / iotNodes.length) * 2 * Math.PI;
                const x = 160 + 110 * Math.cos(angle);
                const y = 160 + 110 * Math.sin(angle);
                return (
                  <line
                    key={i}
                    x1="160" y1="160"
                    x2={x} y2={y}
                    stroke="#44476a" strokeWidth="2"
                  />
                );
              })}
            </svg>
            <div className="iot-node iot-node-center">🤖</div>
            {iotNodes.map((node, i) => {
              const angle = (i / iotNodes.length) * 2 * Math.PI;
              const x = 130 + 110 * Math.cos(angle);
              const y = 130 + 110 * Math.sin(angle);
              return (
                <div
                  key={i}
                  className="iot-node"
                  style={{ left: x, top: y }}
                  title={node.label}
                >
                  {node.icon}
                </div>
              );
            })}
            {userImgs.map((img, i) => {
              const angle = (i / userImgs.length) * 2 * Math.PI + Math.PI / 6;
              const x = 130 + 150 * Math.cos(angle);
              const y = 130 + 150 * Math.sin(angle);
              return (
                <img
                  key={i}
                  src={img}
                  alt="user"
                  className="iot-user-img"
                  style={{ left: x, top: y }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero; 