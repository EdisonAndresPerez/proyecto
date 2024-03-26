import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { Favorites } from './componentes/Favorites.jsx';
import {Contacts} from './componentes/Contacts'
import { Nav } from './componentes/Nav.jsx';
import { Header } from './componentes/Header.jsx';
import { Header2 } from './componentes/Header2.jsx';


const router = createBrowserRouter([
{
  
  path:'/',
  element:<Nav/>,
  children:[
    {
      path:'/',
      element:<Header/>
    },
    {
      path:'/',
      element:<Header2/>
    },
    {
      path:'favorites',
      element:<Favorites/>
    },
    {
      path:'contacts',
      element:<Contacts/>
    },
  ]
},
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);