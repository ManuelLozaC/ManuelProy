
import Home from '../../screens/Home.jsx'
import LandingPage from '../../screens/LandingPage.jsx'
import Products from '../../screens/Products.jsx'
import About from '../../screens/About.jsx'
import Think from '../../screens/Think.jsx'
import Login from '../../screens/Login.jsx'

import Counter from '../Counter/Counter.jsx'

import { Routes } from 'react-router'
import { Route } from 'react-router'
const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="products" element={<Products/>}/>
            <Route path="think" element={<Think/>}/>
            <Route path="counter" element={<Counter/>}/>
            <Route path="about" element={<About/>}/>
        </Routes>
    );
}

export default Router;