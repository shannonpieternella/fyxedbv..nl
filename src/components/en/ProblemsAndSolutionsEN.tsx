import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../../styles/ProblemsAndSolutions.css';

const ProblemsAndSolutionsEN: React.FC = () => {
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
      category: 'Availability',
      title: 'Limited accessibility',
      problem: 'Customers call outside office hours and get voicemail. Leads go to competitors.',
      solution: '24/7 AI assistant that qualifies leads and schedules appointments',
      color: 'blue'
    },
    {
      icon: '💸',
      category: 'Costs',
      title: 'High staff costs',
      problem: 'Full-time employee costs €40,000+ per year, plus sick leave and vacation pay.',
      solution: 'AI works 24/7 without salary. ROI within 3 months',
      color: 'green'
    },
    {
      icon: '📉',
      category: 'Sales',
      title: 'Missed sales opportunities',
      problem: '70% of leads are never called back and go to competitors.',
      solution: 'Every call answered, qualified and transferred',
      color: 'purple'
    },
    {
      icon: '🎯',
      category: 'Quality',
      title: 'Inconsistent service',
      problem: 'Employees have bad days and forget scripts.',
      solution: 'AI always delivers consistent top-quality service',
      color: 'orange'
    },
    {
      icon: '🔄',
      category: 'Follow-up',
      title: 'Forgotten follow-ups',
      problem: 'Follow-ups are forgotten and deals fall through the cracks.',
      solution: 'Automatic follow-ups at the perfect moment',
      color: 'teal'
    },
    {
      icon: '📊',
      category: 'Insights',
      title: 'No conversation data',
      problem: 'Unclear why deals fail and how team performs.',
      solution: 'Real-time dashboards and actionable insights',
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
          <span className="section-badge">Problems & Solutions</span>
          <h2 className="section-title">
            From frustration to <span className="highlight">growth</span>
          </h2>
          <p className="section-subtitle">
            Recognizable challenges every entrepreneur knows. Discover how AI solves these definitively.
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
                    <span className="section-label problem-label">Problem</span>
                    <p>{item.problem}</p>
                  </div>
                </div>

                <div className="solution-section">
                  <div className="solution-text">
                    <span className="section-label solution-label">Solution</span>
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
          <h3 className="cta-title">Ready to solve these problems definitively?</h3>
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.open('https://calendly.com/fyxedbv/30min', '_blank');
            }}
          >
            Schedule your free demo now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemsAndSolutionsEN;