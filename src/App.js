
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import  NavBar  from './components/NavBar';
import Portfolio from './components/Portfolio';
import SocailLinks from './components/SocailLinks';

function App() {
  return (
   <div>
    <NavBar />
    <Home />
    <About/>
    <Portfolio/>
    <Experience/>
    <Contact/>
    
    <SocailLinks/>
   </div>
  );
}

export default App;
