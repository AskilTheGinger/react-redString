import NotatForm from "./notatForm"
function Note(props){
    return(
    <div className="notat">
        <h1>{props.overskrift}</h1>
        <p>{props.notat}</p>
        
    </div>
    )
}

export default Note