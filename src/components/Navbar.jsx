import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';
import { profileThunk } from '../services/auth-thunk.js';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import axios from "axios"

import { useEffect,useState } from 'react';

const Navbar = () => {
    const dispatch = useDispatch()
    //  const user = useSelector(state=>state.auth.user);

    // const forceRefresh = true
    // useEffect(()=>{
    //     dispatch(profileThunk({forceRefresh}))
    //   },[user])

    const getUser = async()=>{
        const response = await axios.get("http://localhost:8080/currentUser",{withCredentials:true})
        setUser(response.data)
    }
    const [user,setUser] = useState(null)

    useEffect(()=>{
        getUser()
    })

      const handleLogout = async()=>{
        const response = await axios.post("http://localhost:8080/logout", {withCredentials: true})
        console.log(response)
        console.log(user)
      }
      

    return ( 
        <nav className="navbar bg-body-tertiary fixed-top" style={{position:"sticky",top:0}} >
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" style={{textDecoration:"none"}}>Stockify</Link>
                    

                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Stockify</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                        <Link to="/" style={{textDecoration:"none"}}><a className="nav-link active" aria-current="page">Home</a></Link>
                    </li>
                    {!user && <><li className="nav-item">
                        <Link to="/login" style={{textDecoration:"none"}}><a className="nav-link" href="#">Login</a> </Link>
                        
                    </li>
                    <li className="nav-item">
                        <Link to="/register" style={{textDecoration:"none"}}><a className="nav-link" href="#">Register</a></Link>
                        
                    </li></>}
                    {
                        user && 
                        <>
                            <li>Hello {user}</li>
                            <li><a className="nav-link" href="#" onClick={handleLogout}>Logout</a></li>
                        </>
                    }
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Features
                        </a>
                        <ul className="dropdown-menu">
                            <Link to="/Buy" style={{textDecoration:"none"}}><li><a className="dropdown-item" href="#">Buy Stocks</a></li></Link>
                            <Link to="/Sell" style={{textDecoration:"none"}}><li><a className="dropdown-item" href="#">Sell Stocks</a></li></Link>
                            <Link to="/Portfolio" style={{textDecoration:"none"}}><li><a className="dropdown-item" href="#">Create a Portfolio</a></li></Link>
                            <Link to="/Composition" style={{textDecoration:"none"}}><li><a className="dropdown-item" href="#">View Composition</a></li></Link>
                            <Link to="/Value" style={{textDecoration:"none"}}><li><a className="dropdown-item" href="#">Determine value of portfolio</a></li></Link>
                            <Link to="/CostBasis" style={{textDecoration:"none"}}><li><a className="dropdown-item" href="#">Cost Basis</a></li></Link>
                            <Link to="/Performance" style={{textDecoration:"none"}}><li><a className="dropdown-item" href="#">Performance</a></li></Link>
                            
                        </ul>
                        </li>


                    
                    </ul>
                    
                </div>
                </div>
            </div>
            </nav>
    );
}
 
export default Navbar;