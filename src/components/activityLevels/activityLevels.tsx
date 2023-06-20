import "./activityLevels.scss"
import bike from "../../assets/pictures/bike.jpg"

const ActivityLevels:React.FC = () => {
    return ( <main className="activity">
        <div className="activity__text">
        <h2 className="activity__text-title">Jak określić aktywność ?</h2>
        <p className="activity__text-description">W celu oszacowania aktywności fizycznej operujemy zazwyczaj poziomami aktywności fizycznej, które przedstawiane są jako wielokrotność Podstawowej Przemiany Materii. Zazwyczaj około połowę dnia spędzamy w pracy, dlatego ważne jest abyśmy zwrócili na to taką samą uwagę jak na czynności wykonywane poza miejscem zatrudnienia</p>
        </div>
        <div className="activity__image">
            <img src={bike} alt="cycler" />
        </div>
        <div className="activity__levels">
            <div className="activity__levels__item"></div>
            <div className="activity__levels__item"></div>
            <div className="activity__levels__item"></div>
            <div className="activity__levels__item"></div>
            <div className="activity__levels__item"></div>
        </div>
    </main> );
}
 
export default ActivityLevels;