import React from 'react';
import './activityLevels.scss';
import bike from '../../../assets/pictures/bike.jpg';

const ActivityLevels: React.FC = () => {
  return (
    <main className="activity">
      <div className="activity__entry">
        <div className="activity__entry-text">
          <h2 className="activity__title">Jak określić aktywność ?</h2>
          <p>
            W celu oszacowania aktywności fizycznej operujemy zazwyczaj
            poziomami aktywności fizycznej, które przedstawiane są jako
            wielokrotność Podstawowej Przemiany Materii. Zazwyczaj około połowę
            dnia spędzamy w pracy, dlatego ważne jest abyśmy zwrócili na to taką
            samą uwagęjak na czynności wykonywane poza miejscem zatrudnienia.
          </p>
          <p>
            Poniżej znajdziesz wskazówki, które pomogą ci określić jaki poziom
            aktywności fizycznej pasuje do ciebie
          </p>
        </div>
        <div className="activity__entry-image">
          <img src={bike} alt="cycler" />
        </div>
      </div>
      <div className="activity__rubric">
        <div className="activity__rubric-level">Poziom Aktywności</div>
        <div className="activity__rubric-types">
          <div className="activity__work">Praca</div>
          <div className="activity__home">Dom</div>
        </div>
      </div>
      <div className="activity__levels">
        <div className="activity__levels-item activity__levels-item-minimal">
          <h6>
            Aktywność
            <br />
            Minimalna
          </h6>
          <div className="activity__item-text">
            <p>
              Siedzę przed komputerem większą część dnia lub jestem kierowcą
            </p>
            <p>Nie jestem aktywny fizycznie w wolnym czasie</p>
          </div>
        </div>
        <div className="activity__levels-item activity__levels-item-small">
          <h6>
            Aktywność
            <br />
            Niska
          </h6>
          <div className="activity__item-text">
            <p>
              {' '}
              Lekka praca przemysłowa, sprzedaż lub praca biurowa obejmująca
              lekkie czynności (np. przemieszczanie się pomiędzy biurami
              wewnątrz firmy)
            </p>
            <p>
              W przybliżeniu raz w tygodniu: spaceruję, rekreacyjnie jeżdżę na
              rowerze, pracuję w ogródku
            </p>
          </div>
        </div>
        <div className="activity__levels-item activity__levels-item-average">
          <h6>
            Aktywność
            <br />
            Umiarkowana
          </h6>
          <div className="activity__item-text">
            <p>
              Sprzątanie, praca w kuchni lub dostarczanie poczty pieszo lub
              rowerem
            </p>
            <p>
              Regularnie ćwiczę przynajmniej raz w tygodniu: spaceruję, jeżdżę
              na rowerze, pracuję w ogródku lub idę do pracy przynajmniej 10–30
              min codziennie
            </p>
          </div>
        </div>
        <div className="activity__levels-item activity__levels-item-high">
          <h6>
            Aktywność
            <br />
            Wysoka
          </h6>
          <div className="activity__item-text">
            <p>
              Lekkie prace budowlane , prace takie jak koszenie trawy,
              przenoszenie lekkich ładunków, ale w prawie ciągłym ruchu{' '}
            </p>
            <p>
              Regularnie ćwiczę więcej niż raz w tygodniu: intensywne spacery
              lub intensywna jazda na rowerze lub uprawianie sportu
            </p>
          </div>
        </div>
        <div className="activity__levels-item activity__levels-item-huge">
          <h6>
            Aktywność
            <br />
            Bardzo wysoka
          </h6>
          <div className="activity__item-text">
            <p>Ciężka praca przemysłowa, prace budowlane lub rolnictwo.</p>
            <p>Ciężka aktywność fizyczna kilka razy w tygodniu</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ActivityLevels;
