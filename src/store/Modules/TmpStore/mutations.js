export const UP_DATE_SNACKBAR = (state, payload) => {
  state.snackbar.show = payload.show
}

export const ADD_TO_CART = (state, payload) => {
  // Determine if array exists
  var { namepart, qty, price, } = payload
  if (state.cart.length > 0) {
    for (let i = 0; i < state.cart.length; i++) {
      if (state.cart[i].name == payload.name) {
        state.cart[i].qty += 1
        return
      } else {
        state.cart.push({ namepart, qty, price })
        return
      }
    }
  }
  else {
    state.cart.push({ namepart, qty, price })
  }
}



