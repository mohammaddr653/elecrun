import './css/fonts.css';
import './css/home-page-main.css';
import Banner from './banner';
import Ads from './ads';
const HomePageMain = () => {
    return ( 
        <main>
            <div id="home-page-main-container" className='container-fluid p-0 w-100'>
                <Banner></Banner>
                <Ads adsId={[1,3]}></Ads>
            </div>
        </main>
    );
}
 
export default HomePageMain;