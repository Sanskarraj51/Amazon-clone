import React from 'react';
import { useStateValue } from '../StateProvider';
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';


function Checkout() {

    const [{ basket }, dispatch] = useStateValue();
    const [{ user }] = useStateValue();

    return (
        <div className="checkout">
           <div className="checkout__left">
          <img className="checkout__ad"
           src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
           alt="" />  

           {basket?.length === 0 ? (
               <div>
                   {!user ? (
                   <h2>Your Shopping Basket is Empty</h2>
                   ):(
                    <h2>Your Shopping Basket is Empty, {user.displayName} </h2> 
                   )}
                   <p>You have no items in your basket . please add something !</p>
               </div>
           ) : (
               <div>
                   {!user ? (
                   <h2 className="checkout__title">Your Shopping Basket</h2>
                   ):(
                    <h2 className="checkout__title">Your Shopping Basket, {user.displayName}</h2>
                   )}

                   {basket.map(item =>(
                       <CheckoutProduct 
                       id={item.id}
                       title ={item.title}
                       image={item.image}
                       price={item.price}
                       rating={item.rating}
                       />
                   ))
                   }

               </div>
           )}
          </div>
          {basket.length > 0 && (
          <div className="checkout__right">
            <Subtotal />
          </div>)}
        </div>
    )
}

export default Checkout;
