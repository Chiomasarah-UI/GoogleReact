
export default function Menu(props){
    return (
        <div style={{ fontSize: "1rem", cursor: "pointer", fontFamily: "Roboto,Arial,sans-serif;", marginRight:".5rem"}}>
        {props.title}
        </div>
    )
}