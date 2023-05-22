import React, { useState } from 'react';

const Portfolio = () => {
    const [portfolioName, setPortfolioName] = useState('');
    const [numberOfCompanies, setNumberOfCompanies] = useState(0);
    const [companies, setCompanies] = useState([{ name: '', date: '', stocks: '' }]);
  
    function handlePortfolioNameChange(event) {
      setPortfolioName(event.target.value);
    }
  
    function handleNumberOfCompaniesChange(event) {
      setNumberOfCompanies(parseInt(event.target.value));
    }
  
    function handleCompanyDetailsChange(event, index) {
        const { name, value } = event.target;
        
        setCompanies(prevCompanies => {
          const updatedCompanies = [...prevCompanies];
          updatedCompanies[index][name] = value;
          
          return updatedCompanies;
        });
      }
  
    function handleFormSubmit(event) {
      event.preventDefault();
      console.log('Portfolio Name:', portfolioName);
      console.log('Number of Companies:', numberOfCompanies);
      console.log('Companies:', companies);
    }
  
    function renderCompanyForm(index) {
      return (
        <div className="card my-4" key={index}>
        <div className="card-body">
          <h3 className="card-title">Company {index + 1} Details</h3>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id={`companyName${index}`} name="name" onChange={(e) => handleCompanyDetailsChange(e, index)} required />
            <label htmlFor={`companyName${index}`}>Name of the Company:</label>
          </div>
          <div className="form-floating mb-3">
            <input type="date" className="form-control" id={`companyDate${index}`} name="date" onChange={(e) => handleCompanyDetailsChange(e, index)} required />
            <label htmlFor={`companyDate${index}`}>Date on which to buy:</label>
          </div>
          <div className="form-floating mb-3">
            <input type="number" className="form-control" id={`companyStocks${index}`} name="stocks" onChange={(e) => handleCompanyDetailsChange(e, index)} required />
            <label htmlFor={`companyStocks${index}`}>Number of Stocks:</label>
          </div>
        </div>
      </div>
      );
    }
  
    const companyForms = [];
  
    for (let i = 0; i < numberOfCompanies; i++) {
      companyForms.push(renderCompanyForm(i));
    }
  
    return (
        <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form onSubmit={handleFormSubmit}>
              <h2 className="mb-4 text-center">Create a Stock Portfolio</h2>
  
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="portfolioName" value={portfolioName} onChange={handlePortfolioNameChange} required />
                <label htmlFor="portfolioName">Portfolio Name:</label>
              </div>
  
              <div className="form-floating mb-3">
                <input type="number" className="form-control" id="numberOfCompanies" value={numberOfCompanies} onChange={handleNumberOfCompaniesChange} required />
                <label htmlFor="numberOfCompanies">Number of Companies:</label>
              </div>
  
              {companyForms}
  
              <div className="d-grid gap-2 col-lg-6 mx-auto mt-4">
                <button type="submit" className="btn btn-primary">Create Portfolio</button>
              </div>
            </form>
        </div>
      </div>
      </div>
    );
}
 
export default Portfolio;