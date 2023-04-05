import React from 'react';
import Logo from './Logo';
import './Main.css';
import Search from './Search';
import MainButtons from './MainButtons';
import Ramadan from './Ramadan';
import Languages from './Languages';

export default function Main(){
    return (
       <div className='contain'>
            <Logo/>
            <Search/>
            <div className='buttons'>
                <MainButtons title={"Google Search"}/>
                <MainButtons title={"I'm Feeling Lucky"}/>
            </div>
            <Ramadan title={"Make your own Ramadan artwork with Google Arts & Culture"}/>
            <div className='language'>
                <span>Google Offered In:</span>
                <Languages title={"Hausa"}/>
                <Languages title={"Igbo"}/>
                <Languages title={"Ede Yoruba"}/>
                <Languages title={"Nigerian Pigin"}/>
            </div>
        </div>
    )
}