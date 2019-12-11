import React from 'react';
import axios from 'axios';
import { Form, Header, Button, Icon } from "semantic-ui-react";

class ProductForm extends React.Component {
  defaultValues = { name: "", price: "", description: "", department: "", };
  state = { ...this.defaultValues, };

  handleSubmit = (e) => {
    e.preventDefault();
    const product = { ...this.state, };
    axios.post("/api/products", product)
      .then( res => {
        this.props.history.push("/products");
      })
      this.setState({ ...this.defaultValues, });
  }

  handleChange = (e) => {
    const { target: { name, value, } } = e;
    this.setState({ [name]: value, });
  }

  render() {
    const { name, price, description, department, } = this.state;

    return (
      <div>
        <Button 
          icon
          color="black" 
          onClick={this.props.history.goBack}
        >
          <Icon name="long arrow alternate left" />
        </Button>
        <Header as="h1">New Product</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="Name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              label="Description"
              name="description"
              placeholder="Description"
              value={description}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              label="Department"
              name="department"
              placeholder="Department"
              value={department}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              label="Price"
              name="price"
              placeholder="Price"
              type="number"
              value={price}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Form.Button color="green">Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default ProductForm;