import React, { useState } from 'react';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import '../../styles/Quiz.css';

function Quiz({ questions, title = 'Practice Questions' }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [revealed, setRevealed] = useState({});

  const current = questions[currentQuestion];
  const totalQuestions = questions.length;

  const handleSelect = (optionIndex) => {
    if (revealed[currentQuestion]) return;
    setSelectedAnswers((prev) => ({ ...prev, [currentQuestion]: optionIndex }));
  };

  const handleReveal = () => {
    setRevealed((prev) => ({ ...prev, [currentQuestion]: true }));
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) setCurrentQuestion((p) => p + 1);
  };
  const handlePrev = () => {
    if (currentQuestion > 0) setCurrentQuestion((p) => p - 1);
  };
  const handleSubmit = () => setShowResults(true);
  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setRevealed({});
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) correct++;
    });
    return correct;
  };

  const allAnswered = Object.keys(selectedAnswers).length === totalQuestions;
  const score = calculateScore();
  const percentage = Math.round((score / totalQuestions) * 100);

  /* ========== Results screen ========== */
  if (showResults) {
    return (
      <div className="quiz-container">
        <div className="quiz-header"><h3>{title}</h3></div>
        <div className="quiz-results">
          <div className="quiz-score-circle">
            <span className="quiz-score-number">{score}</span>
            <span className="quiz-score-total">/ {totalQuestions}</span>
          </div>
          <p className="quiz-score-percentage">{percentage}% Correct</p>
          <p className="quiz-score-message">
            {percentage === 100 ? '🎉 Perfect score! Excellent work!'
              : percentage >= 70 ? '👍 Good job! Review any mistakes and try again.'
              : '📚 Keep studying! Review the material and try again.'}
          </p>

          <div className="quiz-results-breakdown">
            <h4>Review</h4>
            {questions.map((q, idx) => {
              const isCorrect = selectedAnswers[idx] === q.correctIndex;
              return (
                <div key={idx} className={`quiz-result-item ${isCorrect ? 'correct' : 'incorrect'}`}>
                  <div className="quiz-result-indicator">{isCorrect ? '✓' : '✗'}</div>
                  <div className="quiz-result-content">
                    <p className="quiz-result-question"><strong>Q{idx + 1}:</strong> {q.question}</p>
                    <p className="quiz-result-answer">
                      Your answer:{' '}
                      {q.optionsLatex ? (
                        <span className="inline-latex"><BlockMath math={q.optionsLatex[selectedAnswers[idx]] || '—'} /></span>
                      ) : (q.options[selectedAnswers[idx]] || '—')}
                    </p>
                    {!isCorrect && (
                      <p className="quiz-result-correct">
                        Correct answer:{' '}
                        {q.optionsLatex ? (
                          <span className="inline-latex"><BlockMath math={q.optionsLatex[q.correctIndex]} /></span>
                        ) : (q.options[q.correctIndex])}
                      </p>
                    )}
                    {q.explanation && (
                      <div className="quiz-result-explanation">
                        <BlockMath math={q.explanation} />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <button className="quiz-btn quiz-btn-reset" onClick={handleReset}>Try Again</button>
        </div>
      </div>
    );
  }

  /* ========== Question screen ========== */
  const selectedOption = selectedAnswers[currentQuestion];
  const isRevealed = revealed[currentQuestion];
  const isCorrect = selectedOption === current.correctIndex;

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h3>{title}</h3>
        <span className="quiz-progress">Question {currentQuestion + 1} of {totalQuestions}</span>
      </div>

      <div className="quiz-progress-bar">
        <div className="quiz-progress-fill"
          style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }} />
      </div>

      <div className="quiz-question">
        <p>{current.question}</p>
        {current.latex && (
          <div className="quiz-question-latex"><BlockMath math={current.latex} /></div>
        )}
      </div>

      <div className="quiz-options">
        {current.options.map((option, idx) => {
          let cls = 'quiz-option';
          if (selectedOption === idx) cls += ' selected';
          if (isRevealed) {
            if (idx === current.correctIndex) cls += ' correct';
            else if (selectedOption === idx) cls += ' incorrect';
          }
          return (
            <button key={idx} className={cls} onClick={() => handleSelect(idx)} disabled={isRevealed}>
              <span className="quiz-option-letter">{String.fromCharCode(65 + idx)}</span>
              {current.optionsLatex ? (
                <span className="quiz-option-latex"><BlockMath math={current.optionsLatex[idx]} /></span>
              ) : (
                <span className="quiz-option-text">{option}</span>
              )}
            </button>
          );
        })}
      </div>

      {isRevealed && current.explanation && (
        <div className="quiz-explanation">
          <span className="quiz-explanation-label">Explanation</span>
          <div className="quiz-explanation-latex">
            <BlockMath math={current.explanation} />
          </div>
        </div>
      )}

      {isRevealed && (
        <div className={`quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
          {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
        </div>
      )}

      <div className="quiz-actions">
        <button className="quiz-btn quiz-btn-secondary" onClick={handlePrev}
          disabled={currentQuestion === 0}>← Previous</button>
        {!isRevealed && selectedOption !== undefined && (
          <button className="quiz-btn quiz-btn-check" onClick={handleReveal}>Check Answer</button>
        )}
        {isRevealed && currentQuestion < totalQuestions - 1 && (
          <button className="quiz-btn quiz-btn-primary" onClick={handleNext}>Next →</button>
        )}
        {isRevealed && currentQuestion === totalQuestions - 1 && (
          <button className="quiz-btn quiz-btn-submit" onClick={handleSubmit}
            disabled={!allAnswered}>See Results</button>
        )}
      </div>

      <div className="quiz-footer">
        <button className="quiz-reset-link" onClick={handleReset}>Reset Quiz</button>
      </div>
    </div>
  );
}

export default Quiz;