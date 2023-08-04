import React from 'react';
import './welcome.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Welcome: React.FC = () => {
  return (
    <main className="welcome">
      <div className="welcome__wrapper">
        <motion.div
          className="welcome__app-name"
          initial={{ opacity: 0, y: -300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span>Cal</span>Kcal
        </motion.div>
        <motion.p
          className="welcome__title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Oblicz swoje zapotrzebowanie kaloryczne z profesjonalną dokładnością
        </motion.p>
        <motion.div
          className="welcome__button"
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link className="welcome__button-text" to={'/home'}>
            start
          </Link>
        </motion.div>
      </div>
    </main>
  );
};

export default Welcome;
