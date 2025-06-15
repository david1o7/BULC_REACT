import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Component/Home page/HomePage.jsx";
import ContactPage from "./Component/contact page/ContactPage.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<div className="contain-unknownText">
                                  <h1 className="page-unknown">404 - Page Not Found</h1>
                                  </div>} 
                                  />
        <Route path="/contact" element={<ContactPage />}/>
      </Routes>
    </Router>
  );
}

export default App;