import LandingContent from "./HomeComponents/LandingContent";
import Navbar from "./HomeComponents/Navbar";
import LazyLoad from '../AllRoutes/HomeComponents/Carousel'
import Footer from "./Footer";
import BasicStatistics from "./HomeComponents/CompanyBusiness";
import Landingpagebelowtop from "./HomeComponents/LandingPageBelowData";


export default function (){


    return (
        <>
        {/* <Navbar/> */}
        <LazyLoad />
        <Landingpagebelowtop/>
        <LandingContent/>
        <BasicStatistics/>
        {/* <Footer/> */}
        </>
    )
}