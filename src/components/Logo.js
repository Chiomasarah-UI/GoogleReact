import logo from  '../images/google.png';

export default function Logo(){
    return (
        <div style={{width:"100%"}}>
            <img src={logo} alt="google logo" style={{margin:"auto", display:"flex"}} />
        </div>
    )
}