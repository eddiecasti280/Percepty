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
    options: ['Syllabary', 'Logography', 'Alphabet', 'Abjad'], correctIndex: 2,
    explanation: '\\text{The Latin alphabet is an alphabet — each letter maps to a consonant or vowel phoneme.}',
  },
  {
    question: 'In a syllabary, each symbol represents:',
    options: ['A single consonant', 'A single vowel', 'A syllable', 'A word'], correctIndex: 2,
    explanation: '\\text{In a syllabary such as Japanese Hiragana, each character represents a whole syllable.}',
  },
  {
    question: 'What is an abjad?',
    options: ['A system with no vowels', 'A system that writes only consonants (vowels optional)', 'A system where each symbol is a word', 'A pictographic system'],
    correctIndex: 1,
    explanation: '\\text{An abjad (e.g.\\;Arabic, Hebrew) primarily writes consonants; vowels may be marked with diacritics.}',
  },
  {
    question: 'Which of these is an example of an abugida?',
    options: ['Latin', 'Arabic', 'Devanagari', 'Chinese'], correctIndex: 2,
    explanation: '\\text{Devanagari is an abugida — consonants carry an inherent vowel modified by diacritics.}',
  },
  {
    question: 'How many basic characters does Japanese Hiragana have?',
    options: ['26', '46', '100', '200'], correctIndex: 1,
    explanation: '\\text{Hiragana has 46 basic characters, each representing one syllable.}',
  },
];

function AlphabetsModule() {
  return (
    <div className="module-page">
      <SectionHeading text="Alphabets & Syllabaries" />
      <SubsectionHeading text="What is a Writing System?" />
      <KnowledgePartition id="partition1">
        <p>Writing systems are categorised by the unit each symbol represents:</p>
        <LatexSnippet latex="\text{Alphabet} \longrightarrow \text{one symbol} \approx \text{one phoneme}" displayMode />
        <LatexSnippet latex="\text{Syllabary} \longrightarrow \text{one symbol} \approx \text{one syllable}" displayMode />
        <LatexSnippet latex="\text{Logography} \longrightarrow \text{one symbol} \approx \text{one morpheme / word}" displayMode />
      </KnowledgePartition>
      <SubsectionHeading text="Alphabets" />
      <KnowledgePartition id="partition2">
        <p>First five Greek letters with Latin equivalents:</p>
        <LatexSnippet latex="\alpha\to\text{a},\;\beta\to\text{b},\;\gamma\to\text{g},\;\delta\to\text{d},\;\epsilon\to\text{e}" displayMode />
        <p>English uses 26 letters to cover ~44 phonemes.</p>
      </KnowledgePartition>
      <SubsectionHeading text="Syllabaries" />
      <KnowledgePartition id="partition3">
        <p>Japanese <em>Hiragana</em> has 46 basic characters, each representing a consonant-vowel pair:</p>
        <LatexSnippet latex="\text{ka}\;\;\text{ki}\;\;\text{ku}\;\;\text{ke}\;\;\text{ko}" displayMode />
      </KnowledgePartition>
      <SubsectionHeading text="Abjads & Abugidas" />
      <KnowledgePartition id="partition4" isLast>
        <p>An <strong>abjad</strong> writes only consonants; vowels are optional:</p>
        <LatexSnippet latex="\text{k-t-b}\;\xrightarrow{\text{vowels}}\;\text{kitab (book)}" displayMode />
        <p>An <strong>abugida</strong> modifies an inherent vowel with diacritics:</p>
        <LatexSnippet latex="\text{C}+\text{inherent vowel}+\text{diacritic}\to\text{syllable}" displayMode />
      </KnowledgePartition>
      <Quiz questions={quizQuestions} title="Writing Systems Quiz" />
      <AuthorPartition name="Percepty Team" description="An introductory survey of the world's writing systems." date="06-15-2025" />
    </div>
  );
}

export default AlphabetsModule;