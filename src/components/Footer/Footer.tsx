import {AiFillGithub} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './style.css'
const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
        <article>
            <div className="f-left">
                <Link to="/" className='f-name'>
                     <span>PROJETO</span> CEP
                </Link>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum mollitia dolorem ex officia quo aspernatur, iusto sint officiis earum incidunt ea, eveniet voluptatum, odio debitis itaque inventore nihil! Ut, necessitatibus!
                </p>
            </div>           
        </article>

        <article>
        <div className='f-right'>
                <h3>
                    ACESSE O CÓDIGO EM:
                </h3>
                <a href=""><AiFillGithub/></a>

            </div>
        </article>
        
        </div>
        <div className="footer__copyright">
        <small>2022 Kalebe &copy; All Rights Reserved</small>
       </div>
    </footer>
  )
}

export default Footer