
import React from 'react';

export default function WelcomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Aquí puedes agregar un Header, Sidebar o lo que quieras */}
      {children}
    </div>
  );
}
