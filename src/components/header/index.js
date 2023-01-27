import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHtml5, faCss3Alt, faJs, faNodeJs, faVuejs, faReact} from '@fortawesome/free-brands-svg-icons'

const Header = () => {
    return (
        <header className="">
            <div className="bio">
                <div className="profile-img"></div>
                <div className='head-typing'>
                    <div className="typing name"></div>
                    <div className="typing surname"></div>
                    <div className="typing born"></div>
                    <div className="typing profession"></div>
                </div>
            </div>
            <div className="scene">
                <div className="cube">
                    <div className="wall front">
                        <FontAwesomeIcon icon={faHtml5} />
                    </div>
                    <div className="wall back">
                        <FontAwesomeIcon icon={faCss3Alt} />
                    </div>
                    <div className="wall left">
                        <FontAwesomeIcon icon={faJs} />
                    </div>
                    <div className="wall right">
                        <FontAwesomeIcon icon={faNodeJs} />
                    </div>
                    <div className="wall top">
                        <FontAwesomeIcon icon={faVuejs} />
                    </div>
                    <div className="wall bottom">
                        <FontAwesomeIcon icon={faReact} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header