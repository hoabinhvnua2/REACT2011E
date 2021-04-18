import produce from "immer";

const initialProduct = {
  data: [],
  err: "",
  isLoading: false,
};

const product = (state = initialProduct, action) =>
  produce(state, (draf) => {
    const { type, payload } = action;
    switch (type) {
      case "GET_PRODUCT":
        draf.isLoading = true;
        break;
      case "GET_PRODUCT_SUCCESS":
        draf.data = payload;
        draf.isLoading = false;
        break;
      case "GET_PRODUCT_ERR":
        draf.err = payload
        draf.isLoading =  false
        break;
      default:
        return;
    }
  });
export default product;
