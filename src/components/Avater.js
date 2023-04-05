import React from 'react';
import avater from  '../images/AvaterPic.jpg';

export default function Avater() {
    return(
        <div>
            <img src={avater} alt="App launcher icon" style={{
            height:"40px", 
            width:"40px", 
            borderRadius:"3rem", 
            border:".157rem solid",
            padding:"2px",
            borderTopColor:"red",           
            borderBottomColor: "green",
            borderRightColor:"blue",
            borderLeftColor:"yellow",
            marginTop:"-.9rem"
        }}/>
        </div>
    )
}