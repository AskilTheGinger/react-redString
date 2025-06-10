import React from 'react';
import ReactDOM from 'react-dom/client';

import NotatForm from './notatForm';
import "./styles/style.css"


function MainSite() {
  
  return (
    <main>
      <header className='overskrift'>
        <h1>Redstring</h1>
      </header>
      
       <NotatForm /> 
        


    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainSite />);


