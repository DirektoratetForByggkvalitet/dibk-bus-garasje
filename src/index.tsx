import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const container = document.querySelector('div[data-bind], #root');
if (!container) {
  throw new Error('Container element not found');
}

let translations = JSON.parse(container.getAttribute('data-bind') || '{}');

translations = Object.keys(translations).reduce((res, id) => {
  const { title: heading, ...rest } = translations[id];

  return {
    ...res,
    [id]: {
      heading,
      ...rest,
    },
  };
}, {});

const root = createRoot(container);

root.render(<App translations={translations} />);
if (window.location.hostname === 'localhost') {
  registerServiceWorker();
}
