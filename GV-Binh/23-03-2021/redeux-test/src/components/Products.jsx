import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../redux/actions/Product";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);
  const productList = useSelector((state) => state.productReduce.products);
  const loading = useSelector((state) => state.productReduce.loading);

  console.log(productList);

  return (
    <>
      {loading && (
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      )}

      <table className="table">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Tên SP</th>
            <th scope="col">Số lượng</th>
            <th scope="col">Giá</th>
          </tr>
        </thead>
        <tbody>
          {productList &&
            productList.map((item, index) => (
              <tr key={index.toString()}>
                <th scope="row">{index + 1}</th>
                <td>{item.product_name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Products;
