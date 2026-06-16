import AnaCecilia from "../assets/anacecilia.svg";
import Gatinhosobre from "../assets/gatinhosobre.svg";
import "../styles/sobre.css";
import "../styles/sobre.css";

export default function Sobre() {
    return (
        <section id="sobre">
            <div className="sobre-content">
                <img src={AnaCecilia} alt="Foto da Ana Cecília com moldura dourada oval" className="sobre-foto" />
                <div className="sobre-texto">
                    <h2>Oi, eu sou a</h2>
                    <h2>Ana Cecilia!</h2>
                    <p>
                        Cada peça que sai daqui foi feita por mim, com paciência,
                        criatividade e muito amor pelo crochê.
                    </p>
                    <p>
                        Acredito que o artesanal tem algo especial: cada ponto é único
                        e carrega um pouco da pessoa que o criou. Espero que minhas
                        peças levem essa sensação para você também.
                    </p>
                </div>
            </div>

            <div className="como-funciona">
                <div className="como-header">
                    <h2 className="como-titulo">Como funciona?</h2>
                    <img src={Gatinhosobre} alt="gatinho com novelo" className="como-cat" />
                </div>

                <div className="como-cards">
                    <div className="como-card">
                        <h3>Encomenda</h3>
                        <p>Você escolhe modelo, cor e tamanho.</p>
                    </div>
                    <div className="como-card">
                        <h3>Produção</h3>
                        <p>Começo a crochetar sua peça com carinho.</p>
                    </div>
                    <div className="como-card">
                        <h3>Aprovação</h3>
                        <p>Envio fotos para você conferir.</p>
                    </div>
                    <div className="como-card">
                        <h3>Entrega</h3>
                        <p>Envio com todo cuidado.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}