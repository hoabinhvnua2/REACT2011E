import logo from './logo.svg';
import './App.scss';
import Alert from './components/Alert';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      {/* Alert là 1 function component */}
      <Alert subject="Angular" age="20" /> 
      <Product />
    </div>
  );
}

export default App;
