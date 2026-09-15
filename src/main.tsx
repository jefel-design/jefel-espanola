import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from './components/theme-provider.tsx';
import './index.css';

const root = document.getElementById('root');
if (!root) throw new Error('The application root element is missing.');

createRoot(root).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="jefel-ui-theme">
      <App />
    </ThemeProvider>
  </StrictMode>
);
