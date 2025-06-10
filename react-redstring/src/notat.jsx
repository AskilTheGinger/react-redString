import NotatForm from "./notatForm"
import "./styles/style.css"


function Note(props){
    function formatNewlines(text) {
    // Replace newlines with <br /> for HTML rendering
    return text.split('\n').map((line, idx) => (
        <span key={idx}>
            {line}
            {idx !== text.split('\n').length - 1 && <br />}
        </span>
    ));
}
    return(
    <div className="notat">
        <h1>{props.overskrift}</h1>
        <p>{formatNewlines(props.notat)}</p>
        
    </div>
    )
}

export default Note