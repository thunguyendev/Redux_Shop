import React from "react";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { addCart } from "../redux/actions";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from 'react';

const ProductCard = () => {
  const { t, i18n } = useTranslation();

  const [items, setItems] = useState([]);

  useEffect(()=>{
      fetchProducts() 
  },[])

  const fetchProducts = async () => {
      await axios.get(`http://localhost:8000/api/products`).then(({data})=>{
      setItems(data)
      })
  }

  const dispatch = useDispatch();
  const addProduct = (params) => {
    dispatch(addCart(params));
  };
  return (
    <>
      {items.map((item, id) => (
        <div
          key={id}
          className="col-xl-3 col-md-4 col-sm-6 col-12 product-card-item"
        >
          <div className="product-container">
            <img
              key={id}
              className="product-img"
              alt="product-img"
              src={`http://localhost:8000/storage/images/${item.image}`}
              height={200}
            />

            <div className="bg-hover">
              <button
                type="submit"
                className="add-cart-btn"
                onClick={() => addProduct(item)}
              >
              {t("cart.1")}
              </button>
              <div className="img-bg-wrap"></div>
            </div>
          </div>

          <div className="product-info">
            <p className="product-name">{item.name}</p>
            <p className="product-price">{item.price}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
