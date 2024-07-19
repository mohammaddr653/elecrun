import './css/fonts.css';
import './css/header.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const[headerCon,setHeaderCon]=useState([]);
    useEffect(() => {
        async function getData(){
            const response = await axios.get("../headerMenu.json");
            setHeaderCon(response.data);
        };
        getData();
    },[]);


    function setScrollOptions(){
        var headerContainer=document.getElementById("header-container");
        var lastScrollTop = 0;
    
        window.addEventListener("scroll", function(){
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
            if(!(headerContainer.classList.contains==="header-container-change")){
                headerContainer.classList.add("header-container-change");
            } 
        } else if (st===0) {
            headerContainer.classList.remove("header-container-change");
            lastScrollTop=st;
        }
        lastScrollTop = st <= 0 ? 0 : st;
        }, false);
    
    }

    function toggleMobileMenu(){
    }
    
    useEffect(()=>{
        setScrollOptions();
        // toggleMobileMenu();
    },[])

    return ( 
        <header>
            <div id="header-container" className='container-fluid p-0'>
                <div className="container-fluid d-flex align-items-center justify-content-between">
                    <div className='menu-right'>
                        <div className='image'>
                            <Link to={"/"}>
                            
                            </Link>
                        </div>
                        <div className='d-none d-md-flex'>
                            <nav>
                                <ul>
                                    {headerCon ? headerCon.map((item,index)=>{
                                        return(
                                            <Link key={index} to={item.href}>
                                                <li>{item.title}</li>
                                            </Link>    
                                        )
                                    }) : null}
                                </ul>
                            </nav>
                            <button className="search ">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-search p-0 m-0" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                    </svg>
                                </span>
                                جستجو
                            </button>
                        </div>
                    </div>
                    <div className='menu-left'>
                        <button className='d-md-none d-flex justify-content-center align-item-center' onClick={function(){
                            let mobileMenu=document.getElementsByClassName("mobile-menu")[0];
                            let bgDark=document.getElementsByClassName("dark-face")[0];
                            mobileMenu.classList.add("open");
                            bgDark.classList.add("show");
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#444" className="bi bi-list" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="mobile-menu d-md-none d-flex">
                    s
                </div>
                <div className="dark-face" onClick={function(){
                    let mobileMenu=document.getElementsByClassName("mobile-menu")[0];
                    let bgDark=document.getElementsByClassName("dark-face")[0];
                    mobileMenu.classList.remove("open");
                    bgDark.classList.remove("show");
                }}></div>
            </div>
        </header>
    );
}

 
export default Header;