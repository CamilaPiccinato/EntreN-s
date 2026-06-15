
import "../styles/Produtos.css";

function Produtos({ foto1, foto2, foto3, novelo }) {
  const whatsappLink = 'https://wa.me/5545999373056?text=Olá! Gostaria de fazer uma encomenda.';

  const produtos = [
    { id: 1, nome: 'Snoopy Amigurumi', imagem: foto2 },
    { id: 2, nome: 'Bolsa Squares', imagem: foto3 },
    { id: 3, nome: 'Blusa Tomara-Que-Caia', imagem: foto1 },
  ];

  return (
    <section className="produtos-section">
      <h2 className="produtos-titulo">Principais produtos</h2>
      <p className="produtos-subtitulo">Os favoritos das clientes!</p>

      <div className="produtos-grid">
        {produtos.map((produto) => (
          <div key={produto.id} className="produto-card">
            <img
              src={produto.imagem}
              alt={produto.nome}
              className="produto-img"
            />
            <p className="produto-nome">{produto.nome}</p>
          </div>
        ))}
      </div>

      <div className="produtos-cta">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-encomendar"
        >
          Quero encomendar! 
          <img src={novelo} alt="" aria-hidden="true" className="btn-novelo" />
        </a>
      </div>
    </section>
  );
}

export default Produtos;
