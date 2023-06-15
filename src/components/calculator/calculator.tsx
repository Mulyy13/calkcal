import React, { useState } from "react";
import "./calculator.scss"

interface CalculatorProps {
    onTotalMetabolismChange: (totalMetabolism: number) => void;

  }

const Calculator: React.FC<CalculatorProps> = ({
    onTotalMetabolismChange,}) => {
    const [weight, setWeight] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [age, setAge] = useState<number>(0);
    const [activity, setActivity] = useState<number>(0);
    const [gender, setGender] = useState<number>(0);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) { 
    e.preventDefault();
        const weightCalc = 10 * weight;
        const heightCalc = 6.25 * height;
        const ageCalc = 5 * age;
        const basicMetabolism =
          weightCalc + heightCalc - ageCalc + gender;
        const totalMetabolism = basicMetabolism * activity;
        // const deficitCalc = deficit * 0.3;
        // const deficitCalcInKcal = totalMetabolism * deficitCalc;
        // const totalCalories = totalMetabolism - deficitCalcInKcal
        onTotalMetabolismChange(totalMetabolism);

      }
    return (  
    <section>
        <main className="calculator">
        <form className="calculator__wrapper" onSubmit={handleSubmit}  >
            <label className="calculator__gender">
            
              <select
                value={gender}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  setGender(Number(e.target.value));
                }}
              >
                <option value={-161} >
                  Kobieta
                </option>
                <option value={5} >
                  Mężczyzna
                </option>
              </select>Płeć
            </label>
            <label className="calculator__age">
            
              <input
              
              type="text"
                name="age"
                value={age}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setAge(Number(e.target.value));
                }}
              />  Wiek
            </label>
            <label className="calculator__weight">
              
              <input
                name="weight"
                value={weight}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setWeight(Number(e.target.value));
                }}
              />Waga
            </label>
            <label className="calculator__height">
             
              <input
                name="height"
                value={height}
                onChange={(e) => {
                  setHeight(Number(e.target.value));
                }}
              /> Wzrost
            </label>
            <label className="calculator__activity">
              
              <select
                value={activity}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  setActivity(Number(e.target.value));
                }}
              >
                <option value={1.4}>Minimalna</option>
                <option value={1.6}>Mała</option>
                <option value={1.7}>Umiarkowana</option>
                <option value={1.9}>Intensywna</option>
                <option value={2.3}>Bardzo intensywna</option>
              </select>Aktywność
            </label>
            <button className="calculator__submit-button" type="submit">Wyślij</button>
          </form>
        </main>
      </section> );
}
 
export default Calculator;