import React, { useState } from 'react';
import PropTypes from 'prop-types';
export default function TextArea(props) {

    const [def, set] = useState('');
    const [deff, setDef] = useState();

    const words = def.trim() === "" ? 0 : def.trim().split(/\s+/).length;   //Regex syntex inside the line.
    const characters = def.length;
    function OnClickChange(e) {
        set(e.target.value);
    }
    function ClearText() {
        setDef("");
    }
    function ChangeCase(e) {
        set(def.toUpperCase());
    }
    function ChangeLower(e) {
        set(def.toLowerCase());
    }

    return (
        <>
           
            <div className="container my-4">
                <h1 id="heading">{props.title}</h1>
                <textarea className={`form-control fs-4 bg-${props.dark} text-${props.light}`} id="exampleFormControlTextarea1" placeholder="Enter Text's to change Uppercase" rows="8" value={deff} onChange={OnClickChange}></textarea>
                <button type="button" onClick={ChangeCase} className="btn btn-primary my-2">Upper Case</button>
                <button type="button" onClick={ChangeLower} className="btn btn-primary my-2 mx-2">Lower Case</button>
                <button type="button" onClick={ClearText} className="btn btn-primary my-2">Clear Text</button>
               

                <div>
                    <p><b>No of Words : {words} <br /> and no of Charecters : {characters} <br /> Read Time : {0.008 * characters} </b>
                    </p>
                </div>
            </div>
        </>
    );
}

TextArea.propTypes = {
    title: PropTypes.string.isRequired,
}
TextArea.defaultProps = {
    title: "Enter Text's",
}