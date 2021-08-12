import './App.css';
import {BrowserRouter as Router , Switch , Route} from "react-router-dom"
import Header from './Components/Header';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import Order from './Components/Order';


function App() {
    

  return (
    <div className="app">

      
     
    <Router>

    <div className="app__body">
      <Switch>

         <Route path="/checkout" >
           <Header />
           <Checkout />
         </Route>

         <Route path="/login" >
           <Header />
           <Login /> 
         </Route>

         <Route path="/">
           <Header />
           <Home />  
         </Route>

         <Route path="/order">
           <Header />
           <Order />  
         </Route>

        
       
      </Switch>
    </div>

    </Router>
    
    </div>
    );
}

export default App;
