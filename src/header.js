import './style.css';
import arrow from './images/arrow-down.svg'
function Header() {
  return (
    <div className="header">
      <h1>Nikola Pantelić</h1>
      <span>I'm Junior FrontEnd Developer</span>
      <img src={arrow} alt="Scroll down button"/>
    </div>
  );
}

export default Header;
