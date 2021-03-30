export const getProduct = () => {
  return (dispatch) => {
    dispatch(request());
    fetch("https://6050aa4a5346090017670332.mockapi.io/list-product")
      .then((data) => data.json())
      .then((products) => {
        dispatch(success(products));
      })
      .catch((e) => {
        dispatch(error(e));
      });
  };

  function request() {
    return { type: "GET_PRODUCT" };
  }
  function success(product) {
    return { type: "GET_PRODUCT_SUCCESS", product };
  }
  function error(err) {
    return { type: "GET_PRODUCT_ERR", err };
  }
};

fetch().then(result => result.then()).catch()

const promiseApi = new Promise((res, rej) => res(2)).then().catch()

const useApi = () => {
    fetch("https://6050aa4a5346090017670332.mockapi.io/list-product") .then((data) => data.json())
    .then((products) => {
    //   dispatch(success(products));
    return true
    })
    .catch((e) => {
    //   dispatch(error(e));
    return false
    });
}
//async, await
getProduct = async () => {
    const products = await  fetch("https://6050aa4a5346090017670332.mockapi.io/list-product")
}

try {
    const products = await  fetch("https://6050aa4a5346090017670332.mockapi.io/list-product")
    //   dispatch(success(products));
} catch (error) {
    
}