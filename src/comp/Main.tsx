import React, { Component } from 'react'
type MainProps = {
    setNum:(x:number)=>void,
    num:number
  };
  type MainState = {
  num?:number
  };
export default class Main extends Component<MainProps, MainState> {
    constructor(props:MainProps) {
      super(props)
    this.state = {

      }
    }
    getRandomInt() : number{
        let min = Math.ceil(1);
        let max = Math.floor(20);
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }

  render() {
    if(this.props.num<5){
        throw new Error("Less Than 5")
    }
    
    return (
      <button className='button1' onClick={()=>this.props.setNum(this.getRandomInt())}>Number is :{this.props.num}</button>
    )
  }
}
