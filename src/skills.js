import './style.css';
import html from './images/html.svg'
import css from './images/css.svg'
import js from './images/js.svg'
import mongodb from './images/mongodb.svg'
import node from './images/node.svg'
import react from './images/react.svg'
function Skill() {
  return (
    <div className="skill">

        <div className="card o">
            <img src={html} alt='logo'/>
        </div>
        
        <div className="card ">
            <img src={react} alt='logo'/>
        </div>
        
        <div className="card ">
            <img src={css} alt='logo'/>
        </div>
        
        <div className="card o">
            <img src={js} alt='logo'/>
        </div>
        <div className="card o">
            <img src={node} alt='logo'/>
        </div>
        <div className="card">
            <img src={mongodb} alt='logo'/>
        </div>
    </div>
  );
}

export default Skill;
