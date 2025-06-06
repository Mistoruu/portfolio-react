import { useState } from "react";
import "./styles/App.css";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
