import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate =  useNavigate()
  const [userName, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(true); // added state for passwords match
    const [error,setError] = useState(null)

    const handleRegister = (event)=>{
      event.preventDefault();
      if(password!==confirmPassword){
        setPasswordsMatch(false)
        return;
      }
      else{
        setPasswordsMatch(true)
      }

      handleAsyncRegister();

    }

    const handleAsyncRegister = async()=>{
      try{
        const response = await axios.post("http://localhost:8080/register",{
        username:userName,email:email,password:password
      })
      navigate("/login")
      
      }catch(err){
        const {response} = err
        setError(response.data)
      }
      
    }

  

    return ( 
        <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <div className="card shadow-lg border-0 rounded-lg mt-5">
            <div className="card-header"><h3 className="text-center font-weight-light my-4">Create Account</h3></div>
            <div className="card-body">
              <form >
                <div className="form-floating mb-3">
                  <input className="form-control" id="username" type="text" placeholder="Username" value={userName} onChange={(e) => setUsername(e.target.value)} required />
                  <label htmlFor="username">Username</label>
                </div>
                <div className="form-floating mb-3">
                  <input className="form-control" id="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  <label htmlFor="email">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input className="form-control" id="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  <label htmlFor="password">Password</label>
                </div>
                <div className="form-floating mb-3">
                  <input className="form-control" id="confirmPassword" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                  <label htmlFor="confirmPassword">Confirm Password</label>
                </div>
                {!passwordsMatch && <p className="text-danger mb-3">Passwords do not match</p>} {/* display error if passwords don't match */}
                
                
                <div className="d-flex align-items-center justify-content-center mt-4 mb-0">
                  <button className="btn btn-primary" onClick={handleRegister}>Create Account</button>
                  <Link to="/" className="ms-3">Cancel</Link>
                </div>
              </form>
            </div>
            <div className="card-footer text-center py-3">
              <div className="small"><Link to="/login">Already have an account? Login here</Link></div>
            </div>

            {error && <div className="alert alert-danger mt-3">{error}</div>}
          </div>
        </div>
      </div>
    </div>
     );
}
 
export default Register;