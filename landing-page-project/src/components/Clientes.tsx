import { useState } from "react";
import "../styles/Clientes.css";

const depoimentos = [
  { id: 1, nome: "blusa" as const, texto: "Amei minha encomenda! Ficou exatamente como eu queria." },
  { id: 2, nome: "bolsa" as const, texto: "Atendimento super atencioso e trabalho impecável." },
  { id: 3, nome: "amigurumi" as const, texto: "Com certeza vou encomendar mais peças!" },
];

interface ClientesProps {
  blusa: string;
  bolsa: string;
  amigurumi: string;
  brilhinho: string;
}

function Clientes({ blusa, bolsa, amigurumi, brilhinho }: ClientesProps) {
  const [atual, setAtual] = useState(0);

  const imagens: Record<string, string> = { blusa, bolsa, amigurumi };

  const cards = depoimentos.map((d) => ({
    ...d,
    imagem: imagens[d.nome],
  }));

  const anterior = () => setAtual((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  const proximo = () => setAtual((prev) => (prev === cards.length - 1 ? 0 : prev + 1));

  const visiveis = [
    cards[(atual + cards.length - 1) % cards.length],
    cards[atual],
    cards[(atual + 1) % cards.length],
  ];

  return (
    <section id="clientes" className="clientes-section">
      <div className="clientes-header">
        <h2 className="clientes-titulo">
          Peças que já encontraram um novo lar
          <img src={brilhinho} alt="" aria-hidden="true" className="clientes-brilhinho" />
        </h2>
        <p className="clientes-subtitulo">Algumas encomendas que já fizeram parte de histórias especiais.</p>
      </div>

      <div className="clientes-carousel">
        <button className="carousel-btn" onClick={anterior} aria-label="Anterior">‹</button>
        <div className="carousel-track">
          {visiveis.map((card, index) => (
            <div key={card.id + "-" + index} className={`clientes-card ${index === 1 ? "card-ativo" : "card-lateral"}`}>
              <img src={card.imagem} alt={card.nome} className="clientes-img" />
              <p className="clientes-depoimento">{card.texto}</p>
            </div>
          ))}
        </div>
        <button className="carousel-btn" onClick={proximo} aria-label="Próximo">›</button>
      </div>

      <div className="carousel-dots">
        {cards.map((_, i) => (
          <button key={i} className={`dot ${i === atual ? "dot-ativo" : ""}`} onClick={() => setAtual(i)} aria-label={`Ir para card ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}

export default Clientes;