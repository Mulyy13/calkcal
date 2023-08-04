import React from 'react';
import './bmi.scss';
import muscle from '../../../assets/pictures/muscle.jpg';
import tail from '../../../assets/pictures/tail.jpg';
import bmi from '../../../assets/pictures/bmi.project.png';

const handleImageView: React.FC = () => {
  return (
    <div className="image">
      <div className="image-close">X</div>
      <img src={bmi} alt="wskaznik bmi" />
    </div>
  );
};

const BMI: React.FC = () => {
  return (
    <main className="bmi">
      <div className="bmi__entry">
        <div className="bmi__entry-image-reduction">
          <img src={tail} alt="tail" />
        </div>
        <div className="bmi__entry-description">
          <h6>zrzucać kilogramy czy budować masę ? </h6>
          <p>
            Tutaj przychodzi nam z pomocą BMI (ang. Body Mass Index - wskaźnik
            masy ciała) wskaźnik, który jest obliczany przez porównanie wzrostu
            z masy ciała. Jego wartość jest pomocna w ocenie ryzyka wystąpienia
            chorób związanych z nadwagą takich jak miażdżyca lub choroba
            niedokrwienna serca. Im mniejsza wartość BMI, tym ryzyko wystąpienia
            chorób jest mniejsze.{' '}
          </p>
        </div>
        <div className="bmi__entry-image-mass">
          <img src={muscle} alt="muscle" />
        </div>
      </div>
      <div className="bmi__array-container">
        <div className="bmi__array-description-left">
          <h6>Uwaga !</h6>
          <p>
            BMI nie jest wiarygodnym wskaźnikiem zagrożenia chorobami dla
            poniższych grup osób:
          </p>
          <ul className="bmi__array-list">
            <li>ciężarnych kobiet</li>
            <li>sportowców oraz osób o rozbudowanej tkance mięśniowej</li>
            <li>rosnących dzieci</li>
            <li>
              osób w starszym wieku, u których trudno dokonać dokładnych
              pomiarów wzrostu
            </li>
          </ul>
        </div>
        <div className="bmi__array">
          <div className="bmi__array-middle">
            <img src={bmi} alt="bmi array" onClick={handleImageView} />
          </div>
        </div>
        <p className="bmi__array-description-right">
          Oznaczanie wskaźnika masy ciała ma znaczenie w ocenie zagrożenia
          chorób związanych z nadwagą i otyłością np. cukrzycą, chorobą
          niedokrwienną serca, miażdżycą. Im mniejsza wartość BMI, tym ryzyko
          wystąpienia chorób jest mniejsze. BMI jest bardzo prosty w użyciu,
          jest jednak dosyć niedokładnym wskaźnikiem nadwagi czy też ryzyka
          chorób z nią związanych. Np. osoba o rozbudowanej muskulaturze może
          mieć BMI wskazujące na skrajną otyłość posiadając jednocześnie bardzo
          mało tkanki tłuszczowej. O wiele dokładniejszym (lecz trudniejszym do
          zmierzenia bez specjalistycznej aparatury) wskaźnikiem jest procentowa
          zawartość tłuszczu w organizmie.
        </p>
      </div>
    </main>
  );
};

export default BMI;
