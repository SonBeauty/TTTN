import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrease, delCart, increase } from "../redux/action";
import { NavLink } from "react-router-dom";

function Cart() {

  const products = useSelector((state) => state.handleCart);

  const handleIncrease = (product) => {
    dispatch(increase(product));
  };

  const handleDecrease = (product) => {
    dispatch(decrease(product));
  };
  const dispatch = useDispatch();
  const delProduct = (product) => {
    dispatch(delCart(product));
  };
  let total = 0;
  products.forEach((product) => {
    total = total + product.price * product.qty;
  });

  const cartEmpty = () => {
    return <h3 className="container">Giỏ hàng trống</h3>;
  };
 
  const cartItem = (cartItem) => {
    return (
      <>
        <div className="container pt-5" key={cartItem.id}>
          <div className="row bg-light">
            <div className="col-md-4 justify-content-center">
              <img
                src={cartItem.image}
                alt={cartItem.title}
                height="150px"
                width="120px"
              />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <p className="lead fw-bold">
                <button
                  className="btn btn-outline-dark me-3"
                  onClick={() => handleDecrease(cartItem)}
                >
                  <i className="fa fa-minus"></i>
                </button>{" "}
                {cartItem.qty}{" "}
                <button
                  className="btn btn-outline-dark ms-3"
                  onClick={() => handleIncrease(cartItem)}
                >
                  <i className="fa fa-plus"></i>
                </button>
                <br />
                <br />
                Giá tiền: {cartItem.qty * cartItem.price}
              </p>
            </div>
            <div
              className="btn btn-danger col-md-1 fw-bold  "
              style={{ margin: "5.5rem" }}
              onClick={() => delProduct(cartItem)}
            >
              X
            </div>
          </div>
        </div>
      </>
    );
  };
  const checkoutButton = () => {
    return (
      <div className="container">
        <div className="text-success">
          <h3>Tổng tiền: {total}</h3>
        </div>
        <div className="row">
          <NavLink
            to="/checkout"
            className="btn btn-outline-warning mx-auto mb-5 w-25 fw-bold"
          
          >
            Đặt hàng
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <>
      {products.length === 0 && cartEmpty()}
      {products.length !== 0 && products.map(cartItem)}
      {products.length !== 0 && checkoutButton()}
    </>
  );
}

export default Cart;
