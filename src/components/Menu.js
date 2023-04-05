
export default function Menu(props){
    return (
        <div style={{ fontSize: "1rem", cursor: "pointer", color:"black", fontFamily: "Roboto,Arial,sans-serif;", marginRight:"1.5rem"}}>
        {props.title}
        </div>
    )
}