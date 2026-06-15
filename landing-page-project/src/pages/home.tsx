import "../styles/utility.css";
import Logo from "../assets/Logotipo.png"
import Close from "../assets/close.svg"
import Menu from "../assets/menu.svg"
import AnaCecilia from "../assets/anacecilia.svg"
import Gatinhosobre from "../assets/gatinhosobre.svg"
import NoveloLa from "../assets/novelodelã.svg";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import "../styles/header.css";
import "../styles/hero.css";
import "../styles/sobre.css";
import Check from '../assets/check.svg'
import Gatinhotela1 from '../assets/gatinhotela1.svg'
import Produtos from "../components/Produtos.jsx";
import "../styles/produtos.css";
import FotoProduto1 from '../assets/clientepedido1.svg'
import FotoProduto2 from '../assets/clientepedido2.svg'
import FotoProduto3 from '../assets/clientepedido3.svg'
import MiniNovelo from '../assets/novelodecoracao.svg'
import Clientes from "../components/Clientes.jsx";
import Blusa from "../assets/blusa.svg";
import Bolsa from "../assets/bolsa.svg";
import Amigurumi from "../assets/amigurumi.svg";
import Brilhinho from "../assets/brilhinho.svg";
import Contato from "../components/Contato";


export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const whatsappLink = 'https://wa.me/5545999373056?text=Olá! Gostaria de fazer uma encomenda.';

    async function sendContactEmail() {
  const response = await fetch("/api/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
		    email,
		    message
    }),
  });

  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(body.error ?? "Erro ao enviar mensagem.");
  }
}

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = showMobileMenu ? "hidden" : "auto";
        }
    }, [showMobileMenu]);

    return (
        <main>
            <header className="container py-sm">
                <nav className="flex items-center">
                    <img className="Logo" src={Logo} alt="Logo" />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#solution">Sobre</a>
                            </li>
                            <li>
                                <a href="#testimonials">Produtos</a>
                            </li>
                            <li>
                                <a href="#pricing">Clientes</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>



                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)}
                                                href="#solution">Soluções</a>
                                        </li>
                                        <li>
                                            <a href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a href="#pricing">Preços</a>
                                        </li>
                                        <li>
                                            <a href="#contact">Contato</a>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>
                </nav>
            </header>

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
                            <a href={whatsappLink} target="blank">
                            <Button text="Fazer encomenda"/></a>
                        </div>
                    </div>
                </div>
            </section>


        <section id="sobre">

        <div className="sobre-content">
        <img src={AnaCecilia} alt="Foto da Ana Cecília com moldura dourada oval" className="sobre-foto" />

        <div className ="sobre-texto">
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

<Produtos
  foto1={FotoProduto1}
  foto2={FotoProduto2}
  foto3={FotoProduto3}
  novelo={MiniNovelo}
/>
<Clientes
  blusa={Blusa}
  bolsa={Bolsa}
  amigurumi={Amigurumi}
  brilhinho={Brilhinho}
/>
<Contato />
<input type="text" value={email}
 onChange={ event => setEmail(event.target.value) } />
label

        </main>
    )
}