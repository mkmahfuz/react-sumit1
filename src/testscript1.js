console.log("hello")

//import React from  'react';
//import ReactDOM from 'react-dom';
//console.log(ReactDom)
let number = 0;

const Increament = ()=>{
    number++;
    display.textContent = number;
}

const display = document.querySelector("#display");
const button = document.querySelector("#button");

button.addEventListener("click",Increament);

