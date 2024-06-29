import './App.css'
import HomePage from './Pages/HomePage/HomePage'
import ProductDetail from './Pages/PaymentPages/ProductDetail';

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
      </Routes>
    </Router>

  )
}

export default App
