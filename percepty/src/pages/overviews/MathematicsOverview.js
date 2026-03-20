import React from 'react';
import { motion } from 'framer-motion';
import ModuleCard from '../../components/common/ModuleCard';
import { mathModules } from '../../utils/moduleData';
import '../../styles/Overview.css';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const cardAnim = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function MathematicsOverview() {
  return (
    <div className="overview-page">
      <div className="overview-banner">
        <div className="overview-banner-text">
          <h1>Mathematics</h1>
          <p>
            Build a solid quantitative foundation — start from basic arithmetic
            and progress through calculus and linear algebra.
          </p>
        </div>
        <div className="overview-banner-img">
          <img
            src={process.env.PUBLIC_URL + '/study_struggle_img.svg'}
            alt="Studying illustration"
          />
        </div>
      </div>

      <motion.div
        className="module-grid"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {mathModules.map((m) => (
          <motion.div key={m.id} variants={cardAnim}>
            <ModuleCard
              title={m.title}
              description={m.description}
              path={m.path}
              previewLatex={m.previewLatex}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default MathematicsOverview;