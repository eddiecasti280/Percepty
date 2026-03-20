import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import '../styles/Splash.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' },
  }),
};

function Splash() {
  return (
    <>
      <Navigation />

      {/* ===== Hero ===== */}
      <section className="splash-hero">
        <div className="splash-hero-inner">
          <motion.div
            className="splash-hero-text"
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={fadeUp} custom={0}>Percepty</motion.h1>
            <motion.p variants={fadeUp} custom={1}>
              A progression-based interactive notes platform for computational
              topics — mathematics, programming, and linguistics.
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <Link to="/math" className="splash-cta">Get Started</Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="splash-hero-img"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <img
              src={process.env.PUBLIC_URL + '/graduation_img.svg'}
              alt="Graduation illustration"
            />
          </motion.div>
        </div>
      </section>

      {/* ===== Features ===== */}
      <section className="splash-features">
        <div className="splash-features-inner">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Percepty?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Every concept builds on the last — learn at your own pace with
            beautifully structured modules.
          </motion.p>

          <div className="features-grid">
            {[
              {
                icon: '📐',
                title: 'Interactive Equations',
                desc: 'LaTeX-rendered formulas appear inline so you can read mathematics as effortlessly as prose.',
              },
              {
                icon: '🎬',
                title: 'Visual Animations',
                desc: 'Manim-powered videos bring abstract ideas to life right inside each lesson.',
              },
              {
                icon: '🧩',
                title: 'Progressive Curriculum',
                desc: 'Modules are ordered by difficulty — complete one to unlock insight for the next.',
              },
            ].map((f, i) => (
              <motion.div
                className="feature-card"
                key={f.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Subjects ===== */}
      <section className="splash-subjects">
        <img
          className="splash-subjects-bg"
          src={process.env.PUBLIC_URL + '/classroom_img.svg'}
          alt=""
          aria-hidden="true"
        />
        <div className="splash-subjects-inner">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Explore Subjects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Choose a discipline and start learning right away.
          </motion.p>

          <div className="subjects-grid">
            {[
              {
                icon: '∑',
                title: 'Mathematics',
                desc: 'From basic arithmetic to vector calculus — build a solid quantitative foundation.',
                to: '/math',
              },
              {
                icon: '💻',
                title: 'Programming',
                desc: 'Hands-on guides to Python, JavaScript, and beyond with runnable code snippets.',
                to: '/programming',
              },
              {
                icon: '🗣️',
                title: 'Linguistics',
                desc: 'Explore writing systems, phonetics, and the structures behind human language.',
                to: '/linguistics',
              },
            ].map((s, i) => (
              <motion.div
                className="subject-card"
                key={s.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <div className="subject-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link to={s.to}>Browse modules →</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Bottom CTA ===== */}
      <section className="splash-bottom-cta">
        <div className="splash-bottom-cta-img">
          <img
            src={process.env.PUBLIC_URL + '/school_lounging_img.svg'}
            alt="Relaxed studying illustration"
          />
        </div>
        <div className="splash-bottom-cta-text">
          <h2>Learn at your own pace</h2>
          <p>
            Whether you're just getting started or brushing up on advanced
            topics, Percepty's step-by-step modules make it easy to pick up
            where you left off.
          </p>
          <Link to="/math" className="btn-green">Start Learning</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Splash;