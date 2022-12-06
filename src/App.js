import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

// import { HomeP } from "./pages/home/HomeP";
import { LandingPage } from "./pages/landing-page/LandingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/" element={<HomeP />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
