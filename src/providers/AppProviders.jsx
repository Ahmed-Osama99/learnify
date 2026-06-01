import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "../context/ThemeContext";
import { HelmetProvider } from "react-helmet-async";
const AppProviders = ({ children }) => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter basename="/">{children}</BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default AppProviders;
