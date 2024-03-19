import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Allpages/Layout';
import Blogs from './Allpages/Blogs';
import Contact from './Allpages/Contact';
import NoPage from './Allpages/NoPage';
import About from './Allpages/About';
import Furnitures from './Allpages/Furnitures';
import Home from './Allpages/Home';
import SingleProduct from './Allpages/SingleProduct';
import SeeAll from './Allpages/SeeAll';
import SearchProduct from './Allpages/SearchProduct';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />      
          <Route path="Blogs" element={<Blogs />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Furnitures" element={<Furnitures />} />         
          <Route path="About" element={<About />} />
          <Route path="SeeAll" element={<SeeAll />} />
          <Route path="SearchProduct" element={<SearchProduct />} />
          <Route path="SingleProduct/:pid" element={<SingleProduct />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
