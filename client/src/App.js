import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import ProductForm from './components/ProductForm';
import ProductView from './components/ProductView';
import { Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";

const App = () => (
  <div>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/new" component={ProductForm} />
        <Route exact path="/products/:id" component={ProductView} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </div>
)

export default App;
