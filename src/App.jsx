import { Routes, Route } from 'react-router-dom';
import AuthLayout from "./layout/AuthLayout";
import MainLayout from "./layout/MainLayout";
import Home from "./page/Home.jsx";
import LoginPage from './page/LoginPage.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";



function App() {
  return (
    <Routes>
      {/* Auth Layout for login, signup, etc. */}
      {/* Home page is not nested under this route anymore */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="]/signup" element={<SignupPage />} /> */}
      </Route>

      {/* Main Layout for the main app content */}
      {/* All pages that need a header/footer go here */}
      <Route element={<MainLayout />}>
        {/* The main page will be at the root URL (/) */}
        <Route path="/home" element={<Home />} />
        
        {/* Example: <Route path="/products" element={<ProductsPage />} /> */}
      </Route>

    </Routes>
  );
}

export default App;