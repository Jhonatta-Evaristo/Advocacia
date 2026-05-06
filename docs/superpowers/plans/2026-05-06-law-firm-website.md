# Law Firm Website Structure Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a high-converting, visually stunning, and responsive React landing page for a Brazilian law firm focused on client acquisition.

**Architecture:** A single-page application (SPA) using React and Vite, featuring smooth scrolling, interactive animations, and a responsive layout. The design will use vanilla CSS following a clear design system for premium aesthetics.

**Tech Stack:** React, Vite, Vanilla CSS, Vitest (for testing).

---

### Task 1: Project Initialization and Setup

**Files:**
- Create: `package.json`, `index.html`, `vite.config.js`, `src/main.jsx`, `src/App.jsx`
- Create: `src/styles/index.css`, `src/styles/design-tokens.css`
- Test: `src/App.test.jsx`

- [ ] **Step 1: Write the failing test**

```jsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the main layout', () => {
    render(<App />);
    expect(screen.getByRole('banner')).toBeInTheDocument(); // Header
    expect(screen.getByRole('main')).toBeInTheDocument(); // Main content
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // Footer
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test`
Expected: FAIL with "App is not defined" or similar because App.jsx is missing.

- [ ] **Step 3: Write minimal implementation**

```jsx
// src/App.jsx
import React from 'react';
import './styles/index.css';

function App() {
  return (
    <div className="app-container">
      <header role="banner">
        <nav>Logo</nav>
      </header>
      <main role="main">
        <h1>Law Firm</h1>
      </main>
      <footer role="contentinfo">
        <p>Contact Us</p>
      </footer>
    </div>
  );
}

export default App;
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run test`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add .
git commit -m "chore: initialize project and layout"
```

### Task 2: Design System and Global Styles

**Files:**
- Modify: `src/styles/design-tokens.css`
- Modify: `src/styles/index.css`
- Test: `src/styles/styles.test.js`

- [ ] **Step 1: Define design tokens**

```css
/* src/styles/design-tokens.css */
:root {
  --color-primary: #1e3a5f; /* Deep Trust Blue */
  --color-secondary: #c5a880; /* Elegant Gold */
  --color-accent: #e74c3c; /* Action Red for conversion */
  --color-background-light: #f8f9fa;
  --color-background-dark: #121212;
  --color-text-main: #333333;
  --color-text-muted: #666666;
  
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Inter', sans-serif;
  
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
  --spacing-xl: 4rem;
  
  --transition-speed: 0.3s;
}
```

- [ ] **Step 2: Apply global styles**

```css
/* src/styles/index.css */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Playfair+Display:wght@400;700&display=swap');
@import './design-tokens.css';

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-body);
  color: var(--color-text-main);
  background-color: var(--color-background-light);
  line-height: 1.6;
}

h1, h2, h3, h4 {
  font-family: var(--font-heading);
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
}

.button-primary {
  background-color: var(--color-secondary);
  color: #fff;
  padding: var(--spacing-md) var(--spacing-lg);
  border: none;
  border-radius: 4px;
  font-family: var(--font-body);
  font-weight: 600;
  cursor: pointer;
  transition: background-color var(--transition-speed) ease;
}

.button-primary:hover {
  background-color: #a88d65;
}
```

- [ ] **Step 3: Commit**

```bash
git add src/styles/
git commit -m "style: add design system and global styles"
```

### Task 3: Hero Section (Client Acquisition Focus)

**Files:**
- Create: `src/components/Hero/Hero.jsx`
- Create: `src/components/Hero/Hero.css`
- Modify: `src/App.jsx:10-12`
- Test: `src/components/Hero/Hero.test.jsx`

- [ ] **Step 1: Write the failing test**

```jsx
// src/components/Hero/Hero.test.jsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from './Hero';

describe('Hero Component', () => {
  it('renders headline and call to action', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Advocacia de Excelência/i);
    expect(screen.getByRole('button', { name: /Fale com um Especialista/i })).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test`
Expected: FAIL "Hero is not defined"

- [ ] **Step 3: Write minimal implementation**

```jsx
// src/components/Hero/Hero.jsx
import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Advocacia de Excelência para o seu Negócio</h1>
        <p>Protegemos seus interesses com agilidade e segurança jurídica. Atendimento em todo o Brasil.</p>
        <button className="button-primary">Fale com um Especialista</button>
      </div>
    </section>
  );
}

