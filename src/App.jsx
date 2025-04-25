import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { dividerClasses } from '@mui/material';
import Navigation from './components/Navigation/nav';
import HomePage from './pages/HomePage/HomePage';
import Product from './components/Product/Product';
import Footer from './components/Footer/Footer';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="main">
            <Navigation />
            <div>
                {/* <HomePage /> */}
                <Product/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
