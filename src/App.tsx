import "./App.css";
import { Route, Routes } from "react-router";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/form" element={<div></div>} />
      </Routes>
    </>
  );
}

export default App;
