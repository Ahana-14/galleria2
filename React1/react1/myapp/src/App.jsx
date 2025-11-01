import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import ProductCatalog from "./pages/ProductCatalog";
import Product from "./pages/Product";
import SearchResults from "./pages/SearchResults";
import SaleCategories from "./pages/SaleCategories";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/Dashboards/AdminDashboard";
import UserDashboard from "./pages/Dashboards/UserDashboard";
import SellerDashboard from "./pages/Dashboards/SellerDashboard";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import ForgotPasswordPage from "./pages/Auth/ForgotPasswordPage";
import Settings from "./pages/Settings";
import Placeholder from "./pages/Placeholder";
import LanguageSettings from "./pages/Settings/LanguageSettings";
import ThemeSettings from "./pages/Settings/ThemeSettings";
import DataPrivacy from "./pages/Settings/DataPrivacy";
import HelpCenter from "./pages/HelpCenter";
import Brands from "./pages/Brands";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/products" element={<ProductCatalog />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/sale-categories" element={<SaleCategories />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/offers" element={<SaleCategories />} />
          <Route path="/categories" element={<ProductCatalog />} />
          <Route path="/orders" element={<Profile />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/settings/language" element={<LanguageSettings />} />
          <Route path="/settings/theme" element={<ThemeSettings />} />
          <Route path="/settings/privacy" element={<DataPrivacy />} />
          <Route path="/logout" element={<Placeholder title="Logout" />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/seller-dashboard" element={<SellerDashboard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
