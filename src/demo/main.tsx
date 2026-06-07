// [PROTOCOL]: Change this header when demo mount behavior changes, then check CLAUDE.md.
// INPUT: Browser root element and demo App.
// OUTPUT: Local Vite demo render tree.
// POS: Demo-only entry, not part of the package API.
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './demo.less';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
