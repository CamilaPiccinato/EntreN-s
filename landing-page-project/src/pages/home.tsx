import "../styles/utility.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sobre from "../components/Sobre";
import Produtos from "../components/Produtos";
import Clientes from "../components/Clientes";
import Contato from "../components/Contato";
import FotoProduto1 from '../assets/clientepedido1.svg'
import FotoProduto2 from '../assets/clientepedido2.svg'
import FotoProduto3 from '../assets/clientepedido3.svg'
import MiniNovelo from '../assets/novelodecoracao.svg'
import Blusa from "../assets/blusa.svg";
import Bolsa from "../assets/bolsa.svg";
import Amigurumi from "../assets/amigurumi.svg";
import Brilhinho from "../assets/brilhinho.svg";
import Footer from "../components/Footer";
import "../styles/footer.css";

export default function Home() {
    return (
        <main>
            <Header />
            <Hero />
            <Sobre />
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
            
            <Footer />
            
        </main>
    );
}