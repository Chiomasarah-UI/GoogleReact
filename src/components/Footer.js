import FootContent from "./FootContent";
import './Footer.css';
import leave from '../images/download.png';

export default function Footer(){
    return (
        <>
            <div className="first">
                <FootContent title={"Nigeria"}/>
            </div>
            <div className="second">
                <div className="add">
                    <FootContent title={"About"}/>
                    <FootContent title={"Advertising"}/>
                    <FootContent title={"Business"}/>
                    <FootContent title={"How Search Works"}/>
                </div>
                <div className="leaf">
                    <img src={leave} alt='App launcher icon' style={{width:".8rem", height:".8rem", marginTop:".2rem", marginRight:".3rem"}}/><FootContent title={"Carbon Neutral Scince 2007"}/>
                </div>
                <div className="set">
                    <FootContent title={"Privacy"}/>
                    <FootContent title={"Term"}/>
                    <FootContent title={"Settings"}/>
                </div>
            </div>
        </>
    )
}
