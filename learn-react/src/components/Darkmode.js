import React, { useState } from 'react';

export default function Darkmode(props) {

    const [def, set] = useState(false);
    const Darkmode = () => {
        set(!def);
        document.body.style.backgroundColor = !def ? 'black' : 'white';
        document.body.color = !def ? 'white' : 'black';
    }
    return (
        <>
            <div className="form-check form-switch">
               
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={Darkmode } />
                <label className="form-check-label mx-2" htmlFor="flexSwitchCheckDefault" onChange={Darkmode}>{Darkmode ? 'Dark' : 'Light'}</label>
            </div>
        </>
    );
}

