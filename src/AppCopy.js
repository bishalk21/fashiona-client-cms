import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";

// 1. header
//    - specials small head - comp
//    - title, logo, search, account sign up - comp
//    - title, logo, search, cart, account sign out - comp

// 2. Body

//  * After login
//    - landing home - page
//    - most viewed product - page
//    - top categories - page
//    - best seller - page
//    - recent products - page
//    - one product category - page
//    - top rated product - page

// 2. Footer
//    - top brands - comp
//    - newsletter - comp
//    - footer - comp

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