export default Hero;
```

```css
/* src/components/Hero/Hero.css */
.hero-section {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  background: linear-gradient(rgba(30, 58, 95, 0.8), rgba(30, 58, 95, 0.8)), url('/hero-bg.jpg') center/cover;
  color: white;
  text-align: center;
  padding: var(--spacing-xl) var(--spacing-md);
}

.hero-content h1 {
  color: white;
  font-size: 3rem;
  margin-bottom: var(--spacing-lg);
}

.hero-content p {
  font-size: 1.25rem;
  margin-bottom: var(--spacing-lg);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
```

```jsx
// src/App.jsx
import React from 'react';
import './styles/index.css';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="app-container">
      <header role="banner">
        <nav>Logo</nav>
      </header>
      <main role="main">
        <Hero />
      </main>
      <footer role="contentinfo">
        <p>Contact Us</p>
      </footer>
    </div>
  );
}

export default App;
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run test`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add .
git commit -m "feat: add hero section with CTA"
```

### Task 4: Practice Areas Section

**Files:**
- Create: `src/components/PracticeAreas/PracticeAreas.jsx`
- Create: `src/components/PracticeAreas/PracticeAreas.css`
- Modify: `src/App.jsx:13-14`
- Test: `src/components/PracticeAreas/PracticeAreas.test.jsx`

- [ ] **Step 1: Write the failing test**

```jsx
// src/components/PracticeAreas/PracticeAreas.test.jsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import PracticeAreas from './PracticeAreas';

describe('PracticeAreas Component', () => {
  it('renders at least 3 practice areas', () => {
    render(<PracticeAreas />);
    expect(screen.getByText(/Áreas de Atuação/i)).toBeInTheDocument();
    expect(screen.getAllByRole('article').length).toBeGreaterThanOrEqual(3);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test`
Expected: FAIL

- [ ] **Step 3: Write minimal implementation**

```jsx
// src/components/PracticeAreas/PracticeAreas.jsx
import React from 'react';
import './PracticeAreas.css';

const areas = [
  { title: 'Direito Empresarial', desc: 'Consultoria e litígios societários.' },
  { title: 'Direito Civil', desc: 'Contratos, responsabilidade civil e família.' },
  { title: 'Direito Trabalhista', desc: 'Defesa de empresas e auditoria preventiva.' }
];

function PracticeAreas() {
  return (
    <section className="practice-areas">
      <h2>Áreas de Atuação</h2>
      <div className="areas-grid">
        {areas.map((area, index) => (
          <article key={index} className="area-card">
            <h3>{area.title}</h3>
            <p>{area.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PracticeAreas;
```

```css
/* src/components/PracticeAreas/PracticeAreas.css */
.practice-areas {
  padding: var(--spacing-xl) var(--spacing-md);
  text-align: center;
}

.areas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-lg);
}

.area-card {
  padding: var(--spacing-lg);
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: white;
  transition: transform var(--transition-speed) ease, box-shadow var(--transition-speed) ease;
}

.area-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}
```

```jsx
// src/App.jsx
import React from 'react';
import './styles/index.css';
import Hero from './components/Hero/Hero';
import PracticeAreas from './components/PracticeAreas/PracticeAreas';

function App() {
  return (
    <div className="app-container">
      <header role="banner">
        <nav>Logo</nav>
      </header>
      <main role="main">
        <Hero />
        <PracticeAreas />
      </main>
      <footer role="contentinfo">
        <p>Contact Us</p>
      </footer>
    </div>
  );
}

export default App;
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run test`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add .
git commit -m "feat: add practice areas section"
```

### Task 5: Social Proof and Testimonials

**Files:**
- Create: `src/components/Testimonials/Testimonials.jsx`
- Create: `src/components/Testimonials/Testimonials.css`
- Modify: `src/App.jsx:15-16`
- Test: `src/components/Testimonials/Testimonials.test.jsx`

- [ ] **Step 1: Write the failing test**

```jsx
// src/components/Testimonials/Testimonials.test.jsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Testimonials from './Testimonials';

