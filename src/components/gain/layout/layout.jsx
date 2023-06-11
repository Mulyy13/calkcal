import "./layout.scss";
import React from "react";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
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
