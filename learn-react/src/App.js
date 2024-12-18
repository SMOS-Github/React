import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';

function App() {

    const [def, set] = useState(false);

    const DarkMode = () => {
        set(!def);
        document.body.style.backgroundColor = !def ? 'black' : 'white';
        document.body.style.color = !def ? 'white' : 'black';
        
    };

    let dark = !def ? "light" : "dark";
    let light = def ? "dark" : "light";
    let textLight = def ? "light" : "dark";

    return (
        <>  
            <Navbar mode={DarkMode} dark={dark} light={light } />
            <TextArea dark={dark} light={textLight} />
            
        </>
    );

}

export default App;
