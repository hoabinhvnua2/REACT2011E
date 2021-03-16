import React, { Component } from "react";
import { Table } from "react-bootstrap";

class ProductLists extends Component {
  render() {
    const { products } = this.props;
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên sản phẩm</th>
            <th>Số lượng SP</th>
            <th>Giá SP</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product, index) => (
              <tr key={index.toString()}>
                <td>{index + 1}</td>
                <td>{product.product_name}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    );
  }
}

export default ProductLists;
