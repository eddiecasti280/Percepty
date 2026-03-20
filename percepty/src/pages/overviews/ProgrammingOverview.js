import React from 'react';
import { motion } from 'framer-motion';
import ModuleCard from '../../components/common/ModuleCard';
import { programmingModules } from '../../utils/moduleData';
import '../../styles/Overview.css';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const cardAnim = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function ProgrammingOverview() {
  return (
    <div className="overview-page">
      <div className="overview-banner">
        <div className="overview-banner-text">
          <h1>Programming</h1>
          <p>
            Hands-on guides from first installation to real programs — learn
            languages like Python with runnable code examples.
          </p>
        </div>
        <div className="overview-banner-img">
          <img
            src={process.env.PUBLIC_URL + '/classroom_img.svg'}
            alt="Classroom illustration"
          />
        </div>
      </div>

      <motion.div
        className="module-grid"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {programmingModules.map((m) => (
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

export default ProgrammingOverview;