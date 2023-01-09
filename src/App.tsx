import React, { useState } from 'react';
import './App.css';
import ErrorBounderies from './comp/ErrorBounderies';
import Main from './comp/Main';
import { ErrorBoundary } from 'react-error-boundary'
import FuncFallback from './functional/FuncFallback';
function App() {
  const [num, setNum] = useState(parseInt((Math.random() * (20 - 1) + 1).toString()))
  const [num2, setNum2] = useState(parseInt((Math.random() * (20 - 1) + 1).toString()))

  return (
    <div className="App">
      <header className="App-header">
        
        <div className="div" style={{ width: '50%' }}>
          <p>Functional Component</p>
          <ErrorBoundary FallbackComponent={FuncFallback} onReset={() => setNum(parseInt((Math.random() * (20 - 1) + 1).toString()))} >
            <Main setNum={setNum} num={num} />
          </ErrorBoundary>
        </div>

        <div className="div" style={{ width: '50%' }}>
          <p>Class Component</p>
          <ErrorBounderies setNum={setNum2}>
            <Main setNum={setNum2} num={num2} />
          </ErrorBounderies>
        </div>

      </header>
    </div>
  );
}

export default App;
