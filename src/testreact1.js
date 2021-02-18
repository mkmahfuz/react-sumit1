// console.log(React);
// console.log(ReactDOM);

const domContainer = document.querySelector("#root");


const element1 = React.createElement('div',null,"hello from ReactCreat");

const element2 = (
    <div><p>with JSX</p></div>
);

const myElement = (
    <div>
        <h1 id="display">0</h1>
        <div>
            <button id="button">Increament +</button>
        </div>
    </div>
);

const Increament = () => {
    const [counter,setCounter] = React.useState(0); //what is state -sumit video1- 20:00min a ase
    //console.log(reactState);
    //React.useState() akta initial value nibe, aita  return kore value and akta function
    //setCounter function a je parameter pathabo sheitai counter hishebe set hobe
    return (
    <div>
        <h1 id="display">{counter}</h1>
        <div>
            <button id="button" onClick={()=>setCounter(counter + 1)}>Increamentw +</button>
        </div>
    </div>
    )
}


// ReactDOM.render("Hello world",domContainer);
// ReactDOM.render(element1,domContainer);
// ReactDOM.render(element2,domContainer); //if we use jsx format then change the script src type= "text/babel" korte hobe
// ReactDOM.render(myElement,domContainer); 
// ReactDOM.render(Increament(),domContainer); 

// ReactDOM.render(<Increament/>,domContainer); //with jsx format we can use <Increament/> instead of Increament()
ReactDOM.render(
<div className="container">
<Increament/>
<Increament/>
<Increament/>
</div>,
    domContainer); 
//vanila js
// let number = 0;
// const Increament1 = ()=>{
//     number++;
//     display.textContent = number;
// }

// const display = document.querySelector("#display");
// const button = document.querySelector("#button");

// button.addEventListener("click",Increament1);
//vanila js