import icono from '../img/icono.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '../App.css';


export function Cards2() {

    return (
        <article className="favoritos">
            <div className="container2">
                <img src={icono} alt="icono" width="100px" height="100px" />
                <h2>full name</h2>
                <p>andres@gmail.com</p>
                <FontAwesomeIcon icon={faHeart} className='iconoCorazon' />
            </div>
        </article>
    );
}

//propiedades 



