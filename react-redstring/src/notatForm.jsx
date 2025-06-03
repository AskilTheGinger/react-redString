import React from 'react';
import ReactDOM from 'react-dom/client';

function NotatForm(){
    const [inputs, setInputs] =useState({})
    const handleChange = (event) =>{
        const name =event.target.name
        const value= event.target.value
        setInputs(values =>({...values,[name]: value}))

    }
    const handleSubmit = (event) => {
        event.preventDefault()
        
    }

    return(
        <div className='formElement'>
            <h2 className='formoverskrift'>lag notater her:</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Overskrift">
                    <input 
                    type="text"
                    value={overskrift}
                    name="overskrift"
                    onChange={handleChange}
                    className='overskriftInput'
                    />

                </label>
                <label htmlFor="Notat:">
                    <textarea 
                    name="notat" 
                    id="notatForm" 
                    value={notat}
                    onChange={handleChange}
                    />
                </label>
                
            </form>
            </div>
        
    )
}


export default NotatForm