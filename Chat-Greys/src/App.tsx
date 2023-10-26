import "./App.css" ;{/* import para a estilização */}
import Message from "./Message" ; {/* import para a classe Message*/}
import Input from "./Input-area"
export default () => {
  return <>
    <main> 
      <Message self={true} date="04:20 2020/12/12" user="Edson" text="Oii, tudo bem?" /> {/* define um valor para todos os atribudos do componente Message */}
      <Message self={false} date="04:21 2020/12/12" user="Yasmin" text="Oiie" />
      <Message self={false} date="04:22 2020/12/12" user="Yasmin" text="tudo sim e vc??" />
      <Message self={true} date="04:23 2020/12/12" user="Edson" text="não:(" />
    </main>
    <div className="input-area">
      <Input />
      
    </div>
  </>
}