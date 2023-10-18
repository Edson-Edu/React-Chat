import "./App.css"
export default () => {
  return <>
    <main>
      <div className="Mensagem">
        <div className="usuario">
          Yasmin
        </div>

        <div className="texto">
          Voce chorou com qual ep?
        </div>
      </div>

      {/* dnv */}

      <div className="Minha_Mensagem">
        <div className="usuario">
          Edson
        </div>

        <div className="Meu Texto">
          Chorei com o episodio do tiroteio
        </div>
      </div>


    </main>

    <div className="input-area">
      <input type="text" placeholder="Digite sua Mensagem: " />
      <button type="submit">Enviar</button>
    </div>
  </>
}

