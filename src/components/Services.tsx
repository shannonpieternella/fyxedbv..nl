import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const services = [
    {
      icon: 'lead-icon',
      title: 'Lead Kwalificatie',
      description: 'Intelligente AI die prospects screent, kwalificeert en doorverbindt naar uw verkoopteam.',
      roi: 'Hogere conversie',
      metric: '24/7 beschikbaar',
      link: '/ai-lead-reactivatie'
    },
    {
      icon: 'service-icon',
      title: 'Klantenbehoud',
      description: 'Proactieve communicatie met bestaande klanten. Follow-ups, tevredenheidsmetingen en retentie.',
      roi: 'Betere retentie',
      metric: 'Persoonlijke aanpak',
      link: '/ai-klantenservice'
    },
    {
      icon: 'sales-icon',
      title: 'Afspraakplanning',
      description: 'Automatische agenda-integratie. Slimme planning die rekening houdt met voorkeuren en beschikbaarheid.',
      roi: 'Tijd besparen',
      metric: 'Geen no-shows',
      link: '/ai-sales-agents'
    }
  ];

  return (
    <section id="services" className="services" ref={ref}>
      <div className="services-container">
        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <Link to={service.link} key={index} className="service-card-link">
              <motion.div
                className="service-card"
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
              <div className={`service-icon ${service.icon}`}>
                {service.icon === 'lead-icon' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" />
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 12C21 12 20 13 18 13C16 13 15 12 15 12C15 12 16 11 18 11C20 11 21 12 21 12Z"
                      animate={{ pathLength: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </svg>
                )}

                {service.icon === 'service-icon' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" />
                    <motion.circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      fill="none"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </svg>
                )}

                {service.icon === 'sales-icon' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19C9 20.1046 9.89543 21 11 21H13C14.1046 21 15 20.1046 15 19V18C15 16.8954 14.1046 16 13 16H11C9.89543 16 9 16.8954 9 18V19Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 16V12" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12V8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8V12Z" />
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 10V12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12V10"
                      animate={{ pathLength: [0, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    />
                  </svg>
                )}
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <div className="service-metrics">
                <div className="metric-badge roi-badge">
                  <span className="metric-label">ROI</span>
                  <span className="metric-value">{service.roi}</span>
                </div>
                <div className="metric-badge performance-badge">
                  <span className="metric-label">Performance</span>
                  <span className="metric-value">{service.metric}</span>
                </div>
              </div>
            </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
