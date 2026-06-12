// [PROTOCOL]: Change this header when the example mount flow changes, then check CLAUDE.md.
// INPUT: Browser root element and example app component.
// OUTPUT: React-rendered Vite example page.
// POS: Example bootstrap only; no package exports.
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './app.less';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
