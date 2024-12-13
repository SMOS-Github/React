import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Darkmode from './Darkmode';
export default function TextArea(props) {

    const [def, set] = useState('');

    const words = def.trim().split(/\s+/).length;   //Regex syntex inside the line.
    const characters = def.length;

    function OnClickChange(e) {
        set(e.target.value);
    }

    function ChangeCase(e) {
        set(def.toUpperCase());
    }
    function ChangeLower(e) {
        set(def.toLowerCase());
    }
    return (
        <>
            <Darkmode/>
            <div className="container">
                <h1 id="heading">{props.title}</h1>
                <textarea className="form-control fs-4" id="exampleFormControlTextarea1" placeholder="Enter Text's to change Uppercase" rows="8" value={def} onChange={OnClickChange}> </textarea>
                <button type="button" onClick={ChangeCase} className="btn btn-primary m-1">Upper Case</button>
                <button type="button" onClick={ChangeLower} className="btn btn-primary m-1">Lower Case</button>

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