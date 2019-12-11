import React from "react";
import axios from "axios";
import { Link, } from "react-router-dom";
import { Card, Header, Button, Icon } from "semantic-ui-react";

class Products extends React.Component {
  state = { products: [], }

  componentDidMount() {
    axios.get("/api/products")
      .then(res => {
        this.setState({ products: res.data, })
      })
  }

  updateProduct = (id) => {
    const { product } = { ...this.state }
    axios.put(`/api/products/${id}`, product)
      .then(res => {
        this.props.history.push("/products");
      });
  }

  deleteProduct = (id) => {
    axios.delete(`/api/products/${id}`)
      .then(res => {
        const { products, } = this.state;
        this.setState({ products: products.filter(t => t.id !== id), })
      })
  }

  renderProducts = () => {
    // if toggle is true, render productform
    const { products, updateProduct, deleteProduct } = this.state;
    if (products.length <= 0)
      return <Header as="h2"> No Products Available </Header>
    return products.map(product => (
      <Card>
        <Card.Content>
          <Card.Header>{product.name}</Card.Header>
          <Card.Meta>{product.department}</Card.Meta>
          <Card.Description>{product.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button
            icon as={Link}
            to={`/product/${product.id}`}
            color='green'>
            <Icon name="eye" />
          </Button>
          <Button
            icon as={Link} to={`/products/${product.id}`}
            onClick={() => this.toggleUpdate}
            color='grey'>
            <Icon name="pencil" />
          </Button>
          <Button
            icon as={Link}
            onClick={() => this.deleteProduct(product.id)}
            color='red'>
            <Icon name="trash" />
          </Button>
        </Card.Content>
      </Card>
    ))
  }

  render() {
    return (
      <div>
        <Header as="h1"> Products </Header>
        <Link to="/products/new">
          <Button icon color="black">
            <Icon name="add" />
          </Button>
        </Link>
        <hr />
        <br />
        <Card.Group>
          {this.renderProducts()}
        </Card.Group>
      </div>

    )
  }
}


export default Products;