import { Route, Routes, Navigate } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

// Utils
import ScrollToTop from "./Utils/ScrollToTop";

// Pages
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import Sell from "./Pages/Sell/Sell";
import Purchase from "./Pages/Purchase/Purchase";  // Import the Purchase component
import Rates from "./Pages/Rates/Rates";
import AboutUs from "./Pages/AboutUs/AboutUs";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import Terms from "./Pages/Terms/Terms";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import ContactUs from "./Components/ContactUs/ContactUs";
import Login from "./Pages/auth/Login/Login";
import Register from "./Pages/auth/Register/Register";

// Context
import { useAuth } from "./contexts/authContext";
import PostDataProvider from "./Store/Sell-Data";

function App() {
  const { userLoggedIn } = useAuth(); // Authentication state from context

  return (
    <PostDataProvider>
      <ScrollToTop>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<AboutUs />} />

          {/* The "Sell" page should be accessible only if the user is logged in */}
          <Route
            path="/sell"
            element={
              userLoggedIn ? <Sell /> : <Navigate to="/login" replace />
            }
          />

          {/* Add the Purchase page route */}
          <Route path="/purchase" element={<Purchase />} />

          <Route path="/rate-list" element={<Rates />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Catch-all route for non-existent pages */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </PostDataProvider>
  );
}

export default App;
