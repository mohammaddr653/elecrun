import './css/fonts.css';
import './css/home-page-main.css';
import Banner from './banner';
import Ads from './ads';
import { useEffect } from 'react';
import ThreeBox from './three-box';
import PostCarousel from './post-carousel';
const HomePageMain = () => {
    useEffect(() => {
        sideBarStick();
    },[]);

    function sideBarStick(){
        let archBody=document.getElementsByClassName("main-page-arch-body")[0];
        let sidebar = document.getElementsByClassName("main-page-arch-side")[0];
        let sidebar_content = document.getElementsByClassName("arch-side-wrapper")[0];
        window.onscroll=()=>{
            let scrollTop = window.scrollY;
            let viewportHeight = window.innerHeight;
            let sidebarTop = sidebar.getBoundingClientRect().top + window.pageYOffset;
            let sidebarHeight=sidebar.getBoundingClientRect().height;
            let contentHeight = sidebar_content.getBoundingClientRect().height;
            // "گفتیم که اگر عرض صفحه بزرگتر از 1170 بود و ارتفاع سایدبار کمتر از بادی بود اجرا  بشه"
            if(window.innerWidth>=1170 && sidebar_content.clientHeight<archBody.clientHeight){
                if(contentHeight+sidebarTop>viewportHeight){
                    if( scrollTop >= contentHeight - viewportHeight + sidebarTop) {
                        sidebar_content.style.transform = `translateY(-${(contentHeight - viewportHeight + sidebarTop)}px)`;
                        sidebar_content.style.position  = "fixed"; 
                        sidebar_content.style.top  = ""; 
                        sidebar_content.style.width=sidebar.clientWidth+"px";

         
                      }
                      else {
                        sidebar_content.style.transform = "";
                        sidebar_content.style.position  = "static"; 
                        sidebar_content.style.top  = ""; 
                        sidebar_content.style.width="";

         
                      }     
                    if(viewportHeight>=sidebarHeight+sidebar.getBoundingClientRect().top){
                        sidebar_content.style.position  = "relative"; 
                        sidebar_content.style.transform = "";
                        sidebar_content.style.top  = sidebarHeight-contentHeight+"px"; 
                        sidebar_content.style.width="";

    
                    }
                }else{
    
                     //   "اون 50 که نوشتم مقدار ارتفاع هدر هست . خودتون تعیین کنید ."     
                    if( scrollTop >= sidebarTop-50) {
                        sidebar_content.style.position  = "fixed"; 
                        sidebar_content.style.top  = "50px"; 
                        sidebar_content.style.width=sidebar.clientWidth+"px";

         
                    }
                      else {
                        sidebar_content.style.transform = "";
                        sidebar_content.style.position  = "static"; 
                        sidebar_content.style.top  = ""; 
                        sidebar_content.style.width="";

         
                      }
    
                    //   "اون 620 فاصله ای  هست که هدر باید طی کنه تا به سایدبار برسه . خودتون تعیین کنید "     
                    if(scrollTop-620>=sidebarHeight-contentHeight){
                        sidebar_content.style.position  = "relative"; 
                        sidebar_content.style.top  = sidebarHeight-contentHeight+"px";
                        sidebar_content.style.width="";
 
    
                    }
                }
    
            }else{
                sidebar_content.style.transform = "";
                sidebar_content.style.position  = "static"; 
                sidebar_content.style.top  = ""; 
                sidebar_content.style.width="";
            }
        }

    }


    return ( 
        <main>
            <div id="home-page-main-container" className='container-fluid bg-light p-0 w-100'>
                <Banner></Banner>
                <div className="container bg-success p-0">
                    <Ads adsId={[1,3]}></Ads>
                </div>
                <div className="container p-0">
                    {/* PostCarousel can have this propses : title , mother , seeAllUrl */}

                    <PostCarousel title={"پیشنهاد سردبیر"} mother={"tech"} seeAllUrl={"https://digikala.com"}></PostCarousel>
                </div>

                <div className="container p-0">
                    {/* PostCarousel can have this propses : title , mother , seeAllUrl */}

                    <PostCarousel title={"پیشنهاد سردبیر"} mother={"news"} seeAllUrl={"https://digikala.com"}></PostCarousel>
                </div>


                {/* start for main archive */}

                <div id="main-page-arch-container" className='container-fluid w-100'>
                    <div className="container">
                        <div className=' main-page-arch w-100 m-0 p-0'>
                            <aside className=" main-page-arch-side">
                                <div className="arch-side-wrapper">
                                    <Ads adsId={[5,6]}></Ads>
                                    {/* ThreeBox can have this propses : title , mother , seeAllUrl */}
                                    <ThreeBox title={"پربازدیدترین مطالب"} mother={"news"}></ThreeBox>
                                    <Ads adsId={[5,4]}></Ads>
                                    <ThreeBox title={"بررسی"} mother={"tech"} seeAllUrl={"https://digikala.com"}></ThreeBox>
                                    <ThreeBox title={"بررسی"} mother={"tech"}></ThreeBox>
                                </div>
                            </aside>
                            <div className=" p-0 main-page-arch-body bg-primary">
                                <Ads adsId={[5,4]}></Ads>
                                <Ads adsId={[5,4]}></Ads>
                                <Ads adsId={[5,4]}></Ads>
                                <Ads adsId={[5,4]}></Ads>
                                <Ads adsId={[5,4]}></Ads>
                                <Ads adsId={[5,4]}></Ads>
                                <Ads adsId={[5,4]}></Ads>
                                <Ads adsId={[5,4]}></Ads>
                                <Ads adsId={[5,4]}></Ads>
                                <Ads adsId={[5,4]}></Ads>
                                <Ads adsId={[5,4]}></Ads>
                                <Ads adsId={[5,4]}></Ads>
                                <Ads adsId={[5,4]}></Ads>
                                <Ads adsId={[5,4]}></Ads>
                                <Ads adsId={[5,4]}></Ads>
                                <Ads adsId={[5,4]}></Ads>
                                <Ads adsId={[5,4]}></Ads>
                                <Ads adsId={[5,4]}></Ads>
                                <Ads adsId={[5,4]}></Ads>

                            </div>
                        </div>
                    </div>
                </div>


                {/* finish for main archive */}

            </div>
        </main>
    );
}
 
export default HomePageMain;