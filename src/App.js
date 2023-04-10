import "./App.scss";
import Header from "../src/components/Header";
import SearchBar from "../src/components/SearchBar/SearchBar";
import { Home } from "../src/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import AddAudition from "./components/AddAudition/AddAudition";
// import { Register } from "../src/components/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <SearchBar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addaudition" element={<AddAudition />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
