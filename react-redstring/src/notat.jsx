function note(props){
    return(
    <div className="notat">
        <h1>{props.overskrift}</h1>
        <p>{props.notat}</p>
        <button onClick={changeNote}>Endre notat</button>
    </div>
    )
}

export default note