import {createBrowserRouter } from "react-router-dom";
import LandingPage from "./landing_page/LandingPage.jsx";
import HomePage from './landing_page/home/HomePage.jsx'
import AboutPage from './landing_page/about/AboutPage.jsx';
import PricingPage from './landing_page/pricing/PricingPage.jsx';
import ProductPage from './landing_page/product/ProductPage.jsx';
import SignupPage from './landing_page/signup/SignUpPgae.jsx';
import SupportPage from './landing_page/support/SupportPage.jsx';

const router = createBrowserRouter([
  {path:"/",
    element:<LandingPage/>,
     children : [
      {
    index:true,
    element: <HomePage/>
  },
  {
    path:"about",
    element: <AboutPage/>
  },
  {
    path:"pricing",
    element: <PricingPage/>
  },
  {
    path:"product",
    element: <ProductPage/>
  },
  {
    path:"signup",
    element: <SignupPage/>
  },
  {
    path:"support",
    element: <SupportPage/>
  },

     ]
  }

]);

export default router;