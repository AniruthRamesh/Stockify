import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate()
    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")
    const [err,setErr] = useState(null)
    const handleLogin = (event)=>{
      event.preventDefault();

      handleAsyncLogin();
    }

    const handleAsyncLogin = async()=>{
      try{
        const response = await axios.post("http://localhost:8080/login",{username:userName,password:password},{withCredentials:true})
        navigate("/")
      }catch(err){
        const {response} = err
        setErr(response.data)
      }
    }

    return (
        <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-5">
          <div className="card border-0 shadow-lg">
            <div className="card-body p-5">
              <h1 className="mb-4">Login</h1>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Username
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your Username"
                    required
                    value={userName}
                    onChange={e=>setUserName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    required
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100 mt-3" onClick={handleLogin}>
                  Login
                </button>
              </form>
              <div className="mt-4 text-center">
                <span className="text-muted">Don't have an account yet?</span>{" "}
                <Link to="/register">Register here</Link>
              </div>
              {err && <div className="alert alert-danger mt-3">{err}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
      );
}
 
export default Login;