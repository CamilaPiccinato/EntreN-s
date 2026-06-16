import NoveloLa from "../assets/novelodelã.svg";
import Gatinhotela1 from "../assets/gatinhotela1.svg";
import Button from "./Button";
import "../styles/hero.css";
import "../styles/hero.css";

export default function Hero() {
    const whatsappLink = 'https://wa.me/5545999373056?text=Olá! Gostaria de fazer uma encomenda.';

    return (
        <section id="hero">
            <div className="hero-top">
                <h1>Peças artesanais únicas feitas a mão como a gente ama.</h1>
                <img src={Gatinhotela1} alt="gatinho com novelo" className="hero-cat" />
            </div>

            <div className="hero-yarn-wrapper">
                <img src={NoveloLa} alt="" className="hero-yarn" aria-hidden="true" />
                <div className="hero-yarn-content">
                    <p>Cada peça nasce do zero</p>
                    <p>feita especialmente pra você.</p>
                    <div className="flex gap-1">
                        <a href="#pricing"><Button text="Ver produtos" /></a>
                        <a href={whatsappLink} target="_blank" rel="noreferrer">
                            <Button text="Fazer encomenda" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}