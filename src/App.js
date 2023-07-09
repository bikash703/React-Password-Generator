import './App.css';

import React, { useState } from 'react'
import usePasswordGenerator from './usePasswordGenerator';
import StrengthChecker from './StrengthChecker';

const App = () => {

  const [length, setLength] = useState(4)
  const [checkBoxData, setCheckBoxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ])
  const [copied, setCopied] = useState(false)

  const handleCheckbox = (i) => {
    const updateCheckbox = [...checkBoxData]
    updateCheckbox[i].state = !updateCheckbox[i].state
    setCheckBoxData(updateCheckbox)
  }

  const { password, error, generatePass } = usePasswordGenerator()

  const handleCopy = () => {
    navigator.clipboard.writeText(password)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 1000);
  }

  return (
    <div className='container'>
      {/* password text and button */}
      {
        password && (
          <div className="header">
            <p className='password'>{password}</p>
            <button className='copy' onClick={() => handleCopy()}>{copied ? "Copied" : "Copy"}</button>
          </div>
        )
      }
      {/* password length */}
      <div className='length'>
        <div className="character">
          <span>Character Length:</span>
          <span className='character-length'>{length}</span>
        </div>
        <input type="range" min={'4'} max={'20'} value={length} onChange={(e) => setLength(e.target.value)} />
      </div>
      <div className="checkBoxes">
        {
          checkBoxData.map((checkbox, i) => (
            <div className="box" key={i}>
              <input type="checkbox" onChange={() => handleCheckbox(i)} checked={checkbox.state} />
              <label >{checkbox.title}</label>
            </div>
          ))
        }
      </div>
      <div className="generatePassword">
        <StrengthChecker password={password} />
        {
          error && <div className="err">{error}</div>
        }
        <button type="submit" onClick={() => generatePass(checkBoxData, length)}>Generate Password</button>
      </div>
    </div>
  )
}
export default App
