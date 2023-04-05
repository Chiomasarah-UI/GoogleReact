import React from 'react';
import Icon from  '../images/AppLaunch.png';

export default function AppIcon() {
    return(
        <div>
            <img src={Icon} alt="App launcher icon" style={{width:"25px", marginRight:"1rem", fontWeight:"900"}}/>
        </div>
    )
}