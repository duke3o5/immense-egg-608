import logo from './logo.svg';
import './App.css';
import Navbar from './AllRoutes/HomeComponents/Navbar'
import SimpleSidebar from './AllRoutes/HomeComponents/SideBar'
import SignUp from './AllRoutes/Sign-up';
import Login from './AllRoutes/Login';
import PostAdd from './AllRoutes/HomeComponents/PostAdd';
import AllRoutes from './AllRoutes/AllRoutes';
import Home from './AllRoutes/Home';
import Footer from './AllRoutes/Footer';


function App() {
  return (
    <div className="App">
     <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
