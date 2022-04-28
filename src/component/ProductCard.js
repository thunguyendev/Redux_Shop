import React from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/actions";
import { useTranslation } from "react-i18next";

const ProductCard = () => {
  const { t, i18n } = useTranslation();

  const items = [
    {
      id: 1,
      name: "Baby T-shirt",
      img: "https://cdn.shopify.com/s/files/1/0652/0011/products/product5_d27ec808-2521-447e-b028-0cd2506cf3a4_600x.jpg?v=1411365432",

      price: "$1200",
      quantity: 3,
    },
    {
      id: 2,
      name: "Cotton dress",
      img: "https://cdn.shopify.com/s/files/1/0652/0011/products/product10_2c05f4f5-f116-4c05-b2ff-f6bfea3e63ee_600x.png?v=1411365494",
      price: "$500",
      quantity: 5,
    },
    {
      id: 3,
      name: "Red dress",
      img: "https://cdn.shopify.com/s/files/1/0652/0011/products/test2_600x.png?v=1414230111https://cdn.shopify.com/s/files/1/0652/0011/products/test2_600x.png?v=1414230111",
      price: "$200",
      quantity: 13,
    },
    {
      id: 4,
      name: "Trousers",
      img: "https://cdn.shopify.com/s/files/1/0652/0011/products/product13_9244ed59-7483-4894-bbaf-a46478c7b2ec_600x.png?v=1411365110",
      price: "$900",
      quantity: 1,
    },
    {
      id: 5,
      name: "Trousers",
      img: "https://cdn.shopify.com/s/files/1/0652/0011/products/product13_9244ed59-7483-4894-bbaf-a46478c7b2ec_600x.png?v=1411365110",
      price: "$900",
      quantity: 3,
    },
  ];

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
              src={item.img}
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
