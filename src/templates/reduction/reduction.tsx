import React, { useState } from 'react';
import Calculator from '../../components/calculator/calculator';
import './reduction.scss';
import Result from '../../components/results/result';
import { ReductionProps } from '../../@types/calculator';
import Targets from '../../components/targets/targets';
import Loader from '../../components/loader/loader';
import ActivityLevels from '../../components/articles/activityLevels/activityLevels';
import BMI from '../../components/articles/bmi/bmi';

const Reduction: React.FC<ReductionProps> = ({ onTotalNutritionsChange }) => {
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
    <div className="reduction">
      <Targets />
      <div className="reduction__calculator">
        <section className="reduction__form">
          <label className="reduction__form-weekly-reduct">
            <span
              className={
                isActive
                  ? 'reduction__weekly-reduct-text--active'
                  : 'reduction__weekly-reduct-text'
              }
            >
              Redukcja Tygodniowa (kg)
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
        <section className="reduction__result">
          <div className="reduction__result-box">
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
      <div className="reduction__articles">
        <ActivityLevels />
        <BMI />
      </div>
    </div>
  );
};
export default Reduction;
