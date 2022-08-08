import axios from 'axios';


export const fetchProducts = () => {
    return axios.get(process.env.REACT_APP_PRODUCTS_API_URL);
}

export const createProduct = (product) => {
    return axios.post(process.env.REACT_APP_PRODUCTS_API_URL, product);
}

export const getProductId = (productId) => {
    return axios.get(process.env.REACT_APP_PRODUCTS_API_URL + '/' + productId);
}

export const deleteProduct = (productId) => {
    return axios.delete(process.env.REACT_APP_PRODUCTS_API_URL + '/' + productId);
}

export const updateProduct = (productId, product) => {
    return axios.put(process.env.REACT_APP_PRODUCTS_API_URL + '/' + productId, product);
}
