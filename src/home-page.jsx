import Header from "./header";
import './css/home-page.css';
import Footer from "./footer";
import { useEffect } from "react";
import HomePageMain from "./home-page-main";
import Ads from "./ads";

const HomePage = () => {
    useEffect(() => {
        // window.scrollTo({
        //     top: 0,
        //     left: 0,
        //     behavior: "smooth",
        // });
    },[]);
    return (
        <div id="home-page">
            <Header></Header>
            <HomePageMain></HomePageMain>
            {/* <Footer></Footer> */}
        </div>
    );
}
 
export default HomePage;