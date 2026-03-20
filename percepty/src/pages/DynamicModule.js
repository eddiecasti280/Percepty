import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCustomModules } from '../utils/moduleData';
import ModuleRenderer from '../components/content/ModuleRenderer';

function DynamicModule() {
  const { id } = useParams();
  const mod = getCustomModules().find((m) => m.id === id && m.published);

  if (!mod) {
    return (
      <div style={{ textAlign: 'center', padding: '80px 24px' }}>
        <h2>Module not found</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          This module may have been unpublished or does not exist.
        </p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    );
  }

  return <ModuleRenderer data={mod} />;
}

export default DynamicModule;