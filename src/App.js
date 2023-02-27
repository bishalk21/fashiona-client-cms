import "./app.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Body from "./components/body/Body";
import { SideMenu } from "./components/header/side-menu/SideMenu";

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

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Header />
      <SideMenu />
      <RouterProvider router={appRouter} />
      <Footer />
    </>
  );
}

export default App;
