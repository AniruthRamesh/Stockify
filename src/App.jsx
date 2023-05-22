import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Buy from "./pages/Buy"
import Composition from "./pages/Composition"
import CostBasis from "./pages/CostBasis"
import Performance from "./pages/Performance"
import Portfolio from "./pages/Portfolio"
import Sell from "./pages/Sell"
import Value from "./pages/Value"

import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import authReducer from "./reducers/auth-reducer";

const store = configureStore(
  {
      reducer:{
        auth:authReducer,
      }
  }
)


function App() {

  const Layout = ()=>{
    return(
      <div>
        <Navbar/>
        <Outlet/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/Buy",
          element:<Buy/>
        },
        {
          path:"/Composition",
          element:<Composition/>
        },
        {
          path:"/CostBasis",
          element:<CostBasis/>
        },
        {
          path:"/Performance",
          element:<Performance/>
        },
        {
          path:"/Portfolio",
          element:<Portfolio/>
        },
        {
          path:"/Sell",
          element:<Sell/>
        },
        {
          path:"/Value",
          element:<Value/>
        }
      
      ]

    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
