import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Housing from "./pages/housing/Housing";
import About from "./pages/about/About";
import NotFound from './pages/404/404.js';
import "./style/index.css";

export default function App() {
    return (
        <React.Fragment>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/kasa" element={<Home />} />
                <Route path="/housing/:housingId" element={<Housing />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </React.Fragment>
    );
}
