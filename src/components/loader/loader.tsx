import React from "react";
import './loader.scss'


const Loader:React.FC = () => {
    return ( <div>
<div className="loader">
    <div className="loader__ring">
    </div>
    <span className="loader__text">Obliczanie...</span>
</div>

    </div> );
}
 
export default Loader;