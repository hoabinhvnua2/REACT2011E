import logo from "./logo.svg";
import { Component } from "react";
import "./App.scss";
import Alert from "./components/Alert";
import { Button, Modal, Form, InputGroup } from "react-bootstrap";
import ProductLists from "./components/Product/ProductLists";
import nextId from "react-id-generator";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isShow: false,
      validated: false,
      formValue: {},
      products: []
    };
  }

  htmlId = nextId();

  handleClickOpenModal = () => {
    this.setState({
      isShow: true,
    });
  };

  handleClose = () => {
    this.setState({
      isShow: false,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      validated: true,
    });
    console.log(this.state.formValue)
    fetch("https://6050aa4a5346090017670332.mockapi.io/list-product", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: this.htmlId,
        product_name: this.state.formValue.productName,
        quantity: this.state.formValue.quantity,
        price: this.state.formValue.price,
      }),
    })
      .then((result) => result.json())
      .then((data) => {if(data) {
        this.handleClose()
        this.getProducts()
      }})
      .catch((e) => console.log(e));
  };

  handleInputQuantity = (e) => {
    this.setState({
      formValue: {
        ...this.state.formValue,
        quantity: e.target.value,
      },
    });
  };

  handleInputProduct = (e) => {
    this.setState({
      formValue: {
        ...this.state.formValue,
        productName: e.target.value,
      },
    });
  };

  handleInputPrice = (e) => {
    this.setState({
      formValue: {
        ...this.state.formValue,
        price: e.target.value,
      },
    });
  };

  getProducts = () => {
    fetch("https://6050aa4a5346090017670332.mockapi.io/list-product")
      .then((value) => value.json())
      .then(data => {
        this.setState({
            products: data
        })
      })
      .catch((e) => {
        console.log(e);
      });
  }

  componentDidMount() {
    this.getProducts()
  }

  render() {
    const { isShow, validated, products } = this.state;
    return (
      <>
        {/* Alert là 1 function component */}
        <Alert subject="Angular" age="20" />
        <Button
          type="button"
          variant="primary"
          onClick={this.handleClickOpenModal}
        >
          Thêm SP
        </Button>
        <ProductLists products={products}/>

        {/* Form add product */}
        <Modal show={isShow} onHide={this.handleClose}>
          <Form noValidate validated={validated} onSubmit={this.handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form.Row>
                <Form.Group md="4" controlId="validationCustom01">
                  <Form.Label>Tên sản phẩm</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Tên sản phẩm"
                    onInput={this.handleInputProduct}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group md="4" controlId="validationCustom02">
                  <Form.Label>Số lượng sản phẩm</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Số lượng"
                    name="quantity"
                    onInput={this.handleInputQuantity}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group md="4" controlId="validationCustomUsername">
                  <Form.Label>Giá sản phẩm</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Giá"
                    required
                    onInput={this.handleInputPrice}
                  />
                  <Form.Control.Feedback type="invalid">
                    Nhập giá sản phẩm.
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary">Close</Button>
              <Button type="submit">Submit form</Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </>
    );
  }
}

export default App;
