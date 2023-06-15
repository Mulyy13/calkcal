import React, {useState} from "react";
import Calculator from "../calculator/calculator";

const Gain: React.FC = () => {
  const [increase, setIncrease] = useState<number>(0);
  const [totalMetabolism, setTotalMetabolism] = useState<number>(0);
  const [result, showResult] = useState<boolean>(false);

   const handleTotalMetabolismChange = (metabolism: number) => {
    setTotalMetabolism(metabolism);
    showResult(true);
  };

        const caloricSurplus = increase * 7700;
        const totalCalories = totalMetabolism + (caloricSurplus/7)
  return(
  <section>
        <Calculator   onTotalMetabolismChange={handleTotalMetabolismChange}/>
            <label>
            Przyrost tygodniowy (kg):
            <input
              type="number"
              name="deficit"
              value={increase}
              step="0.1"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setIncrease(Number(e.target.value));
              }}
            />
          </label>
          {result && <div>{totalCalories.toFixed(0)}</div>}
          </section>
  )
            }
export default Gain