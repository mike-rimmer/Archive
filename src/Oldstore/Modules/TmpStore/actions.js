export const upDateSnackBar = ({ commit, payload }) => {
  commit('UP_DATA_SNACKBAR', payload)
}

export const addToCart = ({ commit }, payload) => {
  commit('ADD_TO_CART', payload)
  commit('UP_DATE_SNACKBAR', { show: true })
}
