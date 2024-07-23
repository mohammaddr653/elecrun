import HomePage from "./home-page";
import React from "react";
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import globalContext from "./context/global-context";





const App = () => {
    const[posts,setPosts]=useState([]);
    const[ads,setAds]=useState([]);


    useEffect(()=>{
        async function getData(){
          const response = await axios.get("../posts.json");
          console.log("this is your posts : ")
          console.log(response.data);
          setPosts(response.data);
        }
        getData();
    
      },[])

      useEffect(()=>{
        async function getData(){
          const response = await axios.get("../ads.json");
          console.log("this is your ads : ")
          console.log(response.data);
          setAds(response.data);
        }
        getData();
    
      },[])

    
    return ( 
        <globalContext.Provider value={{posts,setPosts,ads,setAds}}>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </globalContext.Provider>
     );
}   
 
export default App;