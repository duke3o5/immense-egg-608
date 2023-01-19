import logo from './logo.svg';
import './App.css';
import Navbar from './AllRoutes/HomeComponents/Navbar'
import SimpleSidebar from './AllRoutes/HomeComponents/SideBar'
import SignUp from './AllRoutes/Sign-up';
import Login from './AllRoutes/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SignUp/>
      <Login/>
    </div>
  );
}

export default App;
