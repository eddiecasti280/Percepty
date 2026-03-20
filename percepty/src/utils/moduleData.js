/**
 * Centralised module metadata.
 * To add a new module:
 *   1. Add an entry here.
 *   2. Create the module component under src/modules/<subject>/
 *   3. Register the route in App.js
 *   4. The matching overview page reads from this file automatically.
 */

export const mathModules = [
  {
    id: 'integration',
    title: 'Integration',
    description: 'Learn how to integrate basic expressions and understand the fundamental theorem of calculus.',
    path: '/math/integration',
    previewLatex: '\\int_{a}^{b} f(x)\\,dx = F(b) - F(a)',
  },
  {
    id: 'basicOperations',
    title: 'Basic Operations',
    description: 'Master the building blocks: addition, subtraction, and the vocabulary that surrounds them.',
    path: '/math/basic-operations',
    previewLatex: '(a + b) - c = a + (b - c)',
  },
  {
    id: 'vectorArithmetic',
    title: 'Vector Arithmetic',
    description: 'Explore vector definitions, operations, and geometric interpretations in two and three dimensions.',
    path: '/math/vector-arithmetic',
    previewLatex: '\\vec{a} \\cdot \\vec{b} = \\|\\vec{a}\\|\\,\\|\\vec{b}\\|\\cos\\theta',
  },
];

export const programmingModules = [
  {
    id: 'pythonGettingStarted',
    title: 'Python: Getting Started',
    description: 'Install Python, set up your environment, and write your first program.',
    path: '/programming/python-getting-started',
    previewLatex: '\\texttt{>>> print("Hello!")}',
  },
];

export const linguisticsModules = [
  {
    id: 'alphabets',
    title: 'Alphabets & Syllabaries',
    description: 'Understand the difference between writing systems and explore examples from around the world.',
    path: '/linguistics/alphabets',
    previewLatex: '\\alpha\\,\\beta\\,\\gamma \\;\\longrightarrow\\; \\text{A  B  C}',
  },
];