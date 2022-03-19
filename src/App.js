import { useState } from 'react';
import './App.css';
import AllProducts from './Components/AllProducts/AllProducts';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';




function App() {

  const [count, setCount] = useState(0)

  const addCount = () =>{
    setCount(count + 1)
  }

  return (
    <div className="App">
      <Header count={count} ></Header>
      <AllProducts addCount={addCount} ></AllProducts>
      <Footer/>
    </div>
  );
}

export default App;
