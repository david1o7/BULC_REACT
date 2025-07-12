import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Component/Home page/HomePage.jsx";
import ContactPage from "./Component/contact page/ContactPage.jsx";
import Quiz from "./Component/Quiz page/Quiz.jsx";
import Team from "./Component/Team/Team.jsx"
import AboutUs from "./Component/About page/AboutUs.jsx";
import CgpaCalc from "./Component/CGPA/CgpaCalc.jsx";
import CodingDictionary from "./Component/Code dictionary/CodingDict.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<div className="contain-unknownText">
                                  <h1 className="page-unknown">404 - Page Not Found</h1>
                                  </div>} 
                                  />
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/contact" element={<ContactPage />}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/cgpa" element={<CgpaCalc/>}/>
        <Route path="/dictionary" element={<CodingDictionary/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;