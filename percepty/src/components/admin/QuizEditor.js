import React from 'react';
import '../../styles/Admin.css';

function emptyQuestion() {
  return { question: '', latex: '', options: ['', '', '', ''], correctIndex: 0, explanation: '' };
}

function QuizEditor({ quiz, onChange }) {
  const update = (field, value) => onChange({ ...quiz, [field]: value });

  const updateQuestion = (idx, field, value) => {
    const qs = [...quiz.questions];
    qs[idx] = { ...qs[idx], [field]: value };
    onChange({ ...quiz, questions: qs });
  };

  const updateOption = (qIdx, oIdx, value) => {
    const qs = [...quiz.questions];
    const opts = [...qs[qIdx].options];
    opts[oIdx] = value;
    qs[qIdx] = { ...qs[qIdx], options: opts };
    onChange({ ...quiz, questions: qs });
  };

  const addQuestion = () => onChange({ ...quiz, questions: [...quiz.questions, emptyQuestion()] });
  const removeQuestion = (idx) =>
    onChange({ ...quiz, questions: quiz.questions.filter((_, i) => i !== idx) });

  return (
    <div>
      <div className="editor-field" style={{ marginBottom: 16 }}>
        <label>Quiz Title</label>
        <input value={quiz.title} onChange={(e) => update('title', e.target.value)} placeholder="Practice Questions" />
      </div>

      {quiz.questions.map((q, qIdx) => (
        <div key={qIdx} className="quiz-question-editor">
          <div className="quiz-question-editor-header">
            <strong>Question {qIdx + 1}</strong>
            <button className="editor-block-remove" onClick={() => removeQuestion(qIdx)}>✕ Remove</button>
          </div>

          <div className="editor-field">
            <label>Question text</label>
            <input value={q.question} onChange={(e) => updateQuestion(qIdx, 'question', e.target.value)} />
          </div>
          <div className="editor-field">
            <label>LaTeX (optional, shown with question)</label>
            <input value={q.latex || ''} onChange={(e) => updateQuestion(qIdx, 'latex', e.target.value)} placeholder="x^2 + 1 = 0" />
          </div>

          <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
            Options (select the correct answer)
          </label>
          <div className="quiz-options-grid">
            {q.options.map((opt, oIdx) => (
              <div className="quiz-option-editor" key={oIdx}>
                <input type="radio" name={`correct-${qIdx}`} checked={q.correctIndex === oIdx}
                  onChange={() => updateQuestion(qIdx, 'correctIndex', oIdx)} />
                <input value={opt} onChange={(e) => updateOption(qIdx, oIdx, e.target.value)}
                  placeholder={`Option ${String.fromCharCode(65 + oIdx)}`}
                  style={{ flex: 1, padding: '6px 10px', borderRadius: 6, border: '1px solid var(--border-color)', background: 'var(--bg-input)', color: 'var(--text-primary)', fontSize: '0.9rem' }} />
              </div>
            ))}
          </div>

          <div className="editor-field" style={{ marginTop: 8 }}>
            <label>Explanation (LaTeX — use <code>\text&#123;&#125;</code> for prose, raw symbols for math)</label>
            <input value={q.explanation || ''} onChange={(e) => updateQuestion(qIdx, 'explanation', e.target.value)}
              placeholder="\\text{By the power rule: } \\frac{d}{dx}x^3 = 3x^2."
              style={{ fontFamily: 'monospace' }} />
          </div>
        </div>
      ))}

      <button onClick={addQuestion} className="editor-add-section" style={{ marginTop: 8 }}>
        + Add Question
      </button>
    </div>
  );
}

export default QuizEditor;