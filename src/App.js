import { useRef, useState } from "react";

function App() {
  const texto = useRef()
  const [lista,setLista] = useState([])
  const alerta = () => {
    if(texto.current.value === ""){
      alert('digita um trem sô')
    }else{
      setLista([...lista,texto.current.value])
      texto.current.value = ""
    }
    texto.current.focus()
  }
  return (
    <div style = {{textAlign:'center'}}>
     <h1>EVENTOS</h1>
     <input ref={texto}/> 
     <button onClick={alerta}>INCREMENTA</button>
     <div>{JSON.stringify(lista)}</div>
    </div>
  );
}

export default App;
