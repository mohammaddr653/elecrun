import './css/fonts.css';
import './css/header.css';
import axios from 'axios';
import Search from './search';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { click } from '@testing-library/user-event/dist/click';

const Header = () => {
    const[firstClassMenu,setFirstClassMenu]=useState([]);
    const[secondClassMenu,setSecondClassMenu]=useState([]);
    const[thirdClassMenu,setThirdClassMenu]=useState([]);
    const[forthClassMenu,setForthClassMenu]=useState([]);
    const[menuImg,setMenuImg]=useState("../images/5.jpg");





    useEffect(() => {
        async function getFirstClassData(){
            const response = await axios.get("../first-class-menu.json");
            setFirstClassMenu(response.data);
        };
        async function getSecondClassData(){
            const response = await axios.get("../second-class-menu.json");
            setSecondClassMenu(response.data);
        };
        async function getThirdClassData(){
            const response = await axios.get("../third-class-menu.json");
            setThirdClassMenu(response.data);
        };
        async function getForthClassData(){
            const response = await axios.get("../forth-class-menu.json");
            setForthClassMenu(response.data);
        };


        getFirstClassData();
        getSecondClassData();
        getThirdClassData();
        getForthClassData();
    },[]);


    function setScrollOptions(){
        var firstClassMenutainer=document.getElementById("header-container");
        let menuBottom=document.getElementsByClassName("menu-bottom")[0];
        var lastScrollTop = 0;
    
        window.addEventListener("scroll", function(){
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
            if(!(firstClassMenutainer.classList.contains==="header-container-change")){
                firstClassMenutainer.classList.add("header-container-change");
            } 
        } else if (st===0) {
            if(!menuBottom.classList.contains("open")){
                firstClassMenutainer.classList.remove("header-container-change");
            }
            lastScrollTop=st;
        }
        lastScrollTop = st <= 0 ? 0 : st;
        }, false);
    
    }
    
    useEffect(()=>{
        setScrollOptions();
        // toggleMobileMenu();
    },[])

    function checkThirdClass(e){
        console.log(e.target.parentElement);
        // document.querySelector
        let div=e.target.parentElement.querySelector("div.third-class-menu");
        let ul=e.target.parentElement.querySelector("div.third-class-menu>ul");

        if(div){
            //"چهل تا به ازای پدینگ که در استایل داده بودیم کم کردم"
            let divH=div.offsetHeight-40;
            let ulH=ul.offsetHeight;
            console.log("div height : ")
            console.log(divH);
            console.log("ul height : ")
            console.log(ulH);
            // ul.offsetHeight=200
            if(ulH>=divH){
                let divide=Math.trunc(ulH/divH);
                console.log(divide)
                ul.style.columnCount=divide;
                if(ulH>=divH){
                    divide +=1;
                    ul.style.columnCount=divide;
                }

            }
        }
    }

    return ( 
        <header>
            <div id="header-container" className='container-fluid p-0'>
                <div className="container-fluid p-0">
                    <div className="w-100 menu-top m-0 d-flex align-items-center justify-content-between">
                        <div className='menu-right'>
                            <div className='image'>
                                <Link to={"/"}>
                                
                                </Link>
                            </div>
                            <div className='d-none d-md-flex h-100'>
                                <nav className='h-100'>
                                    <ul>
                                        {firstClassMenu ? firstClassMenu.map((item,index)=>{
                                            return(
                                                <li key={index}>
                                                    <Link to={item.href} onMouseEnter={function(e){
                                                        checkThirdClass(e);
                                                    }}>
                                                        {item.title}
                                                    </Link>
                                                    {item.hasChild && secondClassMenu ? 
                                                        <div className='second-class-menu'>
                                                            <div className='second-class-menu-container'>
                                                                <ul>
                                                                    {secondClassMenu.map((secondItem,secondIndex)=>{
                                                                        if(secondItem.mother===item.tag){
                                                                            return(
                                                                                <li key={secondIndex} onMouseEnter={function(e){
                                                                                    checkThirdClass(e);
                                                                                }}>
                                                                                    <Link to={secondItem.href}>
                                                                                        {secondItem.title}
                                                                                    </Link>
                                                                                    {secondItem.hasChild && thirdClassMenu ? 
                                                                                        <div className='third-class-menu'>
                                                                                            <ul>
                                                                                                {thirdClassMenu.map((thirdItem,thirdIndex)=>{
                                                                                                    if(thirdItem.mother===secondItem.tag){
                                                                                                        return(
                                                                                                            <li key={thirdIndex} onMouseEnter={function(){
                                                                                                                setMenuImg(thirdItem.img);
                                                                                                                console.log(menuImg);
                                                                                                            }}>
                                                                                                                <Link to={thirdItem.href}>
                                                                                                                    {thirdItem.title}
                                                                                                                </Link>
                                                                                                                {thirdItem.hasChild && forthClassMenu ? 
                                                                                                                    <div className='forth-class-menu'>
                                                                                                                        <ul>
                                                                                                                            {forthClassMenu.map((forthItem,forthIndex)=>{
                                                                                                                                if(forthItem.mother===thirdItem.tag){
                                                                                                                                    return(
                                                                                                                                        <li key={forthIndex}>
                                                                                                                                            <Link to={forthItem.href}>
                                                                                                                                                {forthItem.title}
                                                                                                                                            </Link>
                                                                                                                                        </li>
                                                                                                                                    )    
                                                                                                                                }else{return null}
                                                                                                                            })}
                                                                                                                        </ul>
                                                                                                                    </div>
                                                                                                                : null}
                                                                                                            </li>
                                                                                                        )    
                                                                                                    }else{return null}
                                                                                                })}
                                                                                            </ul>
                                                                                            <img src={menuImg} alt="" />
                                                                                        </div>
                                                                                    : null}
                                                                                </li>
                                                                            )    
                                                                        }else{
                                                                            return null
                                                                        }
                                                                    })}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    : null}
                                                </li>
                                            )
                                        }) : null}
                                    </ul>
                                </nav>
                                <button className="search " onClick={function(){
                                    let menuBottom=document.getElementsByClassName("menu-bottom")[0];
                                    menuBottom.classList.toggle("open");
                                    let bgDark=document.getElementsByClassName("menu-bottom-dark-face")[0];
                                    bgDark.classList.add("show");
                                    let firstClassMenutainer=document.getElementById("header-container");
                                    firstClassMenutainer.classList.add("header-container-change");

                                }}>
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
                                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="w-100 menu-bottom bg-dark m-0">
                        <div className='w-50'>
                            <Search tagsNum={0}></Search>
                        </div>
                    </div>
                </div>
                <div className="mobile-menu d-md-none d-flex">
                    <div className='image'>
                        <img src="" alt="" />
                    </div>
                    <hr />
                    <div className='list w-100 mt-3'>
                        <Search tagsNum={1}></Search>
                        <ul className='p-0 m-0 w-100'>
                            {firstClassMenu ? firstClassMenu.map((item,index)=>{
                                return(
                                    <Link key={index} to={item.href}>
                                        <li>{item.title}</li>
                                    </Link>    
                                )
                            }) : "لیستی وجود ندارد"}
                        </ul>
                    </div>
                </div>
                <div className="dark-face" onClick={function(){
                    let mobileMenu=document.getElementsByClassName("mobile-menu")[0];
                    let bgDark=document.getElementsByClassName("dark-face")[0];
                    mobileMenu.classList.remove("open");
                    bgDark.classList.remove("show");
                }}></div>
                <div className="menu-bottom-dark-face" onClick={function(){
                    let firstClassMenutainer=document.getElementById("header-container");
                    let menuBottom=document.getElementsByClassName("menu-bottom")[0];
                    let bgDark=document.getElementsByClassName("menu-bottom-dark-face")[0];
                    menuBottom.classList.remove("open");
                    bgDark.classList.remove("show");
                    var st = window.pageYOffset || document.documentElement.scrollTop;
                    if(st===0){
                        firstClassMenutainer.classList.remove("header-container-change");
                    }
                }}></div>

            </div>
        </header>
    );
}

 
export default Header;