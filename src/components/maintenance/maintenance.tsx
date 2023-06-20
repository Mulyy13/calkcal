import React, {useState} from "react";
import Calculator from "../calculator/calculator";
import "./maintenance.scss"
import ActivityLevels from "../activityLevels/activityLevels";
import Loader from "../loader/loader";

const Maintenance: React.FC = () => {
  const [totalMetabolism, setTotalMetabolism] = useState<number>(0);
  const [result, showResult] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleResult = () => {
    return (  <div><span>Jeśli chcesz utrzymać podaną wagę, powinieneś dziennie dostarczać organizmowi </span>
    {totalMetabolism.toFixed(0)} kcal</div>)
    }

const loadingContent = () =>{
  return( <Loader/>)
}

    const handleTotalMetabolismChange = (totalMetabolism: number) => {
  setTotalMetabolism(totalMetabolism);
  showResult(false)
  setIsLoading(true)
  setTimeout(() => {
    showResult(true);
    setIsLoading(false)
  }, 3000);
 
};

  return ( <div className="maintenance">
  <div className="calculator-maintenance">
  <section className="calculator-maintenance__form">
<Calculator onTotalMetabolismChange={handleTotalMetabolismChange}/>
  </section>
  <section className="calculator-maintenance__result">
    <div className="calculator-maintenance__result-box">
  {result && handleResult()  }
  {isLoading && loadingContent()}</div>
  </section>
  </div>
  <div className="description">
    <ActivityLevels/>
  </div>
  </div>
)}

export default Maintenance;
