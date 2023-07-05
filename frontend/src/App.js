import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/route/ProtectedRoute'

import { loadUser } from './actions/userActions'
import store from './store'
import axios from 'axios'

import Footer from './components/layout/Footer'
import Home from './components/Home'
import Header from './components/layout/header'
import ProductDetails from './components/product/ProductDetails';

// Cart Imports
import Cart from './components/cart/Cart'
import Shipping from './components/cart/Shipping'
import ConfirmOrder from './components/cart/ConfirmOrder'
import Payment from './components/cart/Payment'
import OrderSuccess from './components/cart/OrderSuccess'

// Auth or User imports
import Login from './components/user/login'
import Register from './components/user/Register';

import Profile from './components/user/Profile'
import UpdateProfile from './components/user/UpdateProfile'
import UpdatePassword from './components/user/UpdatePassword'
import ForgotPassword from './components/user/ForgotPassword'
import NewPassword from './components/user/NewPassword'

// Payment
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

function App() {

  const [stripeApiKey, setStripeApiKey] = useState('');

  useEffect(() => {
    store.dispatch(loadUser())

    async function getStripApiKey() {
      const { data } = await axios.get('/api/v1/stripeapi');

      console.log(data.setStripeApiKey)

      setStripeApiKey(data.stripeApiKey)
    }

    getStripApiKey();

  }, [])

  console.log(stripeApiKey)

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container container-fluid"> 
          <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/search/:keyword" element={<Home />}  />
            <Route path="/product/:id" element={<ProductDetails />}  />

            <Route path="/login" element={<Login />}  />
            <Route path="/register" element={<Register />}  />
            <Route path="/cart" element={<Cart />}  />
            <Route path="/shipping" element={ <ProtectedRoute> <Shipping /></ProtectedRoute>}  />
            <Route path="/order/confirm" element={ <ProtectedRoute> <ConfirmOrder /></ProtectedRoute>}  />
            <Route path="/success" element={ <ProtectedRoute> <OrderSuccess /></ProtectedRoute>}  />
            <Route path="/payment" element={ <ProtectedRoute> <Payment /></ProtectedRoute>}  />
            
            {/* {stripeApiKey &&
            <Elements stripe={loadStripe(stripeApiKey)}>
              <ProtectedRoute path="/payment" component={Payment} />
            </Elements>
          } */}
{/*           
          {stripeApiKey &&      
            <Route path="/payment" 
            element={
            <Elements stripe={loadStripe(stripeApiKey)}>
              <Payment/>
            </Elements>
            } 
            />
          } */}

            <Route path="/me" element={ <ProtectedRoute> <Profile /></ProtectedRoute>}/>
            <Route path="/me/update" element={ <ProtectedRoute> <UpdateProfile /></ProtectedRoute>}/>
            <Route path="/password/update" element={ <ProtectedRoute> <UpdatePassword /></ProtectedRoute>}/>

            <Route path="/password/forgot" element={<ForgotPassword />}  />
            <Route path="/password/reset/:token" element={<NewPassword />}  />
            
          </Routes>
        </div> 
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
