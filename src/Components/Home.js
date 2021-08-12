import React from 'react';
import "./Home.css"
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
            alt="" 
            />
         <div className="home__row">
          <Product 
          id={12321348}
          price={11.96} 
          title="The Lean startup: How Constant innovatiom Creates Radically Successful Business Paperback"
          rating={5} 
          image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
          />
         <Product 
          id={12321342}
          price={89.99} 
          title="Sleep Mantra Twin-XL Mattress Topper Pillow Top - 100% Pure Cotton "
          rating={5} 
          image="https://images-na.ssl-images-amazon.com/images/I/71lTWdCoEIL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
          </div>

          <div className="home__row">

       
            <Product 
          id={12321344}
          price={27.61} 
          title="King Size Mattress Protector – 100% Waterproof and Noiseless Ultra Soft(King Size)"
          rating={5} 
          image="https://images-na.ssl-images-amazon.com/images/I/61W89b7Ca7S.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
             <Product 
          id={12321345}
          price={13.59} 
          title="Maison d' Hermine Birdies On Wire 100% Cotton Set of 2 Multi-Purpose Kitchen Towel"
          rating={4} 
          image="https://images-na.ssl-images-amazon.com/images/I/91-F6knPkPL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
               <Product 
          id={12321345}
          price={13.59} 
          title="Havells fast charging lightning fast cable for Apple"
          rating={4} 
          image="https://m.media-amazon.com/images/I/61e+w8PLhuL._SL1000_.jpg"
          />
         
          </div>



        </div>
    )
}

export default Home;
