import "./styles.css";

import carImg from "../../assets/car.png"

export default function CardCar(){
    return(
        <>
            <div className="card">
                <img src={carImg} alt="Carro" />
                <h3>Lorem ipsum dolor</h3>
            </div>
        </>
    );
}