describe('Testimonials Component', () => {
  it('renders testimonials section', () => {
    render(<Testimonials />);
    expect(screen.getByText(/O que dizem nossos clientes/i)).toBeInTheDocument();
    expect(screen.getByText(/Excelente atendimento/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test`
Expected: FAIL

- [ ] **Step 3: Write minimal implementation**

```jsx
// src/components/Testimonials/Testimonials.jsx
import React from 'react';
import './Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>O que dizem nossos clientes</h2>
      <div className="testimonial-card">
        <p>"Excelente atendimento e resultados rápidos. Recomendo fortemente."</p>
        <strong>- João Silva, CEO da Empresa X</strong>
      </div>
    </section>
  );
}

export default Testimonials;
```

```css
/* src/components/Testimonials/Testimonials.css */
.testimonials {
  padding: var(--spacing-xl) var(--spacing-md);
  background-color: var(--color-background-light);
  text-align: center;
}

.testimonial-card {
  max-width: 600px;
  margin: var(--spacing-lg) auto 0;
  padding: var(--spacing-lg);
  background: white;
  border-left: 4px solid var(--color-secondary);
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  font-style: italic;
}
```

```jsx
// src/App.jsx
import React from 'react';
import './styles/index.css';
import Hero from './components/Hero/Hero';
import PracticeAreas from './components/PracticeAreas/PracticeAreas';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className="app-container">
      <header role="banner">
        <nav>Logo</nav>
      </header>
      <main role="main">
        <Hero />
        <PracticeAreas />
        <Testimonials />
      </main>
      <footer role="contentinfo">
        <p>Contact Us</p>
      </footer>
    </div>
  );
}

export default App;
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run test`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add .
git commit -m "feat: add testimonials section"
```

### Task 6: Contact Form and Footer

**Files:**
- Create: `src/components/Contact/Contact.jsx`
- Create: `src/components/Contact/Contact.css`
- Modify: `src/App.jsx:17-18`
- Test: `src/components/Contact/Contact.test.jsx`

- [ ] **Step 1: Write the failing test**

```jsx
// src/components/Contact/Contact.test.jsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Contact from './Contact';

describe('Contact Component', () => {
  it('renders contact form', () => {
    render(<Contact />);
    expect(screen.getByRole('button', { name: /Enviar Mensagem/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Nome/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test`
Expected: FAIL

- [ ] **Step 3: Write minimal implementation**

```jsx
// src/components/Contact/Contact.jsx
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-section">
      <h2>Agende uma Consulta</h2>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Nome Completo" required />
        <input type="email" placeholder="E-mail" required />
        <input type="tel" placeholder="Telefone / WhatsApp" required />
        <textarea placeholder="Como podemos ajudar?" rows="4" required></textarea>
        <button type="submit" className="button-primary">Enviar Mensagem</button>
      </form>
    </section>
  );
}

export default Contact;
```

```css
/* src/components/Contact/Contact.css */
.contact-section {
  padding: var(--spacing-xl) var(--spacing-md);
  background-color: var(--color-primary);
  color: white;
  text-align: center;
}

.contact-section h2 {
  color: white;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  max-width: 500px;
  margin: var(--spacing-lg) auto 0;
}

.contact-form input,
.contact-form textarea {
  padding: var(--spacing-md);
  border: 1px solid transparent;
  border-radius: 4px;
  font-family: var(--font-body);
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: var(--color-secondary);
}
```

```jsx
// src/App.jsx
import React from 'react';
import './styles/index.css';
import Hero from './components/Hero/Hero';
import PracticeAreas from './components/PracticeAreas/PracticeAreas';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="app-container">
      <header role="banner">
        <nav>Logo</nav>
      </header>
      <main role="main">
        <Hero />
        <PracticeAreas />
        <Testimonials />
        <Contact />
      </main>
      <footer role="contentinfo">
        <p>&copy; 2026 Advocacia. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run test`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add .
git commit -m "feat: add contact section and update footer"
```
