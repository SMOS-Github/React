import React, { useState } from 'react';


export default function TextArea(props) {

    const [def, set] = useState('');

    const words = def.trim().split(/\s+/).length;
    const characters = def.length;
    const readTime = words / 150;
    const freshing = Math.ceil(readTime);

    let darkMode = false;

    function OnClickChange(e) {
        set(e.target.value);
    }

    function ChangeCase(e) {
        set(def.toUpperCase());
    }
    function DarkMode() {
        darkMode =! darkMode;
        if (!darkMode) {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
        }
        else {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
        }
    }
    return (
        <>


            <div className="container">
                <h1 id="heading">Enter Text's</h1>
                <textarea className="form-control fs-4" id="exampleFormControlTextarea1" placeholder="Enter Text's to change Uppercase" rows="8" value={def} onChange={OnClickChange}> </textarea>
                <button type="button" onClick={ChangeCase} className="btn btn-primary m-2">Change Form</button>
                <button type="button" className="btn btn-dark" onClick={DarkMode }>Dark Mode</button>

                <div>
                    <p><b>No of Words : {words} <br /> and no of Charecters : {characters} <br /> Read Time : {freshing} </b></p>
                    
                </div>
            </div>
        </>
    );
}