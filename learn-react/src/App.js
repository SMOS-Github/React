import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import Darkmode from './components/Darkmode';

function App() {
    return (
        <>  <Navbar/>
            <TextArea />
            <Darkmode/>
        </>
    );

}

export default App;
