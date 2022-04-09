import './App.css';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import Home from './Components/Pages/Home/Home';
import Projects from './Components/Pages/Projects/Projects';
import Skills from './Components/Pages/Skills/Skills';


function App() {
  return (
    <div className="App">
      <Home />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
