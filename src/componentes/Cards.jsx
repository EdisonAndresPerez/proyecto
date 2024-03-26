import icono from '../img/icono.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import '../App.css';    

export function Cards() {


    return (
            <div>
                <article className="favoritos">
                        <div className="container">
                            <img src={icono} alt="icono" width="100px" height="100px" />
                            <h2>full name</h2>
                            <p>andres@gmail.com</p>
                            <hr />
                            <button className="btnEliminar"    /* onClick={eliminarElemento} */>  {/* alt chif a */}
                            <FontAwesomeIcon icon={faTimes} /> Remove
                            </button>
                        </div>
                </article>
            </div>
    );
}
