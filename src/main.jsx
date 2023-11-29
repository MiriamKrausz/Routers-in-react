import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom' 
import App from './App.jsx'
import './index.css'
import SinglePerson from './components/SinglePerson/SinglePerson.jsx'
import PersonFromContext from './components/PersonFromContext/PersonFromContext.jsx'
import Error from './components/Error/Error.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />
  },
  {
    path: '/persons',
    element: <PersonFromContext />
  },
  {
    path: 'singlePerson/:personsId',
    element: <SinglePerson />
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)


