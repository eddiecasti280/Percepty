import React from 'react';
import { motion } from 'framer-motion';
import ModuleCard from '../../components/common/ModuleCard';
import { mathModuleGroups, getMergedGroups } from '../../utils/moduleData';
import '../../styles/Overview.css';

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardAnim = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

function MathematicsOverview() {
  const groups = getMergedGroups(mathModuleGroups, 'math');
  return (
    <div className="overview-page">
      <div className="overview-banner">
        <div className="overview-banner-text">
          <h1>Mathematics</h1>
          <p>Build a solid quantitative foundation — start from basic arithmetic and progress through calculus and linear algebra.</p>
        </div>
        <div className="overview-banner-img">
          <img src={process.env.PUBLIC_URL + '/study_struggle_img.svg'} alt="Studying illustration" />
        </div>
      </div>
      {groups.map((group) => (
        <div className="module-group" key={group.group}>
          <h2 className="module-group-heading">{group.group}</h2>
          <motion.div className="module-grid" variants={stagger} initial="hidden" animate="visible">
            {group.modules.map((m) => (
              <motion.div key={m.id} variants={cardAnim}>
                <ModuleCard title={m.title} description={m.description} path={m.path} previewLatex={m.previewLatex} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default MathematicsOverview;