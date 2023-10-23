import React,{useEffect,useState} from 'react'
import { UserCartUrl } from '../services/api';

const Cart = () => {

  const [cartData, setCartData] = useState([{}]);

  useEffect(() => {
    // Define an asynchronous function to fetch user profile data
    const fetchUserProfile = async () => {
      try {
        console.log("Fired useEffect hook for Cart Details , before hitting url ")
        // Make the API request to fetch user profile data
        const response = await UserCartUrl(); // Assuming UserProfileUrl returns the user profile data
        console.log(response)
        // Set the retrieved data in the state
        setCartData(response);
      } catch (error) {
        console.error('Error fetching user profile data:', error);
        // Handle the error, e.g., show an error message to the user
      }
    };

    // Call the fetchUserProfile function when the component mounts
    fetchUserProfile();
  }, []);

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
          {cartData.map((item) => (
              <tr>
                <td>{item.cart}</td>
                <td>{item.quantity}</td>
                <td>${item.product}</td> 
                {/* <td>${item.total}</td>  */}
              </tr>
          ))}
        </tbody>
      </table>
      <div className="text-right">
        <strong>Total: $80.00</strong>
      </div>
    </div>
  );
};

export default Cart;
