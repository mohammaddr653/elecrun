import './css/fonts.css';
import './css/ads.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import globalContext from './context/global-context';

const Ads = (props) => {
    let globalCon=useContext(globalContext);
    return ( 
        <div className='ads-container open container-fluid px-0 w-100'>
            <div className='row close w-100  m-0 mb-1 p-0'>
                <h4 role='button' onClick={function(e){
                    e.currentTarget.parentElement.parentElement.classList.remove("open");
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                    تبلیغات
                </h4>
                <hr />
            </div>
            <div className="row d-none d-md-flex m-0 p-0">
                {globalCon.ads.map((item,index)=>{
                    if(props.adsId.includes(parseInt(item.id))){
                        return(
                            <div key={index} className='col p-0'>
                                <a href={item.href}>
                                    <img src={item.img} alt="#" />
                                </a>
                            </div>
                        )
                    }
                })}
            </div>
            <div className="row d-flex d-md-none m-0 p-0 gap-4">
                {globalCon.ads.map((item,index)=>{
                    if(props.adsId[0]===parseInt(item.id)){
                        return(
                            <div key={index} className='col p-0'>
                                <a href={item.href}>
                                    <img src={item.img} alt="#" />
                                </a>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    );
}
 
export default Ads;