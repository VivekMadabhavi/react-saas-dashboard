import React from 'react';
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./hooks/useTheme";
import "./app.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <Meta /> */}
        {/* <Links /> */}
      </head>
      <body>
        {children}
        {/* <ScrollRestoration /> */}
        {/* <Scripts /> */}
      </body>
    </html>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  );
}

// Removed ErrorBoundary as it's handled by router in main.tsx and not directly exported from root.tsx
