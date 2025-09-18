import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../../styles/CaseStudy.css';

const CaseStudyEN: React.FC = () => {
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
            Entrepreneurs across various industries are already working with Fyxed BV.
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
              <span className="stat-label">reactivation of old customers</span>
            </motion.div>

            <motion.div
              className="stat"
              variants={fadeInVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.4 }}
            >
              <span className="stat-number">24/7</span>
              <span className="stat-label">available without breaks</span>
            </motion.div>

            <motion.div
              className="stat"
              variants={fadeInVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.6 }}
            >
              <span className="stat-number">95%</span>
              <span className="stat-label">customer satisfaction</span>
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
                "Our AI assistant from Fyxed BV has transformed our customer service.
                We can now be available 24/7 without hiring additional staff."
              </blockquote>
              <cite>
                <span className="testimonial-name">Marco van der Berg</span>
                <span className="testimonial-company">CEO, TechCorp</span>
              </cite>
            </div>

            <div className="testimonial">
              <blockquote>
                "Since we've been using Fyxed, we don't miss a single lead anymore.
                The AI calls at exactly the right moment and automatically schedules appointments."
              </blockquote>
              <cite>
                <span className="testimonial-name">Linda Janssen</span>
                <span className="testimonial-company">Sales Director, InnovateNL</span>
              </cite>
            </div>

            <div className="testimonial">
              <blockquote>
                "Our customers appreciate the personal approach of the AI assistant.
                It feels natural and significantly improves our customer satisfaction."
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

export default CaseStudyEN;