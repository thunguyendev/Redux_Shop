import { ADD_CART } from "../constants/action-types";
import { DELETE_CART } from "../constants/action-types";
import { INCREASE_QUANTITY } from "../constants/action-types";
import { DECREASE_QUANTITY } from "../constants/action-types";

export function addCart(payload) {
  return { type: ADD_CART, payload };
}
export function deleteCart(payload) {
  return {
    type: DELETE_CART,
    payload,
  };
}
export function increaseQuantity(payload) {
  return {
    type: INCREASE_QUANTITY,
    payload,
  };
}
export function decreaseQuantity(payload) {
  return {
    type: DECREASE_QUANTITY,
    payload,
  };
}
