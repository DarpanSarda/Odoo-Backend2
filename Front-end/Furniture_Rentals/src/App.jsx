import './App.css'
import HomePage from './Pages/HomePage/HomePage'
import ProductDetail from './Pages/PaymentPages/ProductDetail'
import Cart from "./Pages/PaymentPages/PaymentCart"
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUP'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />}  />
        <Route path="/productDetail" element={<ProductDetail/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Signin" element={<SignIn />} />
        <Route path="/Signup" element={<SignUp />} />
      </Routes>
    </Router>

  )
}

export default App
