import React, { useEffect, useRef } from 'react'
import { QUOTES } from './quotes'
import './random.css'
import { useState } from 'react'
const Game = () => {
 const[quotes,setQuotes]=useState('')
 let textRef=useRef();

 let color1 = Math.floor(Math.random() * 256);
let color2 = Math.floor(Math.random() * 256);
let color3 = Math.floor(Math.random() * 256);

const colors = `rgb(${color1}, ${color2}, ${color3})`;

    const generateQuotes=()=>{
     fetch('https://type.fit/api/quotes')
   .then((response)=>response.json())
   //console.log(response)
   .then((data)=>{
   
    let randomNum=Math.floor(Math.random()*data.length)
    setQuotes(data[randomNum])
     console.log(quotes)
   })
  }
 useEffect(()=>{
  generateQuotes()
 },[])

 useEffect(()=>{
  textRef.current.style.color=colors
 },[quotes])

  return (
    <div className='container'>
    <h1>Quotes Generator</h1>
    <div>
        <div  className='quotes'>
        <div>
     <p ref={textRef}>{quotes.text}</p>
        </div>
       <div className='author'>
       {quotes.author} 
       </div>
       
        </div>
        <div>
        
        </div>
        </div>  
        <button onClick={generateQuotes}>generate</button>
    </div>

  )
}

export default Game
