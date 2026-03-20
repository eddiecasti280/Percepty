import React from 'react';
import '../../styles/Module.css';
import KnowledgePartition from '../../components/content/KnowledgePartition';
import SectionHeading from '../../components/common/SectionHeading';
import SubsectionHeading from '../../components/common/SubsectionHeading';
import LatexSnippet from '../../components/content/LatexSnippet';
import AuthorPartition from '../../components/content/AuthorPartition';
import Quiz from '../../components/content/Quiz';
import 'katex/dist/katex.min.css';

const quizQuestions = [
  {
    question: 'What type of writing system is the Latin alphabet?',
    options: ['Syllabary', 'Logography', 'Alphabet', 'Abjad'],
    correctIndex: 2,
    explanation:
      'The Latin alphabet is an alphabet — each letter represents a consonant or vowel phoneme.',
  },
  {
    question: 'In a syllabary, each symbol represents:',
    options: ['A single consonant', 'A single vowel', 'A syllable', 'A word'],
    correctIndex: 2,
    explanation:
      'In a syllabary like Japanese Hiragana, each character represents a whole syllable.',
  },
  {
    question: 'What is an abjad?',
    options: [
      'A writing system with no vowels',
      'A writing system that writes only consonants (vowels optional)',
      'A writing system where each symbol is a word',
      'A pictographic writing system',
    ],
    correctIndex: 1,
    explanation:
      'An abjad (like Arabic or Hebrew) primarily writes consonants; vowels are often omitted or marked with diacritics.',
  },
  {
    question: 'Which of these is an example of an abugida?',
    options: ['Latin', 'Arabic', 'Devanagari', 'Chinese'],
    correctIndex: 2,
    explanation:
      'Devanagari (used for Hindi, Sanskrit, etc.) is an abugida where consonants carry an inherent vowel modified by diacritics.',
  },
  {
    question: 'How many basic characters does Japanese Hiragana have?',
    options: ['26', '46', '100', '200'],
    correctIndex: 1,
    explanation:
      'Hiragana has 46 basic characters, each representing a syllable.',
  },
];

function AlphabetsModule() {
  return (
    <div className="module-page">
      <SectionHeading text="Alphabets & Syllabaries" />

      <SubsectionHeading text="What is a Writing System?" />

      <KnowledgePartition id="partition1">
        <p>
          A <strong>writing system</strong> is a method of visually representing
          verbal communication. Writing systems are broadly categorised by the
          type of unit each symbol represents:
        </p>
        <LatexSnippet
          latex="\text{Alphabet} \longrightarrow \text{one symbol} \approx \text{one phoneme}"
          displayMode
        />
        <LatexSnippet
          latex="\text{Syllabary} \longrightarrow \text{one symbol} \approx \text{one syllable}"
          displayMode
        />
        <LatexSnippet
          latex="\text{Logography} \longrightarrow \text{one symbol} \approx \text{one morpheme / word}"
          displayMode
        />
      </KnowledgePartition>

      <SubsectionHeading text="Alphabets" />

      <KnowledgePartition id="partition2">
        <p>
          In an <strong>alphabet</strong>, individual letters represent consonant
          or vowel phonemes. The Latin, Greek, and Cyrillic scripts are all
          alphabets.
        </p>
        <p>
          The first five letters of the Greek alphabet, with their Latin
          equivalents:
        </p>
        <LatexSnippet
          latex="\alpha \to \text{a}, \quad \beta \to \text{b}, \quad \gamma \to \text{g}, \quad \delta \to \text{d}, \quad \epsilon \to \text{e}"
          displayMode
        />
        <p>
          Because each symbol maps to roughly one sound, alphabets tend to have
          relatively small inventories — English uses 26 letters to cover ~44
          phonemes.
        </p>
      </KnowledgePartition>

      <SubsectionHeading text="Syllabaries" />

      <KnowledgePartition id="partition3">
        <p>
          A <strong>syllabary</strong> uses one symbol per syllable. Japanese
          <em> Hiragana</em> is a well-known example: each character represents a
          consonant-vowel pair (or a lone vowel).
        </p>
        <LatexSnippet
          latex="\text{ka} \;\; \text{ki} \;\; \text{ku} \;\; \text{ke} \;\; \text{ko}"
          displayMode
        />
        <p>
          Syllabaries typically require more symbols than alphabets because every
          possible syllable needs its own character. Hiragana contains 46 basic
          characters.
        </p>
      </KnowledgePartition>

      <SubsectionHeading text="Abjads & Abugidas" />

      <KnowledgePartition id="partition4" isLast>
        <p>
          An <strong>abjad</strong> (e.g. Arabic, Hebrew) writes only consonants;
          vowels are either omitted or marked with optional diacritics.
        </p>
        <LatexSnippet
          latex="\text{k-t-b} \;\xrightarrow{\text{vowels}}\; \text{kitab (book)}"
          displayMode
        />
        <p>
          An <strong>abugida</strong> (e.g. Devanagari, Ge'ez) has consonant
          letters that carry an inherent vowel, modified by diacritics to change
          the vowel.
        </p>
        <LatexSnippet
          latex="\text{C} + \text{inherent vowel} + \text{diacritic} \to \text{syllable}"
          displayMode
        />
      </KnowledgePartition>

      <Quiz questions={quizQuestions} title="Writing Systems Quiz" />

      <AuthorPartition
        name="Percepty Team"
        description="An introductory survey of the world's writing systems."
        date="06-15-2025"
      />
    </div>
  );
}

export default AlphabetsModule;