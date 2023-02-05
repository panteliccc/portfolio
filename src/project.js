import './style.css';
import open from './images/open.svg';
import todo from './images/todo.jpg';
import space from './images/space.jpg';
import ecommerce from './images/ecommerce.jpg';
import bookmark from './images/bookmark.jpg';
import easybank from './images/easybank.webp';
import manage from './images/manage.webp';
import github from './images/github.svg';
function Projects() {
  return (
    <div className='projects'>
        <h1 className='project-heading'>My Projects</h1>
        <div className="row">
            
            <div className='card'>
                <img src={todo} alt="Card image" className='banner'/>
                <div className='col'>
                    <h1>Todo Application</h1>
                    <div className='links'>
                        <a href='https://github.com/panteliccc/todo-App'target="_blank"  rel="noreferrer">
                            <img src={github} alt="githun icon" />
                        </a>
                        <a href='https://todo-apppantelicc.vercel.app' target="_blank"  rel="noreferrer">
                            <img src={open} alt="open in new tab" />
                        </a>
                    </div>
                </div>
            </div>

            <div className='card'>
                <img src={space} alt="Card image" className='banner'/>
                <div className='col'>
                    <h1>Space tourism</h1>
                    <div className='links'>
                        <a href='https://github.com/panteliccc/space-tourism-website-main'target="_blank"  rel="noreferrer">
                            <img src={github} alt="githun icon" />
                        </a>
                        <a href='https://panteliccc.github.io/space-tourism-website-main/' target="_blank"  rel="noreferrer">
                            <img src={open} alt="open in new tab" />
                        </a>
                    </div>
                </div>
            </div>

            <div className='card'>
                <img src={ecommerce} alt="Card image" className='banner'/>
                <div className='col'>
                    <h1>E-commerce product</h1>
                    <div className='links'>
                        <a href='https://github.com/panteliccc/ecommerce-product-page-main'target="_blank"  rel="noreferrer">
                            <img src={github} alt="githun icon" />
                        </a>
                        <a href='https://panteliccc.github.io/ecommerce-product-page-main/' target="_blank"  rel="noreferrer">
                            <img src={open} alt="open in new tab" />
                        </a>
                    </div>
                </div>
            </div>

            <div className='card'>
                <img src={bookmark} alt="Card image" className='banner'/>
                <div className='col'>
                    <h1>Bookmark landing page</h1>
                    <div className='links'>
                        <a href='https://github.com/panteliccc/bookmark-landing-page-maste'target="_blank"  rel="noreferrer">
                            <img src={github} alt="githun icon" />
                        </a>
                        <a href='https://panteliccc.github.io/bookmark-landing-page-maste/' target="_blank"  rel="noreferrer">
                            <img src={open} alt="open in new tab" />
                        </a>
                    </div>
                </div>
            </div>

            <div className='card'>
                <img src={easybank} alt="Card image" className='banner'/>
                <div className='col'>
                    <h1>Easybank landing page</h1>
                    <div className='links'>
                        <a href='https://github.com/panteliccc/easybank-landing-page-master'target="_blank"  rel="noreferrer">
                            <img src={github} alt="githun icon" />
                        </a>
                        <a href='https://panteliccc.github.io/easybank-landing-page-master/' target="_blank"  rel="noreferrer">
                            <img src={open} alt="open in new tab" />
                        </a>
                    </div>
                </div>
            </div>

            <div className='card'>
                <img src={manage} alt="Card image" className='banner'/>
                <div className='col'>
                    <h1>Manage landing page</h1>
                    <div className='links'>
                        <a href='https://github.com/panteliccc/manage-landing-page/'target="_blank"  rel="noreferrer">
                            <img src={github} alt="githun icon" />
                        </a>
                        <a href='https://panteliccc.github.io/manage-landing-page/' target="_blank"  rel="noreferrer">
                            <img src={open} alt="open in new tab" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Projects;
