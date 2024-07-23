import './css/fonts.css';
import './css/banner.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import globalContext from './context/global-context';
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
    let globalCon=useContext(globalContext)
    return ( 
        <div className='banner-container container-fluid p-0 w-100'>
            <div className="single d-none d-md-flex">
                {globalCon.posts.slice(0,3).map((item,index)=>{
                    return(
                        <div key={index}>
                            <Link to={item.href}>
                                <span></span>
                                <img src={item.img} alt="#" />
                                <h4>{item.title}</h4>
                            </Link>
                        </div>
                    )
                })}
            </div>
            <div className="slider d-md-none d-block">
                <div className='container-fluid'>
                    <div className="row p-0">
                        <Carousel className='p-0 slider-container'>
                            {globalCon.posts.slice(0,3).map((item,index)=>{
                                return(
                                    <Carousel.Item key={index} interval={900}>
                                        <a href={item.href}>
                                            <span></span>
                                            <img src={item.img} alt="#" />
                                            <h4>{item.title}</h4>
                                        </a>
                                    </Carousel.Item>
                                )
                            })}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Banner;