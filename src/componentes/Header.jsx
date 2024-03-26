import '../App.css';    
import { Cards } from './Cards';
import { Header2 } from './Header2';
import { Cards2 } from './Cards2';

    export function Header(){
        return(
            <div>
                <header id="inicio">
                    <div className="containerGeneral">
                <div className="containerTituloLinea">
                    <h1>Favorites</h1> 
                </div> 
                <div>
                    <div className="lineaVerde"></div>
                </div>
            </div>
        </header>
        <Cards/>
        <Header2/>
        <Cards2/>
            </div>

        )
    }


