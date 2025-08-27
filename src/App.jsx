// import React from "react";
// import Home from "./pages/Home";
// import GuidancePage from "./pages/GuidancePage";


// export default function App() {
//   return (
//     <>
//       <Home />
//       <GuidancePage />
//     </>
//   );
// }


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GuidancePage from "./pages/GuidancePage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/guidance" element={<GuidancePage />} />
      </Routes>
    </Router>
  );
}
