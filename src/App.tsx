import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { LoadingBar } from './components/layout/LoadingBar';
import { Footer } from './components/layout/Footer';
import { Breadcrumbs } from './components/navigation/Breadcrumbs';
import { Toaster } from 'react-hot-toast';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { ProductCatalog } from './pages/ProductCatalog';
import { ProductDetail } from './pages/ProductDetail';
import { useThemeStore } from './stores/themeStore';

export function App() {
  const { isDarkMode } = useThemeStore();

  return (
    <Router>
      <div className={`min-h-screen flex flex-col ${
        isDarkMode ? 'bg-deep-900 text-white' : 'bg-pastel-50 text-gray-900'
      }`}>
        <Header />
        <LoadingBar />
        <Breadcrumbs />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/connexion" element={<Login />} />
            <Route path="/inscription" element={<Signup />} />
            <Route path="/products" element={<ProductCatalog />} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Routes>
        </main>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            className: isDarkMode ? '!bg-deep-800 !text-white' : '!bg-pastel-50',
          }}
        />
      </div>
    </Router>
  );
}