import React from "react";
import { Link } from "react-router-dom";
import "./targets.scss";

const Targets: React.FC = () => {
  return (
    <section className="targets">
      <Link to={"/gain"} className="targets__item">
        <div className="targets__item-image--large"></div>
        <p className="targets__item-name">Zwiększenie masy</p>
      </Link>
      <Link to={"/maintenance"} className="targets__item">
        {" "}
        <div className="targets__item-image--medium"></div>
        <p className="targets__item-name">Utrzymanie masy</p>
      </Link>
      <Link to={"/reduction"} className="targets__item">
        <div className="targets__item-image--small"></div>
        <p className="targets__item-name">Redukcja masy</p>
      </Link>
    </section>
  );
};

export default Targets;
