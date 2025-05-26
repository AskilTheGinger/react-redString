import React from 'react';
import ReactDOM from 'react-dom/client';



const root = ReactDOM.createRoot(document.getElementById('root'));

function Tekst() {
  const knapp = function () {
    const rootElement = document.getElementById('root');
    let a= document.createElement("h1")
    a.innerHTML="knappen knappet"
    rootElement.appendChild(a)
  }
  return (
    <div> <button id='knapp' onClick={knapp}> trykk ikke meg</button> </div>
  );

}
root.render(<Tekst />);


