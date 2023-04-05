import React from 'react';
import Profile from  '../images/Profile.jpg';

export default function Avater() {
    return(
        <div>
            <img src={Profile} alt="App launcher icon" style={{height:"50px", width:"50px", borderRadius:"3rem", border:"3px solid",
            padding:"2px",
            marginTop:"-.5rem"
        }}/>
        </div>
    )
}