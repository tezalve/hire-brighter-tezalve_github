import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jobdetails from './components/Jobdetails/Jobdetails';
import Applied from './components/Applied/Applied';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Lost from './components/Lost/Lost';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/details/:ID',
        element: <Jobdetails></Jobdetails>
      },
      {
        path: '/applied',
        element: <Applied></Applied>
      },
      {
        path:'/statistics',
        element: <Statistics></Statistics>
      },
      {
        path:'/blog',
        element: <Blog></Blog>
      },
      {
        path: '*',
        element: <Lost></Lost>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
