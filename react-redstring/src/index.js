import React from 'react';
import ReactDOM from 'react-dom/client';



const root = ReactDOM.createRoot(document.getElementById('root'));

function Tekst() {
  const knapp= () =>{
    root.render(<h1>knappen knappet</h1>)
  }
  return (
    <div> <button id='knapp' onClick={knapp}> trykk meg</button> </div>
  );
    
}
root.render(<Tekst />);


