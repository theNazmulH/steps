import React, { useState } from 'react';

const message = [
  'Hello',
  'What is your name?',
  'How are you?',
]

const App = () => {

  const [step, setStep] = useState(1);


  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  }

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  }

  return (
    <div className='steps'>
      <div className="numbers">
        <div className={`${step >= 1 ? 'number active' : "number"}`}>1</div>
        <div className={`${step >= 2 ? 'number active' : "number"}`}>2</div>
        <div className={`${step >= 3 ? 'number active' : "number"}`}>3</div>
      </div>
      <p className="message">
        Step {step} - {message[step - 1]}
      </p>
      <div className="buttons">
        <button className="button" onClick={handlePrev}>Prev</button>
        <button className="button" onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default App