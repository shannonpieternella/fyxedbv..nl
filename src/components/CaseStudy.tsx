import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/CaseStudy.css';

const CaseStudy: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: custom * 0.1
      }
    })
  };

  // Mock company logos - in a real project these would be actual client logos
  const companies = [
    { name: 'TechCorp', logo: 'TC' },
    { name: 'InnovateNL', logo: 'IN' },
    { name: 'Dutch Solutions', logo: 'DS' },
    { name: 'BusinessPro', logo: 'BP' },
    { name: 'SmartGrow', logo: 'SG' },
    { name: 'NextLevel', logo: 'NL' }
  ];

  return (
    <section id="cases" className="case-study" ref={ref}>
      <div className="case-study-container">
        <motion.div
          className="case-study-content"
          variants={fadeInVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h2 className="case-study-title">
            Ondernemers in verschillende branches werken al met Fyxed BV.
          </h2>

          <div className="case-study-stats">
            <motion.div
              className="stat"
              variants={fadeInVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
            >
              <span className="stat-number">+35%</span>
              <span className="stat-label">heractivatie van oude klanten</span>
            </motion.div>

            <motion.div
              className="stat"
              variants={fadeInVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.4 }}
            >
              <span className="stat-number">24/7</span>
              <span className="stat-label">beschikbaar zonder pauzes</span>
            </motion.div>

            <motion.div
              className="stat"
              variants={fadeInVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.6 }}
            >
              <span className="stat-number">95%</span>
              <span className="stat-label">klanttevredenheid</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Companies carousel removed as requested */}

        <motion.div
          className="testimonials-carousel"
          variants={fadeInVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 1.2 }}
        >
          <div className="testimonials-container">
            <div className="testimonial">
              <blockquote>
                "Onze AI-assistent van Fyxed BV heeft onze klantenservice getransformeerd.
                We kunnen nu 24/7 bereikbaar zijn zonder extra personeel aan te nemen."
              </blockquote>
              <cite>
                <span className="testimonial-name">Marco van der Berg</span>
                <span className="testimonial-company">CEO, TechCorp</span>
              </cite>
            </div>

            <div className="testimonial">
              <blockquote>
                "Sinds we Fyxed gebruiken, missen we geen enkele lead meer.
                De AI belt precies op het juiste moment en plant automatisch afspraken in."
              </blockquote>
              <cite>
                <span className="testimonial-name">Linda Janssen</span>
                <span className="testimonial-company">Sales Director, InnovateNL</span>
              </cite>
            </div>

            <div className="testimonial">
              <blockquote>
                "Onze klanten waarderen de persoonlijke benadering van de AI-assistent.
                Het voelt natuurlijk aan en verbetert onze klanttevredenheid aanzienlijk."
              </blockquote>
              <cite>
                <span className="testimonial-name">Robert de Vries</span>
                <span className="testimonial-company">COO, Dutch Solutions</span>
              </cite>
            </div>
          </div>

          <div className="carousel-dots">
            <div className="dot active"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudy;
