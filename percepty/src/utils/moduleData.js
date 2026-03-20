export const mathModuleGroups = [
  { group: 'Calculus', modules: [
    { id: 'integration', title: 'Integration', description: 'Learn how to integrate basic expressions and understand the fundamental theorem of calculus.', path: '/math/integration', previewLatex: '\\int_{a}^{b} f(x)\\,dx = F(b) - F(a)' },
    { id: 'derivatives', title: 'Derivatives', description: 'Explore rates of change, differentiation rules, and how derivatives describe the behaviour of functions.', path: '/math/derivatives', previewLatex: "\\frac{d}{dx}\\bigl[f(g(x))\\bigr] = f'(g(x))\\cdot g'(x)" },
    { id: 'vectorArithmetic', title: 'Vector Arithmetic', description: 'Explore vector definitions, operations, and geometric interpretations in two and three dimensions.', path: '/math/vector-arithmetic', previewLatex: '\\vec{a} \\cdot \\vec{b} = \\|\\vec{a}\\|\\,\\|\\vec{b}\\|\\cos\\theta' },
  ]},
  { group: 'Fundamentals', modules: [
    { id: 'basicOperations', title: 'Basic Operations', description: 'Master the building blocks: addition, subtraction, and the vocabulary that surrounds them.', path: '/math/basic-operations', previewLatex: '(a + b) - c = a + (b - c)' },
  ]},
];

export const programmingModuleGroups = [
  { group: 'Python', modules: [
    { id: 'pythonGettingStarted', title: 'Getting Started', description: 'Install Python, set up your environment, and write your first program.', path: '/programming/python-getting-started', previewLatex: '\\texttt{>>> print("Hello!")}' },
    { id: 'pythonControlFlow', title: 'Control Flow', description: 'Learn how to branch with if/elif/else and loop with for and while.', path: '/programming/python-control-flow', previewLatex: '\\texttt{for}\\;i\\;\\texttt{in range(n):}' },
  ]},
  { group: 'JavaScript', modules: [
    { id: 'jsGettingStarted', title: 'Getting Started', description: 'Install Node.js, understand the console, and write your first script.', path: '/programming/js-getting-started', previewLatex: '\\texttt{console.log("Hello!")}' },
    { id: 'jsControlFlow', title: 'Control Flow', description: 'Branch with if/else and loop with for and while — the JavaScript way.', path: '/programming/js-control-flow', previewLatex: '\\texttt{for}\\;(\\texttt{let}\\;i=0;\\;i<n;\\;i\\texttt{++})' },
  ]},
];

export const linguisticsModuleGroups = [
  { group: 'Writing Systems', modules: [
    { id: 'alphabets', title: 'Alphabets & Syllabaries', description: 'Understand the difference between writing systems and explore examples from around the world.', path: '/linguistics/alphabets', previewLatex: '\\alpha\\,\\beta\\,\\gamma \\;\\longrightarrow\\; \\text{A  B  C}' },
  ]},
];

/* ========== Custom (admin-created) module helpers ========== */

export function getCustomModules() {
  try { return JSON.parse(localStorage.getItem('percepty_custom_modules') || '[]'); }
  catch { return []; }
}

export function saveCustomModule(mod) {
  const all = getCustomModules();
  const idx = all.findIndex((m) => m.id === mod.id);
  if (idx >= 0) all[idx] = mod; else all.push(mod);
  localStorage.setItem('percepty_custom_modules', JSON.stringify(all));
}

export function deleteCustomModule(id) {
  localStorage.setItem(
    'percepty_custom_modules',
    JSON.stringify(getCustomModules().filter((m) => m.id !== id))
  );
}

/** Merge hardcoded groups with published custom modules for a given subject. */
export function getMergedGroups(hardcodedGroups, subject) {
  const published = getCustomModules().filter((m) => m.published && m.subject === subject);
  const result = hardcodedGroups.map((g) => ({ ...g, modules: [...g.modules] }));

  published.forEach((m) => {
    const entry = {
      id: m.id, title: m.title, description: m.description,
      path: `/modules/custom/${m.id}`,
      previewLatex: m.previewLatex || 'E = mc^2',
    };
    const existing = result.find((g) => g.group === m.group);
    if (existing) existing.modules.push(entry);
    else result.push({ group: m.group || 'Other', modules: [entry] });
  });

  return result;
}