import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { dividerClasses } from '@mui/material';
import Navigation from './components/Navigation/nav';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import Product from './pages/Product/Product';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="main">
            <Navigation />
            <div>
                {/* <HomePage /> */}
                {/* <Product/> */}
                {/* <ProductDetail/> */}
                <Cart/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
