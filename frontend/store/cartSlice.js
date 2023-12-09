const { createSlice } = require("@reduxjs/toolkit");



export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find((p) => p.id === action.payload.id);

      if (item) {
        item.quantity++;
        item.attributes.price = item.oneQuantityPrice * item.quantity;
      } else {
        // Agregar elemento al carrito
        state.cartItems.push({...action.payload, quantity: 1});

        // Agregar elementos al almacen local
        const cartItemsString = JSON.stringify(state.cartItems);
        localStorage.setItem('cartItems', cartItemsString);
      }

    },
    updateCart: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {

        if(item.id === action.payload.id) {
          if(action.payload.key === "quantity") {
            item.attributes.price = item.oneQuantityPrice * action.payload.val;
          }

          return {...item, [action.payload.key]: action.payload.val}
        }

        return item;
      });

      // Actualizar elementos del almacen local
      const cartItemsString = JSON.stringify(state.cartItems);
      localStorage.setItem('cartItems', cartItemsString);

    },
    deleteFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id );

      // Actualizar elementos del almacen local
      const cartItemsString = JSON.stringify(state.cartItems);
      localStorage.setItem('cartItems', cartItemsString);

    },
    emptyCart: (state, action) => {
      state.cartItems = [];

      // Eliminar todos los elementos del almacen local
      localStorage.removeItem('cartItems');

    },
    getCartInitialState: (state, action) => {
      // Recuperar datos del almacenamiento local
      const dataFromLocalStorage = localStorage.getItem('cartItems');

      // Verificar si hay datos almacenados
      const cartItemsFromLS = dataFromLocalStorage ? JSON.parse(dataFromLocalStorage) : [];

      // Setear el estado inicial del carrito
      state.cartItems = cartItemsFromLS;
    },
  },
});

export const { addToCart, updateCart, deleteFromCart, emptyCart, getCartInitialState } = cartSlice.actions;

export default cartSlice.reducer;