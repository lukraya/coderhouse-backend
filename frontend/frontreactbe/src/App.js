import {useEffect, useState} from 'react'
import './App.css';

function App() {
  const [resultFetch, setResultFetch] = useState({})

  useEffect(()=>{
    requestFetch()
  }, [])

  const requestFetch = async ()=>{
    const response = await fetch("http://localhost:9000/api/coder")
    const result = await response.json()
    console.log(result)
    setResultFetch(result)
  }  

  return (
    <div className="App">
      <p>{resultFetch.firstName}</p>
      <p>{resultFetch.lastName}</p>
    </div>
  );
}

export default App;
