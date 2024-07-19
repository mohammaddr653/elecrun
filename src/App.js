import HomePage from "./home-page";
import React from "react";
import { useEffect } from 'react';
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";





const App = () => {
    return ( 
        <Routes>
            <Route path="/" element={<HomePage/>}/>
        </Routes>
     );
}   
 
export default App;