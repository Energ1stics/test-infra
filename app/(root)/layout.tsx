import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <main className="root">
      <div className="root-container">
        <div className="wrapper">{props.children}</div>
      </div>
    </main>
  );
};

export default Layout;
