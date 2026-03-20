import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { getCustomModules, deleteCustomModule, saveCustomModule } from '../../utils/moduleData';
import '../../styles/Admin.css';

function AdminDashboard() {
  const { isAdmin } = useAuth();
  const navigate = useNavigate();
  const [modules, setModules] = React.useState(getCustomModules);

  if (!isAdmin) return <Navigate to="/" replace />;

  const refresh = () => setModules(getCustomModules());

  const handleDelete = (id) => {
    if (!window.confirm('Delete this module permanently?')) return;
    deleteCustomModule(id);
    refresh();
  };

  const togglePublish = (mod) => {
    saveCustomModule({ ...mod, published: !mod.published });
    refresh();
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <p>Create, edit, and publish learning modules.</p>

      <div className="admin-actions">
        <button className="admin-create-btn" onClick={() => navigate('/admin/editor')}>
          + Create New Module
        </button>
      </div>

      {modules.length === 0 ? (
        <div className="admin-empty">
          <p>No modules yet. Create your first one!</p>
        </div>
      ) : (
        <div className="admin-module-list">
          {modules.map((mod) => (
            <div className="admin-module-item" key={mod.id}>
              <div className="admin-module-info">
                <h3>{mod.title || 'Untitled Module'}</h3>
                <div className="admin-module-meta">
                  {mod.subject} › {mod.group || 'Ungrouped'}
                  <span className={`badge ${mod.published ? 'published' : 'draft'}`}>
                    {mod.published ? 'Published' : 'Draft'}
                  </span>
                </div>
              </div>
              <div className="admin-module-actions">
                <button onClick={() => navigate(`/admin/editor/${mod.id}`)}>Edit</button>
                <button className={mod.published ? '' : 'publish-btn'}
                  onClick={() => togglePublish(mod)}>
                  {mod.published ? 'Unpublish' : 'Publish'}
                </button>
                <button className="danger" onClick={() => handleDelete(mod.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;