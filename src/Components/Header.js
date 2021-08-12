import React from 'react';
import "./Header.css";
import {NavLink} from "react-router-dom"
import {  Search, ShoppingBasket } from '@material-ui/icons';
import { useStateValue } from '../StateProvider';


function Header() {
    const [{ basket }, dispatch] = useStateValue();
    const [{ user }] = useStateValue();

    console.log(basket);
    
    return (
        <div className="header">

           <NavLink to="/">

            <img className="header__logo" 
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            alt="" 
            />

            </NavLink>


            <div className="header__search">
            
              <input className="header__searchInput"  />
              <Search className="header__searchIcon" />
           </div>
            
            <div className="header__nav">


               {!user ? (

                <NavLink to="/login" className="header__link">
                   <div className="header__option">    
                
                   <span  className="header__optionLineOne">Hello,</span>
                   <span  className="header__optionLineTwo">Sign In</span>
                 
                  </div>
                 </NavLink>
                 ):(<NavLink className="header__link">
                    <div className="header__option">    
                
                    <span  className="header__optionLineOne">Hello,</span>
                    <span  className="header__optionLineTwo">{user.displayName}</span>
                  
                   </div>
                   </NavLink>

                 )};
                   
                   <NavLink to="/order" className="header__link">
                   <div className="header__option">    
                
                   <span  className="header__optionLineOne">Returns</span>
                   <span  className="header__optionLineTwo">& Orders</span>
                 
                  </div>
                 </NavLink>

              
                 <NavLink to="/" className="header__link">
                   <div className="header__option">    
                
                   <span  className="header__optionLineOne">your</span>
                   <span  className="header__optionLineTwo">Prime</span>
                 
                  </div>
                 </NavLink>

           
                 <NavLink to="/checkout" className="header__link">
                     <div className="header__optionBasket">
                         <ShoppingBasket />
                         <span  className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                     </div>



                 </NavLink>




            </div>
        



        </div>
    )
}

export default Header;
