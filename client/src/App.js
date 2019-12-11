import React from 'react';
import axios from 'axios';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import ProductForm from './components/ProductForm';
import ProductView from './components/ProductView';
import { Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";

// This is where I tried to created my update and delete methods 
// I tried to render them in the Products.js file inside of my buttons as well as 
  //rebuilding them but my 'undefined error' persisted

// updateProduct = (id) => {
//   axios.put(`/api/products/${id}`)
//     .then( res => {
//       const products = this.state.products.map( t => {
//       if (t.id === id)
//         return res.data;
//       return t;
//     });
//     this.setState({ products, });
//   })
// }

// deleteProduct = (id) => {
//   axios.delete(`/api/products/${id}`)
//     .then( res => {
//       const { products, } = this.state;
//       this.setState({ products: products.filter(t => t.id !== id), })
//     })
// }

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
