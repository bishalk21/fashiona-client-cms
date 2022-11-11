import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { HomeP } from "./pages/home/HomeP";

function App() {
  return (
    <div className="App">
      {" "}
      <BrowserRouter>
        {" "}
        <Routes>
          {" "}
          <Route path="/" element={<HomeP />} />{" "}
        </Routes>{" "}
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
