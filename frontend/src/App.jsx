
import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';

import Home from './components/home';
import Signup from './components/signup';
import Login from './components/login';
import Page1 from './addlisting/page1';
import Progressbar from './addlisting/progressbar';
import Addphoto from './addlisting/addphoto';
import Addinfo from './addlisting/addinfo';
import Category from './addlisting/category';
import Address from './addlisting/addres';
import Amenities from './addlisting/amenities';
import Offer from './addlisting/offer';   
import Finallist from './addlisting/finallist';
import Mylists from './addlisting/mylists';

import Viewcarddetails from './components/viewcarddetails';
import Mybooking from './addlisting/mybooking';
import Booked from './components/bookconfirmed';
import Wishlist from './components/wishlist';


import { ToastContainer } from 'react-toastify';
import Payment from './components/payment';
import OTPCard from './components/otp';
import Viewcard from './addlisting/viewcard';

function App() {


  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/progressbar" element={<Progressbar />} />
        <Route path='/category' element={<Category />} />
        <Route path='/address' element={<Address />} />
        <Route path='/amenities' element={<Amenities />} />
        <Route path='/offer' element={<Offer />} />
        <Route path='/addphoto' element={<Addphoto />} />
        <Route path='/addinfo' element={<Addinfo />} />
        <Route path='/finallist' element={<Finallist />} />
        <Route path='/mylist' element={<Mylists />} />
        <Route path='/mybooking' element={<Mybooking />} />
        <Route path='/viewcard' element={<Viewcard />} />
        <Route path='/viewcarddetails' element={<Viewcarddetails />} />
        <Route path='/booked' element={<Booked />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path="/otp" element={<OTPCard />} />
        <Route path="/payment/:bookingId" element={<Payment />} />


      </Routes>


    </>
  )
}

export default App
