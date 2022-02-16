import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navigation from './Components/Navigation';
import Projects from './Components/Projects';
import Services from './Components/Services';
import Layer from './Additions/Layer';



function App() {
  return (
    <div className="App">
        <Layer />
      <Router>
        <Navigation />
          <Home />
          <Services />
          <Projects />
          <Contact />  
      </Router>
    </div>
  );
}

export default App;
