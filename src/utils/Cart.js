var Cart = {
    add: (data) => {
        localStorage.setItem('cart', JSON.stringify(data))
    },
    get: () => {
        return JSON.parse(localStorage.getItem('cart'))
    }
}
export default Cart;