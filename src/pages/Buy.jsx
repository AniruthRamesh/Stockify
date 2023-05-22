import {useState} from "react"

const Buy = () => {
   const [portfolioName, setPortfolioName] = useState('');
  const [stockCompany, setStockCompany] = useState('');
  const [numStocks, setNumStocks] = useState(0);
  const [buyDate, setBuyDate] = useState('');

  const handleBuyStocks = (event) => {
    event.preventDefault();
    // Validate user inputs
    if (portfolioName.trim() === '' || stockCompany.trim() === '' || numStocks <= 0 || buyDate.trim() === '') {
      alert('Please enter valid inputs.');
      return;
    }
    // TODO: Implement actual buy stocks logic
    alert(`You have successfully bought ${numStocks} stocks of ${stockCompany} on ${buyDate} for your ${portfolioName} portfolio.`);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Buy Stocks</h1>
      <form onSubmit={handleBuyStocks}>
        <div className="mb-3">
          <label htmlFor="portfolioName" className="form-label">Portfolio Name</label>
          <input type="text" className="form-control" id="portfolioName" value={portfolioName} onChange={(e) => setPortfolioName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="stockCompany" className="form-label">Stock Company</label>
          <input type="text" className="form-control" id="stockCompany" value={stockCompany} onChange={(e) => setStockCompany(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="numStocks" className="form-label">Number of Stocks</label>
          <input type="number" className="form-control" id="numStocks" value={numStocks} onChange={(e) => setNumStocks(parseInt(e.target.value))} />
        </div>
        <div className="mb-3">
          <label htmlFor="buyDate" className="form-label">Date to Buy Stocks</label>
          <input type="date" className="form-control" id="buyDate" value={buyDate} onChange={(e) => setBuyDate(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">
          Buy Stocks 
        </button>
      </form>
    </div>
  );
}
 
export default Buy;