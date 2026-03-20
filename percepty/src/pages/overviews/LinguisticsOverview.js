import React from 'react';
import { motion } from 'framer-motion';
import ModuleCard from '../../components/common/ModuleCard';
import { linguisticsModuleGroups } from '../../utils/moduleData';
import '../../styles/Overview.css';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardAnim = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function LinguisticsOverview() {
  return (
    <div className="overview-page">
      <div className="overview-banner">
        <div className="overview-banner-text">
          <h1>Linguistics</h1>
          <p>
            Discover the structures behind human language — from writing systems
            and phonetics to morphology and syntax.
          </p>
        </div>
        <div className="overview-banner-img">
          <img
            src={process.env.PUBLIC_URL + '/school_lounging_img.svg'}
            alt="Lounging illustration"
          />
        </div>
      </div>

      {linguisticsModuleGroups.map((group) => (
        <div className="module-group" key={group.group}>
          <h2 className="module-group-heading">{group.group}</h2>

          <motion.div
            className="module-grid"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {group.modules.map((m) => (
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
      ))}
    </div>
  );
}

export default LinguisticsOverview;