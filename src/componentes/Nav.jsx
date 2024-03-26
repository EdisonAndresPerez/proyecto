import icono from '../img/icono.png';
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';    
import { Outlet } from "react-router-dom";

 export function Form({toggleForm}) {
    const handleSubmit = (event) => {
        event.preventDefault();
        toggleForm();
    }
    return (
        <form className='formulario' onSubmit={handleSubmit}>
            <div className="container">
                <label htmlFor="firstName">Nombre:</label><br />
                <input type="text" id="firstName" name="firstName" /><br />

                <label htmlFor="lastName">Apellido:</label><br />
                <input type="text" id="lastName" name="lastName" /><br />

                <label htmlFor="email">Correo electrónico:</label><br />
                <input type="email" id="email" name="email" /><br />

                <input type="checkbox" id="likeFavorite" name="likeFavorite" />
                <label htmlFor="likeFavorite">Activar mi favorito</label><br />
                <input type="submit" value="SAVE" />
            </div>
        </form>
        
    );
}


 export function Nav({ toggleForm }) {
    
    return (
        <div>
        <nav>
            <div className="logo">
                <img className="imgIcono" src={icono} alt="icono" />
            </div>
            <ul className="botonesNavbar">
                    <li><Link to={''} className='btnOverview'>OverView</Link></li>
                    <li><Link to={'Contacts'} className='btnContacts'>Contacts</Link></li>
                    <li><Link to={'Favorites'} className='btnFavorite'>Favorites</Link></li>
                    <li><button className="btnNew" onClick={toggleForm}> + NEW</button></li>
            </ul>
        </nav>
        <Outlet/>
        </div>
        
    );
}
