import './App.css';
import React from 'react';
import React, { useState } from 'react';
import {Header} from './componentes/Header'
import { Header2 } from './componentes/Header2';
import { Nav } from './componentes/Nav';
/*import { Form } from './componentes/Nav';*/
import {ContainerCards} from './componentes/ContainerCards'
import {Cards} from './componentes/Cards'
import {Cards2} from './componentes/Cards2'




function App() {
  //creamos una variable de estado y una funcion para actualizar el estado
    const [showForm, setShowForm] = useState(false);

    //declaramos una funcion  que se usa para cambiar el estado de showForm
    const toggleForm = () => {
        setShowForm(!showForm);//cambiamos valor
    };

    return (
        <div>
            <Nav toggleForm={toggleForm} /> {/* Renderizamos el componente Nav y pasamos la función toggleForm */}
            {showForm && <Form />}  {/*Renderizamos el componente Form  solo si es true*/}

    <Header/>
    <ContainerCards/>
      <div className="container-favoritos">
        <Cards/>
      </div>
      <Header2/>
      <div className="container-favoritos">
        <Cards2/>
      </div>
        </div>
    );
}
export default App;
