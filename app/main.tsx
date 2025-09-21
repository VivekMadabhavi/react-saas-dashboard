import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './routes.tsx';
import { ThemeProvider } from './hooks/useTheme';
import "./app.css";

console.log('main.tsx: Starting render with RouterProvider');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

console.log('main.tsx: RouterProvider render function called');
