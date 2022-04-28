import { useCallback } from "react";
import {
  ADD_CART,
  DELETE_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "../constants/action-types";
import Cart from "../../utils/Cart";

const initialState = {
  cart: localStorage.getItem("cart") ? Cart.get() : [],
  numberCart: 0,
};
if (initialState.cart) {
  let _quantity = 0;
  initialState.cart.map((item) => {
    _quantity += item.quantity;
  });
  initialState.numberCart = _quantity;
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CART:
      if (state.cart.length === 0) {
        let _cart = {
          id: action.payload.id,
          quantity: 1,
          name: action.payload.name,
          image: action.payload.img,
          price: action.payload.price,
        };
        return Object.assign({}, state, {
          cart: state.cart.concat(_cart),
          numberCart: state.numberCart + 1,
          local: Cart.add([...state.cart, _cart]),
        });
      } else {
        let check = false;

        state.cart.map((item, key) => {
          if (item.id === action.payload.id) {
            state.cart[key].quantity++;
            check = true;
          }
        });

        if (!check) {
          let _cart = {
            id: action.payload.id,
            quantity: 1,
            name: action.payload.name,
            image: action.payload.img,
            price: action.payload.price,
          };
          return Object.assign({}, state, {
            cart: state.cart.concat(_cart),
            numberCart: state.numberCart + 1,
            local: Cart.add([...state.cart, _cart]),
          });
        }
      }

      return {
        ...state,
        numberCart: state.numberCart + 1,
        local: Cart.add([...state.cart]),
      };

    case DECREASE_QUANTITY:
      let currentState = state.cart;
      currentState.map((item, key) => {
        if (item.id === action.payload) {
          if (currentState[key].quantity >= 2) {
            state.numberCart--;
            currentState[key].quantity--;
          }
        }
      });
      Object.assign(state.cart, []);

      return {
        ...state,
        cart: [...currentState],
        local: Cart.add([...state.cart]),
      };

    case INCREASE_QUANTITY:
      let currentCart = state.cart;
      currentCart.map((item, key) => {
        if (item.id === action.payload) {
          currentCart[key].quantity++;
        }
      });
      Object.assign(state.cart, []);

      return {
        ...state,
        cart: [...currentCart],
        numberCart: state.numberCart + 1,
        local: Cart.add([...state.cart]),
      };

    case DELETE_CART:
      let quantity_;
      state.cart.map((item, key) => {
        if (item.id === action.payload) {
          quantity_ = state.cart[key].quantity;
        }
      });

      return {
        ...state,
        numberCart: state.numberCart - quantity_,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
        local: Cart.add(
          state.cart.filter((cartItem) => cartItem.id !== action.payload)
        ),
      };

    default:
      return state;
  }
}

export default rootReducer;
