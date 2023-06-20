import React, { useState} from "react";
import "./calculator.scss"
import { IoMdFemale, IoMdMale } from 'react-icons/io';

interface CalculatorProps {
    onTotalMetabolismChange: (totalMetabolism: number) => void;

  }

const Calculator: React.FC<CalculatorProps> = ({
    onTotalMetabolismChange,}) => {
    const [weight, setWeight] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [age, setAge] = useState<number>(0);
    const [activity, setActivity] = useState<number>(0);
    const [genderPoints, setGenderPoints] = useState<number>(0);
    const [inputFocus, setInputFocus] = useState<number>(0);
    const [isFemale, setIsFemale] = useState<boolean>(true)
    const [colorActivity, setColorActivity] = useState<string>("black")


  function handleSubmit(e: React.FormEvent<HTMLFormElement>) { 
    e.preventDefault();
        const weightCalc = 10 * weight;
        const heightCalc = 6.25 * height;
        const ageCalc = 5 * age;
        const basicMetabolism = weightCalc + heightCalc - ageCalc + genderPoints;
        const totalMetabolism = basicMetabolism * activity;
        onTotalMetabolismChange(totalMetabolism);

      }
    return (  
    <section>
        <main className="calculator">
        <form className="calculator__wrapper" onSubmit={handleSubmit}  >
            <label className="calculator__age calculator__label"> <span className={inputFocus === 1 ? "calculator__label-text--active" : ""}>Wiek</span>
              <input className="calculator__age-input calculator__label-input"
              onClick={() => {setInputFocus(1)}}
              type="text"
                name="age"
                required={true}
                value={age}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setAge(Number(e.target.value));
                }}
              />
            </label>
            <label className="calculator__weight calculator__label"> <span className={inputFocus === 2 ? "calculator__label-text--active" : ""}>Waga</span>
              <input className="calculator__weight-input calculator__label-input"
              onClick={() => {setInputFocus(2);}}
                name="weight"
                value={weight}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setWeight(Number(e.target.value));
                }}
              />
            </label>
            <label className="calculator__height calculator__label"> <span className={inputFocus === 3 ? "calculator__label-text--active" : ""}>Wzrost</span>
              <input className="calculator__height-input calculator__label-input"   
              onClick={() => {setInputFocus(3)}}
                name="height"
                value={height}
                onChange={(e) => {
                  setHeight(Number(e.target.value));
                }}
              />
            </label>
            <label className="calculator__gender calculator__label"> <span>Płeć</span>
            <div className="calculator__gender-box">
              <div className={"calculator__gender-female" + (isFemale ? " calculator__gender-female--active" : "")}
                   onClick={()=> {setIsFemale(true); setGenderPoints(-161)}}><IoMdFemale/></div>
              <div className={"calculator__gender-male" + (isFemale ? "" : " calculator__gender-male--active")}
                   onClick={()=> {setIsFemale(false); setGenderPoints(5)}}><IoMdMale/></div>
            </div>
          </label>
            <label className="calculator__activity" > <span className="calculator__activity-text"  style={{backgroundColor:String(colorActivity)}}>Aktywność</span>
            <div className="calculator__activity-box">
              <div className="calculator__activity-item activity-item__minimum"  onClick={()=>{setActivity(1.4); setColorActivity("rgb(207, 255, 207)")}}></div>
              <div className="calculator__activity-item activity-item__little"  onClick={()=>{setActivity(1.6); setColorActivity("rgb(1, 179, 31)")}}></div>
              <div className="calculator__activity-item activity-item__average" onClick={()=>{setActivity(1.7);setColorActivity("rgb(255, 230, 0)")}}></div>
              <div className="calculator__activity-item activity-item__high" onClick={()=>{setActivity(1.9);setColorActivity("rgb(255, 123, 0)")}}></div>
              <div className="calculator__activity-item activity-item__huge" onClick={()=>{setActivity(2.3);setColorActivity("rgb(240, 0, 0)")}}></div>
              </div>
            </label>
            <button className="calculator__submit-button" type="submit">Oblicz</button>
          </form>
        </main>
      </section> );
}
 
export default Calculator;