import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/NavBar";
import { Route, Routes } from "react-router";
import Home from "./components/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="mt-[9rem]">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
