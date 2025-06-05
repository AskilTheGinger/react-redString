import React, { useState } from 'react';
import Note from './notat';

function NotatForm() {
  const [inputs, setInputs] = useState({});
  const [notes, setNotes] = useState([]); // state to store notes

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Add the current input as a new note
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        overskrift: inputs.overskrift || "",
        notat: inputs.notat || ""
      }
    ]);

    // Optionally reset form
    setInputs({});
  };

  return (
    <div className='formElement'>
      <h2 className='formoverskrift'>Lag notater her:</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={inputs.overskrift || ""}
            name="overskrift"
            onChange={handleChange}
            className='overskriftInput'
            placeholder="Overskrift"
          />
        </label>
        <label>
          <textarea
            name="notat"
            id="notatForm"
            value={inputs.notat || ""}
            onChange={handleChange}
            placeholder="Skriv notatet her..."
          />
        </label>
        <input type="submit" value="Lagre" />
      </form>

      {/* Renders all notes */}
      <div className="notater">
        {notes.map((note, index) => (
          <Note key={index} overskrift={note.overskrift} notat={note.notat} />
        ))}
      </div>
    </div>
  );
}

export default NotatForm;






