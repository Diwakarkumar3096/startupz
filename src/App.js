import './App.css';
import BusinessModel from './Components/Business Model/BusinessModel';
import Category from './Components/Category/Category';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import InterestedIn from './Components/InterestedIn/InterestedIn'
import Stage from './Components/Stage/Stage';
import FundingType from './Components/FundingType/FundingType';
import BusinessNature from './Components/BusinessNature/BusinessNature';
import InvestmentNature from './Components/InvestmentNature/InvestmentNature';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Category/>
      <BusinessModel/>
      <InterestedIn/> 
      <Stage/>
      <FundingType/>
      <BusinessNature/>
      <InvestmentNature/>
      <Footer/>
      
    </div>
  );
}

export default App;
