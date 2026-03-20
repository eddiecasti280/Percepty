import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { getCustomModules, saveCustomModule } from '../../utils/moduleData';
import QuizEditor from '../../components/admin/QuizEditor';
import ModuleRenderer from '../../components/content/ModuleRenderer';
import '../../styles/Admin.css';

function genId() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}

const SUBJECTS = [
  { value: 'math', label: 'Mathematics' },
  { value: 'programming', label: 'Programming' },
  { value: 'linguistics', label: 'Linguistics' },
];

const LANGUAGES = ['python', 'javascript', 'bash', 'java', 'c', 'cpp', 'html', 'css'];

function ModuleEditor() {
  const { id } = useParams();
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [preview, setPreview] = useState(false);

  const [mod, setMod] = useState({
    id: id || genId(),
    title: '',
    description: '',
    subject: 'math',
    group: '',
    previewLatex: '',
    sections: [],
    author: { name: '', description: '', date: new Date().toISOString().split('T')[0] },
    quiz: { title: '', questions: [] },
    published: false,
    createdBy: user?.email || '',
    createdAt: new Date().toISOString(),
  });

  useEffect(() => {
    if (id) {
      const found = getCustomModules().find((m) => m.id === id);
      if (found) setMod(found);
    }
  }, [id]);

  if (!isAdmin) return <Navigate to="/" replace />;

  /* ---- helpers ---- */
  const set = (field, val) => setMod((p) => ({ ...p, [field]: val }));

  const setAuthor = (field, val) =>
    setMod((p) => ({ ...p, author: { ...p.author, [field]: val } }));

  /* sections */
  const addSection = () =>
    setMod((p) => ({ ...p, sections: [...p.sections, { subsectionHeading: '', blocks: [] }] }));

  const removeSection = (i) =>
    setMod((p) => ({ ...p, sections: p.sections.filter((_, idx) => idx !== i) }));

  const moveSection = (i, dir) => {
    setMod((p) => {
      const s = [...p.sections];
      const j = i + dir;
      if (j < 0 || j >= s.length) return p;
      [s[i], s[j]] = [s[j], s[i]];
      return { ...p, sections: s };
    });
  };

  const setSectionHeading = (i, val) => {
    setMod((p) => {
      const s = [...p.sections];
      s[i] = { ...s[i], subsectionHeading: val };
      return { ...p, sections: s };
    });
  };

  /* blocks */
  const addBlock = (si, type) => {
    const blank =
      type === 'text' ? { type: 'text', content: '' }
      : type === 'latex' ? { type: 'latex', latex: '', displayMode: true }
      : { type: 'code', code: '', language: 'python' };
    setMod((p) => {
      const s = [...p.sections];
      s[si] = { ...s[si], blocks: [...s[si].blocks, blank] };
      return { ...p, sections: s };
    });
  };

  const removeBlock = (si, bi) => {
    setMod((p) => {
      const s = [...p.sections];
      s[si] = { ...s[si], blocks: s[si].blocks.filter((_, idx) => idx !== bi) };
      return { ...p, sections: s };
    });
  };

  const updateBlock = (si, bi, field, val) => {
    setMod((p) => {
      const s = [...p.sections];
      const blocks = [...s[si].blocks];
      blocks[bi] = { ...blocks[bi], [field]: val };
      s[si] = { ...s[si], blocks };
      return { ...p, sections: s };
    });
  };

  /* save / publish */
  const handleSave = (publish) => {
    saveCustomModule({ ...mod, published: publish });
    navigate('/admin');
  };

  /* ---- render ---- */
  if (preview) {
    return (
      <div className="module-editor">
        <button className="editor-back" onClick={() => setPreview(false)}>← Back to Editor</button>
        <ModuleRenderer data={mod} />
      </div>
    );
  }

  return (
    <div className="module-editor">
      <button className="editor-back" onClick={() => navigate('/admin')}>← Dashboard</button>
      <h1>{id ? 'Edit Module' : 'New Module'}</h1>

      {/* Metadata */}
      <div className="editor-section">
        <h2>Module Settings</h2>
        <div className="editor-row">
          <div className="editor-field">
            <label>Title</label>
            <input value={mod.title} onChange={(e) => set('title', e.target.value)} placeholder="Module title" />
          </div>
          <div className="editor-field">
            <label>Subject</label>
            <select value={mod.subject} onChange={(e) => set('subject', e.target.value)}>
              {SUBJECTS.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
            </select>
          </div>
        </div>
        <div className="editor-row">
          <div className="editor-field">
            <label>Group</label>
            <input value={mod.group} onChange={(e) => set('group', e.target.value)} placeholder="e.g. Calculus, Python" />
          </div>
          <div className="editor-field">
            <label>Preview LaTeX</label>
            <input value={mod.previewLatex} onChange={(e) => set('previewLatex', e.target.value)} placeholder="E = mc^2" />
          </div>
        </div>
        <div className="editor-field full">
          <label>Description</label>
          <textarea value={mod.description} onChange={(e) => set('description', e.target.value)}
            placeholder="A short description shown on the overview card" rows={2} />
        </div>
      </div>

      {/* Sections */}
      <div className="editor-section">
        <h2>Content Sections</h2>

        {mod.sections.map((section, si) => (
          <div className="editor-partition" key={si}>
            <div className="editor-partition-header">
              <h3>Section {si + 1}</h3>
              <div className="editor-partition-controls">
                <button onClick={() => moveSection(si, -1)} title="Move up">↑</button>
                <button onClick={() => moveSection(si, 1)} title="Move down">↓</button>
                <button className="danger" onClick={() => removeSection(si)} title="Remove">✕</button>
              </div>
            </div>

            <div className="editor-field">
              <label>Subsection Heading (optional)</label>
              <input value={section.subsectionHeading}
                onChange={(e) => setSectionHeading(si, e.target.value)}
                placeholder="e.g. Power Rule" />
            </div>

            {section.blocks.map((block, bi) => (
              <div className="editor-block" key={bi}>
                <div className="editor-block-header">
                  <span className="editor-block-type">{block.type}</span>
                  <button className="editor-block-remove" onClick={() => removeBlock(si, bi)}>✕</button>
                </div>

                {block.type === 'text' && (
                  <textarea value={block.content} rows={3}
                    onChange={(e) => updateBlock(si, bi, 'content', e.target.value)}
                    placeholder="Paragraph text…"
                    style={{ width: '100%', padding: '8px 10px', borderRadius: 6, border: '1px solid var(--border-color)', background: 'var(--bg-input)', color: 'var(--text-primary)', fontFamily: 'inherit', fontSize: '0.93rem', resize: 'vertical' }} />
                )}

                {block.type === 'latex' && (
                  <>
                    <input value={block.latex}
                      onChange={(e) => updateBlock(si, bi, 'latex', e.target.value)}
                      placeholder="x^2 + y^2 = r^2"
                      style={{ width: '100%', padding: '8px 10px', borderRadius: 6, border: '1px solid var(--border-color)', background: 'var(--bg-input)', color: 'var(--text-primary)', fontFamily: 'monospace', fontSize: '0.93rem', marginBottom: 6 }} />
                    <label style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                      <input type="checkbox" checked={block.displayMode}
                        onChange={(e) => updateBlock(si, bi, 'displayMode', e.target.checked)}
                        style={{ marginRight: 6 }} />
                      Display mode (centred block)
                    </label>
                  </>
                )}

                {block.type === 'code' && (
                  <>
                    <select value={block.language}
                      onChange={(e) => updateBlock(si, bi, 'language', e.target.value)}
                      style={{ padding: '6px 10px', borderRadius: 6, border: '1px solid var(--border-color)', background: 'var(--bg-input)', color: 'var(--text-primary)', fontSize: '0.88rem', marginBottom: 6 }}>
                      {LANGUAGES.map((l) => <option key={l} value={l}>{l}</option>)}
                    </select>
                    <textarea value={block.code} rows={4}
                      onChange={(e) => updateBlock(si, bi, 'code', e.target.value)}
                      placeholder="Your code here…"
                      style={{ width: '100%', padding: '8px 10px', borderRadius: 6, border: '1px solid var(--border-color)', background: 'var(--bg-input)', color: 'var(--text-primary)', fontFamily: 'monospace', fontSize: '0.9rem', resize: 'vertical' }} />
                  </>
                )}
              </div>
            ))}

            <div className="editor-add-block">
              <button onClick={() => addBlock(si, 'text')}>+ Text</button>
              <button onClick={() => addBlock(si, 'latex')}>+ LaTeX</button>
              <button onClick={() => addBlock(si, 'code')}>+ Code</button>
            </div>
          </div>
        ))}

        <button className="editor-add-section" onClick={addSection}>+ Add Section</button>
      </div>

      {/* Author */}
      <div className="editor-section">
        <h2>Author Information</h2>
        <div className="editor-row">
          <div className="editor-field">
            <label>Name</label>
            <input value={mod.author.name} onChange={(e) => setAuthor('name', e.target.value)} />
          </div>
          <div className="editor-field">
            <label>Date</label>
            <input type="date" value={mod.author.date} onChange={(e) => setAuthor('date', e.target.value)} />
          </div>
        </div>
        <div className="editor-field full">
          <label>Description / URL</label>
          <input value={mod.author.description} onChange={(e) => setAuthor('description', e.target.value)} />
        </div>
      </div>

      {/* Quiz */}
      <div className="editor-section">
        <h2>Quiz</h2>
        <QuizEditor quiz={mod.quiz} onChange={(q) => set('quiz', q)} />
      </div>

      {/* Actions */}
      <div className="editor-section">
        <div className="editor-action-bar">
          <button className="editor-btn-draft" onClick={() => handleSave(false)}>Save Draft</button>
          <button className="editor-btn-preview" onClick={() => setPreview(true)}>Preview</button>
          <button className="editor-btn-publish" onClick={() => handleSave(true)}>Publish</button>
        </div>
      </div>
    </div>
  );
}

export default ModuleEditor;