import LandingContent from "./HomeComponents/LandingContent";
import Navbar from "./HomeComponents/Navbar";
import LazyLoad from '../AllRoutes/HomeComponents/Carousel'
import Footer from "./Footer";


export default function (){


    return (
        <>
        {/* <Navbar/> */}
        <LazyLoad />
        <LandingContent/>
        {/* <Footer/> */}
        </>
    )
}