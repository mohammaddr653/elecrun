import Header from "./header";
import './css/home-page.css';
import Footer from "./footer";
import { useEffect } from "react";

const HomePage = () => {
    useEffect(() => {
        window.scrollTo({
            
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    },[]);
    return (
        <div id="home-page">
            <Header></Header>
            {/* <Footer></Footer> */}
        </div>
    );
}
 
export default HomePage;