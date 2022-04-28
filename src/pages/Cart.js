import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCart,
  decreaseQuantity,
  increaseQuantity,
} from "../redux/actions";
import { useTranslation } from "react-i18next";
import Header from "../component/Header";
import Line from "../component/Line";
import Navbar from "../component/Navbar";
import HeaderBottom from "../component/HeaderBottom";
import Footer from "../component/Footer";

const Cart = () => {
  const dispatch = useDispatch();

  const deleteItem = (params) => {
    dispatch(deleteCart(params));
  };

  const decreaseQuaItem = (params) => {
    dispatch(decreaseQuantity(params));
  };

  const increaseQuaItem = (params) => {
    dispatch(increaseQuantity(params));
  };

  const getCart = useSelector((state) => state.cart);


  const { t, i18n } = useTranslation();

 

  return (
    <>
      <Header />
      <Line height={4} color={" #ebebeb"} />
      <Navbar />
      <HeaderBottom title={t("header_bottom.2")} />
      {/* <ul>
      
      {getCart.map((item, id) => (
        <li key={id}>
  
          {item.name}
          <br></br> <button
            onClick={() => {
              decreaseQuaItem(item.id);
            }}
          >
            -
          </button>
          <span>{item.quantity}</span>{" "}
          <button
            onClick={() => {
              increaseQuaItem(item.id);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              deleteItem(item.id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul> */}
      {getCart.map((item, id) => (
        <div key={id} className="product-cart-item col-lg-8 col-12">
          <img
            className="img"
            alt="product-img"
            src={item.image}
            height={200}
          />
          <div className="info">
            <p className="name">{item.name}</p>
            <p className="price">{item.price}</p>
            <button className="btn-in-de"
              onClick={() => {
                decreaseQuaItem(item.id);
              }}
            >
              -
            </button>
            <span className="quantity">{item.quantity}</span>
            <button className="btn-in-de"
              onClick={() => {
                increaseQuaItem(item.id);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                deleteItem(item.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      <Footer />
    </>
  );
};

export default Cart;
