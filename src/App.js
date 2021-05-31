import { GiphyFetch } from '@giphy/js-fetch-api'
import {useState} from 'react'
import TextList from './components/TextList'
import Error from './components/Error'

import './App.css';

//Giphy API Call 
/*
Creamos un Form de entrada para aceptar el texto que desea generar desde la API de Giphy.
Luego, usara esa entrada de texto y la enviara como una solicitud de API
*/ 
// aca se usa la biblioteca auxiliar de Giphy para crear el objeto que usara para interectuar con la API de Giphy
const giphy = new GiphyFetch(process.env.REACT_APP_GIPHY_KEY)

function App() {
  const [text, setText] = useState('')//text: almacena la entrada del usuario. Esto es lo que pasara a la API como argumento para generar texto
  const [results, setResults] = useState([])// results: es un array vacio que sera usado para almacenar los resultados de la respuesta de la API
  const [err, setErr] = useState(false)//err: se utilizara para generar condicionalmente un error mas adelante si el usuario intenta enviar uan cadena vacia

  const handleInput = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    if(text.length === 0) {
      
      //set error state to true
      setErr(true)
      return
    }

    console.log(text)

    const apiCall = async () => {
      const res = await giphy.animate(text, {limit: 20})
      
      setResults(res.data)
    }
    
    apiCall()
    //change error state back to false
    setText('')
    setErr(false)

  }
  
  return (
    <div className="App">
      <h1>Animated Text Generator</h1>
      <h3>Type text into the form and hit submit</h3>
      <input className='input-field' value={text} onChange={handleInput} />
      <button className='submit-btn' onClick={handleSubmit}>Submit</button>
      <Error isError={err} text='need length longer than 0 for input'/>
      {results && <TextList gifs={results}  />}
    </div>
  );
}
export default App;
