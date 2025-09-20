import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/ProblemsAndSolutions.css';

const ProblemsAndSolutions: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const problems = [
    {
      icon: '⏰',
      category: 'Beschikbaarheid',
      title: 'Beperkte bereikbaarheid',
      problem: 'Klanten bellen buiten kantooruren en krijgen voicemail. Leads lopen weg naar concurrenten.',
      solution: '24/7 AI-assistent die leads kwalificeert en afspraken plant',
      color: 'blue'
    },
    {
      icon: '💸',
      category: 'Kosten',
      title: 'Hoge personeelskosten',
      problem: 'Fulltime medewerker kost €40.000+ per jaar, plus ziekteverzuim en vakantiegeld.',
      solution: 'AI werkt 24/7 zonder salaris. ROI binnen 3 maanden',
      color: 'green'
    },
    {
      icon: '📉',
      category: 'Verkoop',
      title: 'Gemiste verkoopkansen',
      problem: '70% van de leads wordt nooit teruggebeld en gaat naar concurrenten.',
      solution: 'Elke call beantwoord, gekwalificeerd en doorverbonden',
      color: 'purple'
    },
    {
      icon: '🎯',
      category: 'Kwaliteit',
      title: 'Inconsistente service',
      problem: 'Medewerkers hebben slechte dagen en vergeten scripts.',
      solution: 'AI levert altijd consistente topkwaliteit service',
      color: 'orange'
    },
    {
      icon: '🔄',
      category: 'Follow-up',
      title: 'Vergeten follow-ups',
      problem: 'Follow-ups worden vergeten en deals vallen door de mazen.',
      solution: 'Automatische follow-ups op het perfecte moment',
      color: 'teal'
    },
    {
      icon: '📊',
      category: 'Inzicht',
      title: 'Geen gespreksdata',
      problem: 'Onduidelijk waarom deals mislukken en hoe team presteert.',
      solution: 'Real-time dashboards en actionable insights',
      color: 'red'
    }
  ];

  return (
    <section id="problems-solutions" className="problems-solutions" ref={ref}>
      <div className="problems-solutions-container">
        <motion.div
          className="section-header"
          variants={cardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <span className="section-badge">Problemen & Oplossingen</span>
          <h2 className="section-title">
            Van frustratie naar <span className="highlight">groei</span>
          </h2>
          <p className="section-subtitle">
            Herkenbare uitdagingen die elke ondernemer kent. Ontdek hoe AI deze definitief oplost.
          </p>
        </motion.div>

        <motion.div
          className="problems-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {problems.map((item, index) => (
            <motion.div
              key={index}
              className={`problem-card ${item.color}-card`}
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="card-header">
                <div className={`problem-icon ${item.color}-icon`}>
                  {item.icon}
                </div>
                <span className={`problem-category ${item.color}-category`}>
                  {item.category}
                </span>
              </div>

              <div className="card-body">
                <h3 className="problem-title">{item.title}</h3>

                <div className="problem-section">
                  <div className="problem-text">
                    <span className="section-label problem-label">Probleem</span>
                    <p>{item.problem}</p>
                  </div>
                </div>

                <div className="solution-section">
                  <div className="solution-text">
                    <span className="section-label solution-label">Oplossing</span>
                    <p>{item.solution}</p>
                  </div>
                </div>
              </div>

              <div className={`card-highlight ${item.color}-highlight`}></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="cta-section"
          variants={cardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.8 }}
        >
          <h3 className="cta-title">Klaar om deze problemen definitief op te lossen?</h3>
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.open('https://calendly.com/fyxedbv/30min', '_blank');
            }}
          >
            Plan uw gratis demo nu
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemsAndSolutions;