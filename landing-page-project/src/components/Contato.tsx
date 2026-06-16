import { useState } from "react";
import toast from "react-hot-toast";
import "../styles/Contato.css";

function Contato() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [enviando, setEnviando] = useState(false);

  async function handleSubmit() {
    if (!email.trim() || !message.trim()) {
      toast.error("Preencha todos os campos antes de enviar.");
      return;
    }

    setEnviando(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error ?? "Erro ao enviar mensagem.");
      }

      toast.success("Mensagem enviada! Logo te respondo 💕");
      setEmail("");
      setMessage("");
    } catch {
      toast.error("Algo deu errado. Tente novamente!");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <section id="contact" className="contato-section">
      <div className="contato-inner">
        <p className="contato-eyebrow">Envie sua dúvida</p>
        <h2 className="contato-titulo">Entre em contato</h2>
        <p className="contato-descricao">
          Tem alguma dúvida sobre encomendas, prazos ou modelos?
          Me manda uma mensagem — respondo com carinho! 🧶
        </p>
        <div className="contato-form">
          <input
            className="contato-input"
            type="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className="contato-textarea"
            placeholder="Motivo do contato. Ex: Gostaria de encomendar um amigurumi personalizado!"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
          />
          <button
            className="contato-btn"
            onClick={handleSubmit}
            disabled={enviando}
          >
            {enviando ? "Enviando..." : "Enviar"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contato;