import "./App.css"; {/* import para a estilização */ }
import Message from "./Message"; {/* import para a classe Message*/ }
import Input from "./Input-area"
import { useState, useRef  } from "react";
export default () => {
  const [mensagens, setMensagem] = useState([
    { self: true, date: "04:20 2020/12/12", user: "Edson", text: "Oiie" },
    { self: false, date: "04:21 2020/12/12", user: "Yasmin", text: "Oi" },
    { self: true, date: "04:22 2020/12/12", user: "Edson", text: "Tchau" },
    { self: false, date: "04:23 2020/12/12", user: "Leticia", text: "Oiie" },
  ])
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const scroll1 = () => {
    if(messagesEndRef.current)
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return <>
    <main>
      {mensagens.map(({ self, date, user, text }, index) =>
        <Message self={self} date={date} user={user} text={text} key={index} />)
      }
      <div ref={messagesEndRef} />
    </main>
    <div className="input-area">
      <Input setMensagem={setMensagem} mensagens={mensagens} scroll1={scroll1}/>

    </div>
  </>
}