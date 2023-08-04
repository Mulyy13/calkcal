import React from 'react';
import { Link } from 'react-router-dom';
import './targets.scss';
import { motion } from 'framer-motion';

const Targets: React.FC = () => {
  return (
    <section className="targets">
      <motion.div
        className="targets__item"
        initial={{ opacity: 0, y: -300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link to={'/gain'} className="targets__item-wrapper">
          <div className="targets__item-image--plus"></div>
          <p className="targets__item-name">Zwiększenie masy</p>
        </Link>
      </motion.div>
      <motion.div
        className="targets__item"
        initial={{ opacity: 0, y: -300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Link to={'/maintenance'} className="targets__item-wrapper">
          <div className="targets__item-image--equal"></div>
          <p className="targets__item-name">Utrzymanie masy</p>
        </Link>
      </motion.div>
      <motion.div
        className="targets__item"
        initial={{ opacity: 0, y: -300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Link to={'/reduction'} className="targets__item-wrapper">
          <div className="targets__item-image--minus"></div>
          <p className="targets__item-name">Redukcja masy</p>
        </Link>
      </motion.div>
    </section>
  );
};

export default Targets;
