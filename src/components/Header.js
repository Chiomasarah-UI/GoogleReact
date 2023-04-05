import AppIcon from "./AppIcon";
import Avater from "./Avater";
import Menu from "./Menu";

export default function Header(){
    return (
        <div style={{display: "flex", justifyContent:"flex-end", padding:"2rem"}} >
        <Menu title={"Gmail"}/>
        <Menu title={"Mirror"}/>
        <AppIcon/>
        <Avater/>
        </div>
    )
}