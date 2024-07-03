import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Table from "./components/Table";
import Layout from "./Layoutt";
import Detail from "./components/Detail";

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="airport" element={<Table />} />
          <Route path="airport/:name" element={<Detail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
