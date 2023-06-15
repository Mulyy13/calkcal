import "./layout.scss";
import React, { ReactNode } from "react";
import PropTypes from "prop-types";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <section className="layout">
      <main className="layout__wrapper">{children}</main>
    </section>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
