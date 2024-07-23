import './css/fonts.css';
import './css/ads.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import globalContext from './context/global-context';

const Ads = (props) => {
    let globalCon=useContext(globalContext);
    console.log(props.adsId)
    return ( 
        <div className='ads-container container-fluid p-0 w-100'>
            <div className="row gap-4">
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
        </div>
    );
}
 
export default Ads;