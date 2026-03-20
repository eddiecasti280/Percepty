import React from 'react';
import '../../styles/Module.css';
import KnowledgePartition from '../../components/content/KnowledgePartition';
import SectionHeading from '../../components/common/SectionHeading';
import LatexSnippet from '../../components/content/LatexSnippet';
import AuthorPartition from '../../components/content/AuthorPartition';
import 'katex/dist/katex.min.css';

function IntegralsModule() {
  return (
    <div className="module-page">
      <SectionHeading text="Integrals" />

      <KnowledgePartition id="partition1">
        <p>
          An <strong>integral</strong> generalises the idea of summing infinitely
          many infinitesimal quantities. The definite integral computes the
          signed area under a curve:
        </p>
        <LatexSnippet
          latex="\int_{a}^{b} f(x)\,dx = F(b) - F(a)"
          displayMode
        />
        <p>Here are a few classic results you will encounter:</p>
        <LatexSnippet
          latex="\int_{0}^{\infty} \frac{1}{x^2 + 1}\,dx = \frac{\pi}{2}"
          displayMode
        />
        <LatexSnippet
          latex="\frac{d}{dx} e^x = e^x"
          displayMode
        />
        <LatexSnippet
          latex="\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}"
          displayMode
        />
      </KnowledgePartition>

      <KnowledgePartition id="partition2" isLast>
        <p>A few more identities that appear frequently in integral calculus:</p>
        <LatexSnippet latex="a^2+b^2=c^2" displayMode />
        <LatexSnippet
          latex="\frac{\partial \mathcal{D}}{\partial t}=\nabla\times\mathcal{H}"
          displayMode
        />
        <LatexSnippet
          latex="\begin{bmatrix}1&2\\2&1\end{bmatrix}"
          displayMode
        />
      </KnowledgePartition>

      <AuthorPartition
        name="Ella Minnow"
        description="I'm a student at a university."
        date="8-2-2026"
      />
    </div>
  );
}

export default IntegralsModule;