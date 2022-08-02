import React from "react";
import './styles/header.css'
import log from './Assets/logo-desktop.svg'


    
export default function OnHead(props){

   let {darkButon,setdarkButon }= props

   const handleDark = () =>{  

    setdarkButon(!darkButon);
   

};



    return(
        
        <div className={darkButon===true? 'head': 'dark'}>
            <img src={log} alt="logo"></img>
            <button className="button" onClick={handleDark} >{darkButon=== true? 'DARK MODE': 'LIGHT MODE '}</button>
            {/* {console.log(darkButon)} */}

        </div>
    );



}