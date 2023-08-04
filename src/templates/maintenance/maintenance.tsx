import React, { useState } from 'react';
import Calculator from '../../components/calculator/calculator';
import './maintenance.scss';
import ActivityLevels from '../../components/articles/activityLevels/activityLevels';
import Loader from '../../components/loader/loader';
import BMI from '../../components/articles/bmi/bmi';
import Result from '../../components/results/result';
import { MaintenanceProps } from '../../@types/calculator';
import Targets from '../../components/targets/targets';

const Maintenance: React.FC<MaintenanceProps> = ({
  onTotalNutritionsChange,
}) => {
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

  return (
    <div className="maintenance">
      <Targets />
      <div className="maintenance__calculator">
        <section className="maintenance__form">
          <Calculator onTotalMetabolismChange={handleTotalMetabolismChange} />
        </section>
        <section className="maintenance__result">
          <div className="maintenance__result-box">
            {result && (
              <Result
                totalProteins={totalProteins}
                totalCarbons={totalCarbons}
                totalFat={totalFat}
                totalMetabolism={totalMetabolism}
              />
            )}
            {isLoading && <Loader />}
          </div>
        </section>
      </div>
      <div className="maintenance__articles">
        <ActivityLevels />
        <BMI />
      </div>
    </div>
  );
};

export default Maintenance;
