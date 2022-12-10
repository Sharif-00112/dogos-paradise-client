import React  from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Contact from './Pages/Home/Contact/Contact';
import Story from './Pages/Home/Story/Story';
import CustomerReviews from './Pages/Home/CustomerReviews/CustomerReviews';
import Blogs from './Pages/Home/Blogs/Blogs';
import About from './Pages/Home/About/About';
import Dogs from './Pages/Home/Dogs/Dogs';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
// import Footer from './Pages/Shared/Footer/Footer';
// import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
 
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Routes>
            <Route exact path = '/' element={<Home/>}/>
            <Route exact path = '/home' element={<Home/>}/>
            <Route exact path = '/login' element={<Login/>}/>
            <Route exact path = '/register' element={<Register/>}/>
            <Route exact path = '/contact' element={<Contact/>}/>
            <Route exact path = '/dogs' element={<Dogs/>}/>
            <Route exact path = '/story' element={<Story/>}/>
            <Route exact path = '/reviews' element={<CustomerReviews/>}/>
            <Route exact path = '/blogs' element={<Blogs/>}/>
            <Route exact path = '/about' element={<About/>}/>
            {/* <Route exact path = '/appointment' element = {
              <PrivateRoute>
                <Appointment></Appointment>
              </PrivateRoute>
            }> </Route> */}
            <Route path = 'dashboard/*' element = {
              <PrivateRoute>
                <Dashboard></Dashboard>
              </PrivateRoute>
            }> </Route>
            <Route path = '*' element={<NotFound/>}/>
          </Routes>
          {/* <Footer></Footer> */}
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
