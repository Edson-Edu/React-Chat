interface Props{
  setMensagem: any;
  mensagens: any
}
export default function (props: Props) {
  const {setMensagem, mensagens} = props
  function onClick(){
    const novaListaDeMensagens = [
      ...mensagens,
      {self: false, date: "04:23 2020/12/12", user: "Yasmin", text: "tchau leeh"}
    ]
    setMensagem(novaListaDeMensagens)
  }

    return <>
     <textarea placeholder="Digite sua mensagem"></textarea>
      <button onClick={onClick} type="submit">Enviar</button>
    </> 
  }