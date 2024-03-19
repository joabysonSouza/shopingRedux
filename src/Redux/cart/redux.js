import cartActionTypes from "./action-types";

const initialState = {
  products: [],
};

const cartReduce = (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.ADD_PRODUCTS:
      const productIsAlreadInCart = state.products.some(
        (product) => product.id === action.payload.id
      );

      if (productIsAlreadInCart) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      }
      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }],
      };

    case cartActionTypes.REMOVE_PRODUCTS:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    case cartActionTypes.INCREMENT_ITEM:
      return {
        ...state,
        products: [
          ...state.products.map((product) =>
            product.id === action.payload
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        ],
      };

    case cartActionTypes.DECREMENT_ITEM:
      return {
        ...state,
        products: [
          ...state.products.map((product) =>
            product.id === action.payload
              ? { ...product, quantity: product.quantity - 1 }
              : product
          ),
        ].filter((product) => product.quantity > 0),
      };

    default:
      return state;
  }
};

export default cartReduce;
