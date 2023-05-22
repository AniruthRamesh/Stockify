import { useNavigate } from "react-router-dom";


const Home = () => {


    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate("/portfolio")
    }
    return ( 
        <div className="container-fluid p-0">
      <div className=" text-center py-5" style={{
          background: "linear-gradient(45deg, #ff9966, #ff5e62, #8c1bab, #2c3e50)",
        }}>
        <img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="stock market" className="img-fluid mb-3" style={{ maxHeight: '300px' }} />
        <h1 className="text-white">Welcome to Stockify, your Virtual Stock Market</h1>
        <button className="btn btn-light mt-3" onClick={handleClick}>Get Started</button>
      </div>
      <div className="bg-light py-5">
        <div className="container">
          <div className="text-center">
            <h2>Why choose us?</h2>
            <p className="lead">Best Website for getting to play with stocks</p>
          </div>
          <div className="row py-4">
            <div className="col-md-4 text-center">
            <ion-icon name="analytics-outline" style={{fontSize:"2rem"}}></ion-icon>
              <h3 className="text-primary">Real-time data</h3>
              <p>Get access to the latest stock market data in real-time.</p>
            </div>
            <div className="col-md-4 text-center">
            <ion-icon name="lock-closed-outline" style={{fontSize:"2rem"}}></ion-icon>
              <h3 className="text-primary">Secure transactions</h3>
              <p>Our platform ensures secure transactions for your peace of mind.</p>
            </div>
            <div className="col-md-4 text-center">
            <ion-icon name="people-circle-outline" style={{fontSize:"2rem"}}></ion-icon>
              <h3 className="text-primary">Expert support</h3>
              <p>Our team of experts is available to provide support whenever you need it.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}
 
export default Home;