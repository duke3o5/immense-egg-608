import LandingContent from "./HomeComponents/LandingContent";
import Navbar from "./HomeComponents/Navbar";
import LazyLoad from '../AllRoutes/HomeComponents/Carousel'


export default function (){


    return (
        <>
        <Navbar/>
        <LazyLoad />
        <LandingContent/>
        
        </>
    )
}