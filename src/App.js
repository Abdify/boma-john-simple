import React, { createContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import { auth } from './components/LogIn/firebase';
import LogIn from './components/LogIn/LogIn';
import News from './components/News/News';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Review from './components/Review/Review';
import Shipment from './components/Shipment/Shipment';
import ShopDataBase from './components/Shop/ShopDataBase';

export const userContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});
    const [user] = useAuthState(auth);
  return (
      <userContext.Provider value={[loggedInUser, setLoggedInUser]} className="container">
          <Router>
              <Header></Header>
              <h2>{loggedInUser.email}</h2>
              <Switch>
                  <Route exact={true} path="/">
                      <News></News>
                      <ShopDataBase></ShopDataBase>
                      {/* <Shop></Shop> */}
                  </Route>

                  <Route path="/shop">
                      <News></News>
                      <ShopDataBase></ShopDataBase>
                  </Route>

                  <Route path="/review">
                      <Review></Review>
                  </Route>

                  <Route path="/shipment">{auth.currentUser ? <Shipment /> : <LogIn />}</Route>
                  <Route path="/inventory">{auth.currentUser ? <Inventory /> : <LogIn />}</Route>
                  {/* <PrivateRoute path="/inventory">
                      <Inventory></Inventory>
                  </PrivateRoute>
                  <PrivateRoute path="/shipment">
                      <Shipment />
                  </PrivateRoute> */}
                  <Route path="/logIn">
                      <LogIn />
                  </Route>
                  <Route path="/product/:productKey">
                      <ProductDetail></ProductDetail>
                  </Route>

                  <Route path="*">
                      <NotFound></NotFound>
                  </Route>
              </Switch>
          </Router>
      </userContext.Provider>
  );
}

export default App;
