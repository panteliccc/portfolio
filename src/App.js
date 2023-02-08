import './style.css';
import Header from './header';
import About from './about';
import Projects from './project';
import Skill from './skills';
import Contact from './contact';
import Footer from './footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Projects/>
      <Skill/>
      <Contact/>
    </div>
  );
}

export default App;
