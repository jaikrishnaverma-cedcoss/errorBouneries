import React, { Component } from 'react'
type ErrorProps = {
    setNum:(x:number)=>void,
    children:any
  };
  type ErrorState = {
        hasError:boolean
  };
  export default class ErrorBounderies extends Component<ErrorProps,ErrorState> {
    constructor(props:ErrorProps) {
      super(props);
      this.state = { hasError: false };
    }
    static getDerivedStateFromError(error:any) {
      return { hasError: true };
    }
    getRandomInt() : number{
        let min = Math.ceil(1);
        let max = Math.floor(20);
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }

    componentDidCatch(error:any, errorInfo:any) {
      console.log(error, errorInfo);
    }
    render() {
      if (this.state.hasError) {
        return <><h1>Something went wrong.</h1> <button onClick={()=>{this.props.setNum(this.getRandomInt());this.setState({...this.state,hasError:false})}}>Try Again</button></>;
      }
  
      return this.props.children; 
    }    }
  