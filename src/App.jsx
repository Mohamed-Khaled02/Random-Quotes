import { useEffect, useState } from "react"


function App() {

  const [advice, setAdvice] = useState('')
  function fetchUrl() {
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => setAdvice(data.slip))
  }
  useEffect(() => {
    fetchUrl()
  }, [])
  return (
    <div className="app">
     <div className="container-card">
      <h1 className="heading">{advice.advice}</h1>
      <button>
        <span onClick={() => fetchUrl()}>Give me the advice</span>
      </button>
     </div>
    </div>
  )
}

export default App
