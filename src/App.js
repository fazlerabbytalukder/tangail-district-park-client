import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AddNewService from './Pages/Home/AddNewService/AddNewService';
import Booking from './Pages/Home/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import ManageAllBooking from './Pages/Home/ManageAllBooking/ManageAllBooking';
import MyBooking from './Pages/Home/MyBooking/MyBooking';
import PrivateRoute from './Pages/Home/PrivateRoute/PrivateRoute';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Shared/Login/Login';
import NotFond from './Pages/Shared/NotFond/NotFond';
import Register from './Pages/Shared/Register/Register';


function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <PrivateRoute path='/services/:serviceId'>
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path='/manageAllBooking'>
              <ManageAllBooking></ManageAllBooking>
            </PrivateRoute>
            <PrivateRoute path='/myBooking'>
              <MyBooking></MyBooking>
            </PrivateRoute>
            <PrivateRoute path='/addNewService'>
              <AddNewService></AddNewService>
            </PrivateRoute>
            <Route path='*'>
              <NotFond></NotFond>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
