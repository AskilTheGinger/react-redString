import React from 'react';
import ReactDOM from 'react-dom/client';

import NotatForm from './notatForm';


function MainSite() {
  
  return (
    <main>
      <header className='overskrift'>
        <h1>Redstring</h1>
      </header>
      <div id='hovedElement'>
       <NotatForm /> 
        <div className='notater'></div>
      </div>

    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainSite />);


