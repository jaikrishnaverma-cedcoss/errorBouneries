import React, { useState } from 'react';
import './App.css';
import ErrorBounderies from './comp/ErrorBounderies';
import Main from './comp/Main';
function App() {
  const [num, setNum] = useState(parseInt((Math.random() * (20 - 1) + 1).toString()))
  const [num2, setNum2] = useState(parseInt((Math.random() * (20 - 1) + 1).toString()))
  console.log(num)
  return (
    <div className="App">
      <header className="App-header">
        <div className="div" style={{ width: '50%' }}>
          <p>Functional Component</p>
          <ErrorBounderies setNum={setNum2}>
            <Main setNum={setNum2} num={num2} />
          </ErrorBounderies>
        </div>
        <div className="div" style={{ width: '50%' }}>
        <p>Class Component</p>
        <ErrorBounderies setNum={setNum}>
            <Main setNum={setNum} num={num} />
          </ErrorBounderies>
        </div>

      </header>
    </div>
  );
}

export default App;
