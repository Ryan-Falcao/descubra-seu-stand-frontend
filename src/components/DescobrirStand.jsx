import { useState } from "react";
import api from "../api/axios";
import "./DescobrirStand.css";

function DescobrirStand() {
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setErro("");
    setResultado(null);
    setCarregando(true);

    try {
      const res = await api.post("/api/stand/descobrir", {
        nome,
        dataNascimento,
      });
      setResultado(res.data);
    } catch (err) {
      setErro("Erro ao buscar o Stand. O backend está invocado?");
      console.error(err);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="cosmos">
      {/* Onomatopeias JoJo (Ocultas em telas muito pequenas via CSS) */}
      <div className="jojo-ambient left-1" aria-hidden="true">
        ゴ
      </div>
      <div className="jojo-ambient left-2" aria-hidden="true">
        ゴ
      </div>
      <div className="jojo-ambient right-1" aria-hidden="true">
        ゴ
      </div>
      <div className="jojo-ambient right-2" aria-hidden="true">
        ゴ
      </div>

      <div className="stars"></div>

      <div className="main-container">
        {/* Lado Esquerdo: Painel de Invocação */}
        <div className="stand-card form-side">
          <div className="titulo">
            <h1>STAND PROUD</h1>
            <p className="subtitle">✦ Descubra o Destino da sua Alma ✦</p>
          </div>

          <form className="stand-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="nome">Nome do Usuário</label>
              <input
                id="nome"
                type="text"
                placeholder="Ex: Jotaro Kujo..."
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
                autoComplete="off"
              />
            </div>

            <div className="input-group">
              <label htmlFor="dataNascimento">Alinhamento Estelar</label>
              <input
                id="dataNascimento"
                type="date"
                value={dataNascimento}
                onChange={(e) => setDataNascimento(e.target.value)}
                required
              />
            </div>

            <button type="submit" disabled={carregando} className="btn-evoke">
              {carregando ? "MENACING..." : "DESPERTAR STAND ★"}
            </button>
          </form>

          {erro && <div className="erro">{erro}</div>}
        </div>

        {/* Lado Direito: A Carta de Tarot Revelada */}
        {resultado && (
          <div className="tarot-card-wrapper">
            <div className="tarot-card">
              <div className="tarot-inner-border">
                <span className="card-number">
                  Nº {resultado.numeroCarta || "XX"}
                </span>

                <span className="constelacao">★ STAND REVELADO ★</span>

                {resultado.imagem && (
                  <div className="frame-imagem">
                    <img
                      className="imagemStand"
                      src={resultado.imagem}
                      alt={`Stand ${resultado.stand}`}
                    />
                  </div>
                )}

                <div className="tarot-header">
                  <h2>{resultado.stand}</h2>
                  <h3>{resultado.nome}</h3>
                </div>

                <div className="tarot-info-box">
                  <div className="info-item">
                    <strong>ARCANO</strong>
                    <span>{resultado.carta}</span>
                  </div>
                </div>

                <p className="descricao">"{resultado.descricao}"</p>

                <div className="tarot-footer-symbol">★</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DescobrirStand;
