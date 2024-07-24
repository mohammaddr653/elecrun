import './css/fonts.css';
import './css/home-page-main.css';
import Banner from './banner';
import Ads from './ads';
import { useEffect } from 'react';
const HomePageMain = () => {
    useEffect(() => {
        sideBarStick();
    },[]);

    function sideBarStick(){
        let sidebar = document.getElementsByClassName("main-page-arch-side")[0];
        let sidebar_content = document.getElementsByClassName("arch-side-wrapper")[0];
        window.onscroll=()=>{
            let scrollTop = window.scrollY;
            let viewportHeight = window.innerHeight;
            let sidebarTop = sidebar.getBoundingClientRect().top + window.pageYOffset;
            let sidebarHeight=sidebar.getBoundingClientRect().height;
            let contentHeight = sidebar_content.getBoundingClientRect().height;
            if(window.innerWidth>=1170){
                if(contentHeight+sidebarTop>viewportHeight){
                    if( scrollTop >= contentHeight - viewportHeight + sidebarTop) {
                        sidebar_content.style.transform = `translateY(-${(contentHeight - viewportHeight + sidebarTop)}px)`;
                        sidebar_content.style.position  = "fixed"; 
                        sidebar_content.style.top  = ""; 
         
                      }
                      else {
                        sidebar_content.style.transform = "";
                        sidebar_content.style.position  = "static"; 
                        sidebar_content.style.top  = ""; 
         
                      }     
                    if(viewportHeight>=sidebarHeight+sidebar.getBoundingClientRect().top){
                        sidebar_content.style.position  = "relative"; 
                        sidebar_content.style.transform = "";
                        sidebar_content.style.top  = sidebarHeight-contentHeight+"px"; 
    
                    }
                }else{
    
                     //   "اون 100 که نوشتم مقدار ارتفاع هدر هست . خودتون تعیین کنید ."     
                    if( scrollTop >= sidebarTop-100) {
                        sidebar_content.style.position  = "fixed"; 
                        sidebar_content.style.top  = "100px"; 
         
                    }
                      else {
                        sidebar_content.style.transform = "";
                        sidebar_content.style.position  = "static"; 
                        sidebar_content.style.top  = ""; 
         
                      }
    
                    //   "اون 64 فاصله ای  هست که هدر باید طی کنه تا به سایدبار برسه . خودتون تعیین کنید "     
                    if(scrollTop-64>=sidebarHeight-contentHeight){
                        sidebar_content.style.position  = "relative"; 
                        sidebar_content.style.top  = sidebarHeight-contentHeight+"px"; 
    
                    }
                }
    
            }
        }

    }


    return ( 
        <main>
            <div id="home-page-main-container" className='container-fluid p-0 w-100'>
                <Banner></Banner>
                <div className="container bg-success p-0">
                    <Ads adsId={[1,3]}></Ads>
                </div>

                {/* start for main archive */}

                <div id="main-page-arch-container" className='container-fluid w-100'>
                    <div className="container">
                        <div className='main-page-arch w-100 m-0 p-0'>
                            <aside className=" main-page-arch-side">
                                <div className={"arch-side-wrapper"}>
                                    <div className="bg-dark h-100 p-5">
                                        side
                                    </div>
                                </div>
                            </aside>
                            <div className=" p-0 main-page-arch-body">
                                <div className="bg-primary h-100 p-5">
                                    body
                                </div>
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