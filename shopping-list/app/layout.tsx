// app/layout.tsx

import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Shopping List</title>
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
