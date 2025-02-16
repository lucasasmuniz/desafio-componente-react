import "./styles.css";
import CardCar from "../../components/CardCar";
import Header from "../../components/Header";
import CardComment from "../../components/CardComment";
import Footer from "../../components/Footer";

export default function MainPage(){
    return(
        <>
            <Header />
            <main>
                <section id="car-catalog-section">
                    <div className="dsct-title-section">
                        <h2>Venha nos visitar</h2>
                    </div>
                    <div className="dsct-card-container container">
                        <CardCar />
                        <CardCar />
                    </div>
                </section>
                <section id="comment-section">
                    <div className="dsct-title-section">
                        <h2 >O que estão dizendo</h2>
                    </div>
                    <div className="dsct-comment-container container">
                        <CardComment />
                        <CardComment />
                        <CardComment />
                        <CardComment />
                        <CardComment />
                    </div>
                </section>
                <Footer />
            </main>
        </>
    );
}