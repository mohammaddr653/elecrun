import './css/fonts.css';
import './css/three-box.css';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import globalContext from './context/global-context';
import { buildQueries } from '@testing-library/react';
import { useState } from 'react';

const ThreeBox = (props) => {
    let globalCon=useContext(globalContext);
    const[contentArray,setContentArray]=useState([]);
    let a;

    useEffect(()=>{
        a=[];
        for(let item of globalCon.posts){
            if(item.mother.includes(props.mother)){
                a.push(item);
                setContentArray([
                    ...a
                ])
            }
        }        
    },[globalCon.posts])
    return ( 
        <div className='three-box-container container-fluid w-100'>
            <div className='row close w-100 p-0'>
                <h4 role='button'>
                    {props.title}
                </h4>
                <hr />
                {props.seeAllUrl ?
                    <Link to={props.seeAllUrl}>
                        مشاهده همه
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                        </svg>
                    </Link>
                :null}
            </div>
            <div className="row three-box w-100 m-0 p-0">
                {contentArray.reverse().slice(0,3).map((item,index)=>{
                    if(index===0){
                        return(
                            <article key={index} className="col-12 box-cart">
                                <Link to={item.href}>
                                    <span>
                                        <h4>{item.title}</h4>
                                    </span>
                                    <div className="image">
                                        <img src={item.img} alt="#"/>
                                    </div>
                                    <div className="bottom">
                                        <span className=''>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                                            </svg> 
                                            {"مطالعه"+" "+item.readingTime}
                                        </span>
                                        {/* <span className='bg-primary'>s</span> */}
                                    </div>
                                </Link>
                            </article>
                        )
                    }else{
                        return(
                            <article key={index} className="col box-cart">
                                <Link to={item.href}>
                                    <span>
                                        <h4>{item.title}</h4>
                                    </span>
                                    <div className="image">
                                        <img src={item.img} alt="#"/>
                                    </div>
                                    <div className="bottom">
                                        <span className=''>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                                            </svg> 
                                            {"مطالعه"+" "+item.readingTime}
                                        </span>
                                        {/* <span className='bg-primary'>s</span> */}
                                    </div>
                                </Link>
                            </article>
                        )
                    }
                })}
            </div>

        </div>
    );
}
 
export default ThreeBox;