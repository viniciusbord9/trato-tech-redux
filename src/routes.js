import Category from 'pages/Category';
import Checkout from 'pages/Checkout';
import Home from 'pages/Home';
import Standard from 'pages/Standard';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Standard />}>
                    <Route index element={<Home />}/>
                    <Route path='/category/:categoryId' element={<Category />} />
                    <Route element={<Checkout />} />
                </Route>    
            </Routes>
        </BrowserRouter>
    )
}