import * as React from 'react';
/*import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';*/
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './components/loginpage'
import SignUp from './components/signup';
import Pricing from './components/main';
import Features from './components/features';
import Support from './components/support';
import AddressForm from './components/checkout/addressform';
import PaymentForm from './components/checkout/paymentform';
import Review from './components/checkout/review';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/pricing' element={<Pricing />}></Route>
          <Route path='/loginpage' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route exact path='/' element={<Features/>}></Route>
          <Route path='/support' element={<Support/>}></Route>
          <Route path='/addressform' element={<AddressForm/>}></Route>
          <Route path='/paymentform' element={<PaymentForm/>}></Route>
          <Route path='/review' element={<Review/>}></Route>
      </Routes>
      </div>
    </Router>
  );
}

export default App;