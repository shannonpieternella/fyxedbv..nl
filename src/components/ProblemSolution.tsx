import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/ProblemSolution.css';

const ProblemSolution: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const titleVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.2
      }
    }
  };

  const slideInVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.3
      }
    }
  };

  const phoneVariants = {
    hidden: { opacity: 0, x: 50, rotateY: -30 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: -15,
      transition: {
        duration: 1.2,
        delay: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="problem-solution" className="problem-solution v2" ref={ref}>
      <div className="problem-solution-container">
        <div className="problem-content">
          <motion.h2
            className="problem-title"
            variants={titleVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            Uw klanten verdienen meer dan een voicemail.
          </motion.h2>

          <div className="problem-text">
            <motion.div
              className="problem-item"
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.1 }}
            >
              <div className="problem-icon email">📧</div>
              <div className="problem-text-content">
                E-mails verdwijnen in overvolle inboxen
              </div>
            </motion.div>

            <motion.div
              className="problem-item"
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
            >
              <div className="problem-icon sms">📱</div>
              <div className="problem-text-content">
                SMS'jes worden steeds vaker genegeerd
              </div>
            </motion.div>

            <motion.div
              className="problem-item"
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.3 }}
            >
              <div className="problem-icon phone">☎️</div>
              <div className="problem-text-content">
                Telefonische bereikbaarheid is beperkt tot kantooruren
              </div>
            </motion.div>

            <motion.div
              className="problem-item highlight"
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.4 }}
            >
              <div className="problem-icon highlight">🤝</div>
              <div className="problem-text-content">
                Maar persoonlijk contact maakt nog altijd het verschil
              </div>
            </motion.div>
          </div>

          {/* Solution card moved to the right column for a new layout */}
        </div>

        <motion.div
          className="solution-panel"
          variants={phoneVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="solution-cta">
            <h3 className="solution-title">Onze AI-oplossing</h3>
            <p className="solution-description">
              Continue, professionele communicatie met uw klanten - 24/7 beschikbaar, altijd vriendelijk en nooit een gemiste kans.
            </p>

            <div className="solution-badges">
              <span className="badge">Inbound support</span>
              <span className="badge">Outbound follow-ups</span>
              <span className="badge">Realtime kwalificatie</span>
              <span className="badge">Direct doorverbinden</span>
            </div>

            <div className="voice-visualizer" aria-hidden>
              {Array.from({ length: 24 }).map((_, i) => (
                <span className={`bar b-${i}`} key={i} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;
