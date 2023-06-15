import React, {useState } from "react";
import Calculator from "../calculator/calculator";

const Reduction: React.FC  = () => {    
  const [deficit, setDeficit] = useState<number>(0);
  const [totalMetabolism, setTotalMetabolism] = useState<number>(0); 
  const [result, showResult] = useState<boolean>(false);

   const handleTotalMetabolismChange = (metabolism: number) => {
    setTotalMetabolism(metabolism);
    showResult(true);
  };
        const deficitCalc = deficit * 0.3;
        const deficitCalcInKcal = totalMetabolism * deficitCalc;
        const totalCalories = totalMetabolism - deficitCalcInKcal
  return(
  <section>    <label>
  Redukcja tygodniowo (kg):
  <input
    type="number"
    name="deficit"
    value={deficit}
    step="0.1"
    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
      setDeficit(Number(e.target.value));
    }}
  />
</label>
        <Calculator   onTotalMetabolismChange={handleTotalMetabolismChange}/>
        
          {result && <div>{totalCalories.toFixed(0)}</div>}
          </section>
  )
};

export default Reduction;
