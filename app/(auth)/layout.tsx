import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return <main className="auth">{props.children}</main>;
};

export default Layout;
