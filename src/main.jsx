import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <h1>이건 main.js파일이에요</h1>
    <App />
  </StrictMode>
);