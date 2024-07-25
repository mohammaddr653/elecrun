import './css/fonts.css';
import './css/post-carousel.css';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import globalContext from './context/global-context';
import { buildQueries } from '@testing-library/react';
import { useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRef } from 'react';




const PostCarousel = (props) => {
    let globalCon=useContext(globalContext);
    const[contentArray,setContentArray]=useState([]);
    let a;
    const swiper=useSwiper();
    const refNext=useRef(null);
    const refPrev=useRef(null);

    


    useEffect(()=>{
        let next=document.querySelector("div.post-carousel-container div.post-carousel div.swiper-button-next");
        let prev=document.querySelector("div.post-carousel-container div.post-carousel div.swiper-button-prev");

        refNext.current.addEventListener("click",slideNext);
        refPrev.current.addEventListener("click",slidePrev);
        function slideNext(){
            next.click();
        }
        function slidePrev(){
            prev.click();
        }



    },[])

    useEffect(()=>{
        a=[];
        for(let item of globalCon.posts){
            if(item.mother===props.mother){
                a.push(item);
                setContentArray([
                    ...a
                ])
            }
        }        
    },[globalCon.posts])

    function addItemsToCarousel(){
        let items=`
            <div>ss</div>
            <div>ss</div>
            <div>ss</div>
            <div>ss</div>
            <div>ss</div>
            <div>ss</div>
            <div>ss</div>
            <div>ss</div>
            <div>ss</div>
            <div>ss</div>
            <div>ss</div>
            <div>ss</div>
            <div>ss</div>
            <div>ss</div>
            <div>ss</div>
            <div>ss</div>
            <div>ss</div>
        `
        let owlCarousel=document.getElementById("owl-carousel-container");
        owlCarousel.innerHTML=items;
    }
    useEffect(()=>{
        // addItemsToCarousel();
    },[])
    return ( 
        <div className='post-carousel-container container-fluid w-100'>
            <div className='row close w-100 p-0'>
                <h4 role='button'>
                    {props.title}
                </h4>
                <hr />
                {props.seeAllUrl ?
                    <Link to={props.seeAllUrl}>
                        مشاهده همه
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                        </svg>
                    </Link>
                :null}
            </div>
            <div className='row buttons w-100 p-0 m-0'>
                <div className=''>
                    <button>مطالب</button>
                    <button>ویدیو</button>
                    <button>بررسی</button>
                </div>
            </div>

            <div className="post-carousel w-100 m-0">
                <button className='swiper-prev' ref={refPrev}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </button>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    navigation
                    spaceBetween={30}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {contentArray.reverse().slice(0,9).map((item,index)=>{
                        return(
                            <SwiperSlide key={index}>
                                <div className="post-card h-100">
                                    <Link to={item.href}>
                                        <div>
                                            <div className='image'> 
                                                <img src={item.img} alt="#" />
                                            </div>
                                            <div className='caption'>
                                                <div className="title w-100">
                                                    <h4>{item.title}</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='bottom'>
                                            <div className='right'>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
                                                        <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
                                                    </svg>
                                                    {item.commentsNum}
                                                </span>
                                            </div>
                                            <div className='left'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <button className='swiper-next' ref={refNext}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                    </svg>
                </button>

            </div>
        </div>
    );
}
 
export default PostCarousel;