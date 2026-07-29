import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import Categories from "./pages/categories/Categories";
import Instructors from "./pages/Instructors/Instructors";
import SignIn from "./pages/Sign in/SignIn";
import SignUp from "./pages/Signup/SignUp";
function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Courses />} path="/courses" />
        <Route element={<Categories />} path="/categories" />
        <Route element={<Instructors />} path="/instructors" />
        <Route element={<SignIn/>} path="/login"/>
        <Route element={<SignUp/>} path="/signup"/>
      </Routes>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
