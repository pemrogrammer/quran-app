import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ReadQuran from './pages/read_quran';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReadQuran />
  </React.StrictMode>
);

reportWebVitals();
