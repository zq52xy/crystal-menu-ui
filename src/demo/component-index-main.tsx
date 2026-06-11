// [PROTOCOL]: Change this header when the component index mount behavior changes, then check CLAUDE.md.
// INPUT: Browser root element and ComponentIndexPage.
// OUTPUT: Static component catalog render tree for SEO-oriented demo pages.
// POS: Demo-only entry, parallel to main.tsx and outside the package API.
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ComponentIndexPage } from './ComponentIndexPage';
import './demo.less';
import './component-index.less';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ComponentIndexPage />
  </React.StrictMode>,
);

