
import './App.css';
import Product from './Product';
import { useState } from 'react'


function App() {
  const [count, setCount] = useState(4)
    const [isLog, setIslog] = useState(false)
    

  const handleClick = () => {
    setCount(count + 1);
  };
  const handleLogClick = () => {
    setIslog(!isLog);

  }


  return (
    <div className="App">
      {isLog  ? <p>we are looged in</p>: <p>you are looged out, please log in</p> }
      <button onClick={handleLogClick}>Login</button>
      <Product myCount = {count} handleClick = {handleClick} />

    </div>
  );
}

export default App;
