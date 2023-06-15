import React, {useState} from "react";
import Calculator from "../calculator/calculator";

const Maintenance: React.FC = () => {   
  const [totalMetabolism, setTotalMetabolism] = useState<number>(0); 
  const [result, showResult] = useState<boolean>(false);


    const handleTotalMetabolismChange = (totalMetabolism: number) => {
  setTotalMetabolism(totalMetabolism);
  showResult(true)
};


  return <section>
<Calculator onTotalMetabolismChange={handleTotalMetabolismChange}/>
{result && <div>{totalMetabolism.toFixed(0)}</div>}
  </section>;
};

export default Maintenance;
