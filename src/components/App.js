
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const suggestions = ["Mumbai", "Delhi", "Haryana", "Ayodhya"]
  const[text, setText] = useState("")
  const[xyz, setXyz] = useState([])
  
  useEffect(() => {
    if(text == "") return
    const res = suggestions.filter((item) => {
      return item.toLowerCase().includes(text.toLowerCase())
    })

    setXyz(res)
  }, [text])

  return (
    <div>
      <input value={text} onChange={(e) => {
        setText(e.target.value)
      }}/>

      <ul>
        {xyz.map((item)=> {
          return <li onClick={() => {
            setText(item)
          }}>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default App
