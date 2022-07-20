import './App.css';
import { Top } from './Header/Top';
import { Divider } from '@chakra-ui/react';
import { Logo } from './Header/Logo';
import { Navbar } from './Header/Navbar';
// import { Login } from './LoginPage/Login';


function App() {
  return (
    <div className="App">
      <Top/>     
      <Divider />    
      <Logo/>
      <Navbar/>
      {/* <Login/> */}
    </div>
  );
}

export default App;
