import React, { useState } from 'react';
import Calculator from '../../components/calculator/calculator';
import './gain.scss';
import Result from '../../components/results/result';
import { GainProps } from '../../@types/calculator';
import Targets from '../../components/targets/targets';
import Loader from '../../components/loader/loader';
import ActivityLevels from '../../components/articles/activityLevels/activityLevels';
import BMI from '../../components/articles/bmi/bmi';

const Gain: React.FC<GainProps> = ({ onTotalNutritionsChange }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [increase, setIncrease] = useState<number>(0.1);
  const [totalMetabolism, setTotalMetabolism] = useState<number>(0);
  const [result, showResult] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const protein = 4;
  const carbohydrates = 4;
  const fat = 9;
  const proteinsPart = totalMetabolism * 0.17;
  const totalProteins = proteinsPart / protein;

  const fatPart = totalMetabolism * 0.27;
  const totalFat = fatPart / fat;

  const carbonsPart = totalMetabolism * 0.56;
  const totalCarbons = carbonsPart / carbohydrates;
  onTotalNutritionsChange(totalProteins, totalFat, totalCarbons);
  const handleTotalMetabolismChange = (totalMetabolism: number) => {
    setTotalMetabolism(totalMetabolism);
    showResult(false);
    setIsLoading(true);
    setTimeout(() => {
      showResult(true);
      setIsLoading(false);
    }, 3000);
  };

  const caloricSurplus = increase * 7700;
  const totalCalories = totalMetabolism + caloricSurplus / 7;

  return (
    <div className="gain">
      <Targets />
      <div className="gain__calculator">
        <section className="gain__form">
          <label className="gain__form-weekly-gain">
            <span
              className={
                isActive
                  ? 'gain__weekly-gain-text--active'
                  : 'gain__weekly-gain-text'
              }
            >
              Przyrost tygodniowy (kg)
            </span>

            <input
              className="calculator__label-input"
              onFocus={() => {
                setIsActive(true);
              }}
              onBlur={() => {
                setIsActive(false);
              }}
              type="number"
              name="deficit"
              value={increase}
              step="0.1"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setIncrease(Number(e.target.value));
              }}
            />
          </label>
          <Calculator onTotalMetabolismChange={handleTotalMetabolismChange} />
        </section>
        <section className="gain__result">
          <div className="gain__result-box">
            {result && (
              <Result
                totalProteins={totalProteins}
                totalCarbons={totalCarbons}
                totalFat={totalFat}
                totalMetabolism={totalCalories}
              />
            )}
            {isLoading && <Loader />}
          </div>
        </section>
      </div>
      <div className="gain__articles">
        <ActivityLevels />
        <BMI />
      </div>
    </div>
  );
};
export default Gain;
