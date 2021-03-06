import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import News from './components/News/News';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Review from './components/Review/Review';
import ShopDataBase from './components/Shop/ShopDataBase';

function App() {
  return (
      <div className="container">
          <Header></Header>

          <Router>
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

                  <Route path="/inventory">
                      <Inventory></Inventory>
                  </Route>

                  <Route path="/product/:productKey">
                      <ProductDetail></ProductDetail>
                  </Route>

                  <Route path="*">
                      <NotFound></NotFound>
                  </Route>
              </Switch>
          </Router>
      </div>
  );
}

export default App;
