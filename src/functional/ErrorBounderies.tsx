import React, { useState } from 'react'
type ErrorProps = {
    setNum:(x:number)=>void,
    children:React.ReactNode
  };
  type ErrorState = {
        hasError:boolean
  };

const ErrorBounderies = ({setNum,children}:ErrorProps) => {
  const [state ,setState]=useState<ErrorState>({ hasError: false })

    const getRandomInt=() : number=>{
        let min = Math.ceil(1);
        let max = Math.floor(20);
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }

      if (state.hasError) {
        return <><h1>Something went wrong.</h1> <button onClick={()=>{setNum(getRandomInt());setState({...state,hasError:false})}}>Try Again</button></>;
      }
  
      return children; 
}

export default ErrorBounderies

















