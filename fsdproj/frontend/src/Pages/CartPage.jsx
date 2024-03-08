import React from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
const CartPage = ({ cart }) => {
    // Check if cart is undefined or null
    if (!cart) {
        return (
            <>
                <Header/>
                <p className="text-center">Your cart is empty.</p>
                <Footer/>
            </>
        );
    }
    return (
        <>
        <Header/>
    <div className="container mt-5">
      <h1 className="text-center mb-5">Cart Page</h1>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="row">
          {cart.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <img src={item.imageUrl} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">${item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
        <Footer/>
        </>
  );
};

export default CartPage;
