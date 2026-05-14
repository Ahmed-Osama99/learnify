import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import Categories from "./pages/categories/Categories";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Courses />} path="/courses" />
        <Route element={<Categories />} path="/categories" />
      </Routes>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
