import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Services from './Components/Services';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Layer from './Layer';
import Cursor from './Cursor';
import Preloader from './Preloader/Preloader';





function App() {
  return (
    <div className="App">
        
      
      <Router>
        <Cursor />
        <Preloader />
        
        <Navigation />
          <Home />
          <Skills />
          <Services />
          <Projects />
          <Contact />  
      </Router>
    </div>
  );
}

export default App;
