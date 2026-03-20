import React from 'react';
import { Link } from 'react-router-dom';
import LatexPreview from '../content/LatexPreview';
import '../../styles/Overview.css';

function ModuleCard({ title, description, path, previewLatex }) {
  return (
    <div className="module-card">
      <div className="module-card-preview">
        <LatexPreview latex={previewLatex} />
      </div>
      <div className="module-card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={path} className="btn btn-primary btn-sm">
          Enter Module
        </Link>
      </div>
    </div>
  );
}

export default ModuleCard;