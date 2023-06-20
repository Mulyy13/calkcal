import React, {useState, } from "react";
import Calculator from "../calculator/calculator";
import "./gain.scss"

const Gain: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const [increase, setIncrease] = useState<number>(0.1);
  const [totalMetabolism, setTotalMetabolism] = useState<number>(0);
  const [result, showResult] = useState<boolean>(false);


   const handleTotalMetabolismChange = (metabolism: number) => {
    setTotalMetabolism(metabolism);
    showResult(true);
  };



        const caloricSurplus = increase * 7700;
        const totalCalories = totalMetabolism + (caloricSurplus/7)
  return(
  <div className="calculator-gain">
  <section className="calculator-gain__form">
    <label className="calculator-gain__form-label">
       <span className={isActive? "calculator__label-text--active" : "calculator__label-text"} > Przyrost tygodniowy (kg)</span>
  
  <input
  className="calculator__label-input" 
  onClick={()=>{setIsActive(true)}}
  
    type="number"
    name="deficit"
    value={increase}
    step="0.1"
    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
      setIncrease(Number(e.target.value));
    }}
  />
</label>
        <Calculator   onTotalMetabolismChange={handleTotalMetabolismChange}/>
  </section>
  <section className="calculator-gain__result">
  {result && <div><h1>Twoje zapotrzebowanie na kalorie wynosi : {totalCalories.toFixed(0)} kcal</h1></div>}
  </section>
  
  </div>
  )
            }
export default Gain