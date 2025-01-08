export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  //itemPrice
  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  //shoppingPrice itemPrice > 500 ? 0 : 40
  state.shippingPrice = addDecimals(state.itemsPrice > 500 ? 0 : 40);

  // taxPrice 18% tax
  state.taxPrice = addDecimals((state.itemsPrice / 100) * 18);

  //totalPrice
  state.totalPrice = addDecimals(
    Number(state.itemsPrice) +
      Number(state.shippingPrice) +
      Number(state.taxPrice)
  );
  localStorage.getItem("cart", JSON.stringify(state));
  return state;
};
