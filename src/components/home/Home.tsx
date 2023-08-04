import React from 'react';
import './home.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Gain from '../../assets/pictures/gainHome.webp';
import Reduct from '../../assets/pictures/lossHome.jpg';
import Maintenance from '../../assets/pictures/maintenanceHome.jpg';

const Home: React.FC = () => {
  return (
    <div className="home">
      <h3 className="home__title">Wybierz swój cel</h3>
      <motion.div
        className="home__wrapper"
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="home__item">
          <div className="home__item-image">
            <img src={Reduct} alt="" />
          </div>
          <div className="home__item-text">
            <h3>Redukcja masy</h3>
            <p>
              Ta opcja jest dla osób, które dążą do utraty nadmiarowej masy
              ciała. Oferujemy tutaj porady dotyczące diety i treningu, które
              mogą pomóc w procesie redukcji wagi. Znajdziesz tu również
              wskazówki odnośnie zbilansowanej diety i specjalnie opracowanych
              programów treningowych, które mogą wesprzeć Cię w osiąganiu
              zdrowszej wagi.
            </p>
            <Link className="home__item-text-link" to={'/reduction'}>
              Przejdź dalej
            </Link>
          </div>
        </div>
        <div className="home__item">
          <div className="home__item-image">
            <img src={Maintenance} alt="" />
          </div>
          <div className="home__item-text">
            <h3>Utrzymanie masy</h3>
            <p>
              Ta opcja jest idealna dla osób, które osiągnęły już swoje cele
              związane z masą ciała i chcą utrzymać osiągnięty wynik. Znając
              wagę, której chcesz utrzymać, możesz wybrać ten plan, który pomoże
              Ci utrzymać stabilną masę ciała przez zrównoważoną dietę i
              odpowiednie nawyki treningowe. Wybór ten zapewnia wsparcie i
              porady w utrzymaniu zdrowej i stabilnej masy ciała.
            </p>
            <Link className="home__item-text-link" to={'/reduction'}>
              Przejdź dalej
            </Link>
          </div>
        </div>
        <div className="home__item">
          <div className="home__item-image">
            <img src={Gain} alt="" />
          </div>
          <div className="home__item-text">
            {' '}
            <h3>Zwiększenie masy</h3>
            <p>
              Ta opcja jest dedykowana osobom, które pragną zwiększyć swoją masę
              ciała. Dzięki odpowiedniej diecie i treningowi, możesz osiągnąć
              swoje cele w zakresie budowy mięśni i nabrania masy ciała. Wybór
              ten oferuje porady żywieniowe i treningowe, które pomogą Ci
              zwiększyć masę ciała i osiągnąć pożądane rezultaty.
            </p>
            <Link className="home__item-text-link" to={'/reduction'}>
              Przejdź dalej
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
