import React from 'react'
import ReactDOM from 'react-dom/client'
import ErrorPage from "./error-page";
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import App from './App';
import Home from './components/Home';
import AuthProvider from './provider/AuthProvider';
import Login from './components/Login';
import Register from './components/Register';
import Chef from './components/Chef';
import ChefDetails from './components/ChefDetails';
import PrivateRoute from './routes/PrivateRoute';
import Blog from './components/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`http://localhost:5000/chef`),
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/chef/:id",
        element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
        
      }
    ],
    
  },
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
