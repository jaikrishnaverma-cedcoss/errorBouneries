import React from 'react'

type MainProps = {
    setNum:(x:number)=>void,
    num:number
  };


const Main = ({setNum,num}:MainProps) => {
    const  getRandomInt=() : number=>{
        let min = Math.ceil(1);
        let max = Math.floor(20);
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }


        if(num<5){
        throw new Error("Less Than 5")
    }
    return (
      <button className='button1' onClick={()=>setNum(getRandomInt())}>Number is :{num}</button>
    )
}


export default Main





