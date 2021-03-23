import logo from "./logo.svg";
import "./App.css";
import Products from "./components/Products";

// redux
// reduxjs-toolkit
// react-redux
// redux-devtools-extension

function App() {
  // redux bao gồm 3 thành phần chính
  // Store
  // reduce
  // action

  // Khởi tạo reducer
  // function rootReducer(
  //   initialState = {
  //     value: 0,
  //   },
  //   action
  // ) {
  //   switch (action.type) {
  //     case "CONG":
  //       return { value: initialState.value + 1 };
  //     case "TRU":
  //       return { value: initialState.value - 1 };
  //     default:
  //       return initialState;
  //   }
  // }
  // // khởi tạo store
  // const store = createStore(rootReducer);
  // // khởi tạo aciton
  // const action = {type: 'CONG'}
  // const actionTru = {type: 'TRU'}

  // store.dispatch(action)
  // store.dispatch(action)
  // store.dispatch(actionTru)

  // console.log("store", store.getState());

  return (
    <div className="App">
      <Products />
    </div>
  );
}

export default App;
