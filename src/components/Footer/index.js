import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () =>{
    return (
        <footer>
            <h2>&gt; Contact &lt;</h2>
            <div className="footer-container">
                <a href="tel:+381606005679">Tel: +381 60/6005679</a>
                <a href="mailto:seovacmarko5@gmail.com">seovacmarko5@gmail.com</a>
                <ul className="social-accounts-wrapper">
                    <li><a href="https://www.linkedin.com/in/marko-seovac-758a75199/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a href="https://github.com/seovac92"><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a href="https://www.instagram.com/seovac/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                    <li><a href="https://www.facebook.com/marko.s.seovac"><FontAwesomeIcon icon={faFacebook} /></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer