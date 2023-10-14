// src/components/Cart/Cart.js
import React from 'react';

const Cart = () => {
  return (
    <div className="container mt-4">
      <h2>Your Shopping Cart</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Product 1</td>
            <td>2</td>
            <td>$25.00</td>
            <td>$50.00</td>
          </tr>
          <tr>
            <td>Product 2</td>
            <td>1</td>
            <td>$30.00</td>
            <td>$30.00</td>
          </tr>
          {/* Add more rows for other products in the cart */}
        </tbody>
      </table>
      <div className="text-right">
        <strong>Total: $80.00</strong>
      </div>
    </div>
  );
};

export default Cart;
