import './css/fonts.css';
import './css/search.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
const Search = (props) => {
    let searchResults=[];
    const tagNum=props.tagsNum;
    const [searchData, setSearchData] = useState([]);


    useEffect(() => {
        let checkResults = () => {
            let searchInput = document.querySelectorAll('div.search-container .search-input')[tagNum];
            let results;
            async function getData(){
                const response = await axios.get("https://jsonplaceholder.typicode.com/users",);
                results=response.data;
            }
            getData();
            searchInput.addEventListener("input" , e => {
                var value=e.target.value.toLowerCase();
                inputMatch(value);
            })    
            function inputMatch(x){
                searchResults=[];
                for(let result of results){
                    let match= result.name.toLowerCase().includes(x) && (x !=="") && (x !==" ") && (x !==null);
                    if(match){
                        searchResults.push(result);
                    }
                    
                }
                searchBoxCounter(searchResults.length);
                setSearchData(searchResults);
            };
            
        }    
        searchEnabled();
        checkResults();
    },[]);
    function searchEnabled(){
        let searchInput = document.querySelectorAll('div.search-container input.search-input')[tagNum];
        let searchResultBox = document.querySelectorAll('div.search-container div.search-result-box')[tagNum];
        if(tagNum !== 0){
            searchResultBox.classList.add('search-result-mobile');    
        }
    
        searchInput.addEventListener("focusin",function(){
            if(tagNum !== 0){
                searchResultBox.classList.add('search-result-show');    
            }
        })
        searchInput.addEventListener("focusout",function(){
            if(tagNum !== 0){
                searchResultBox.classList.add('search-result-mobile');    
                searchResultBox.classList.remove('search-result-show');    
            }
        })
    }
    function searchBoxCounter(num){
        let counter=document.querySelectorAll('div.search-container span.search-box-counter')[tagNum];
        let searchInput = document.querySelectorAll('div.search-container input.search-input')[tagNum];
        searchInput=searchInput.value;
        if(searchInput!==null && searchInput!==" " && searchInput!=="" && num===0){
            counter.innerHTML="نتیجه ای یافت نشد"
        }else if(num>0){
            counter.innerHTML=num+" نتیجه یافت شد";
    
        }else{
            counter.innerHTML=" ";
        }
    }    
    return (
        <div className="search-container">
            <div className="search-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
                <input type="text" className='search-input'/>
            </div>
            <div className="search-result-box">
                <div className="search-box-head">
                    <p>نتایج جستجو : <span className='search-box-counter'></span></p>
                </div>
                <div className="search-box-main">
                    {searchData.map((result,index)=>{
                        return(
                            <div className='search-result-container' key={index}>
                                <a href=" ">
                                    <div className="result-right">
                                        {/* <img src="images/wp2465923-javascript-wallpapers.jpg" alt="5" /> */}
                                    </div>
                                    <div className='result-left'>
                                        <h4>{result.name}</h4>
                                    </div>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}

 
export default Search;