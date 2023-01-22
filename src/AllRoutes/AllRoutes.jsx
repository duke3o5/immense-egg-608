import {Routes, Route} from 'react-router-dom';
import LandingContent from './HomeComponents/LandingContent';
import PostAdd from './HomeComponents/PostAdd';
import Home from './Home';
import SignUp from './Sign-up';
import Login from './Login';
import Viewproduct from '../AllRoutes/ProductPage';



export default function AllRoutes(){
    return(
        <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/PostAdd' element={<PostAdd/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Sign-up' element={<SignUp/>}/>
            <Route path='/LandingContent' element={<LandingContent/>}/>
            <Route path='/ProductPage' element={<Viewproduct/>} />
        </Routes>
        </>
    )
}