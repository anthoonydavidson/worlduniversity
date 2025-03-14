import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx'
import { DataProvider } from './contexts/DataContext.jsx';
import Details from './pages/Details.jsx';
import About from './pages/About.jsx';
import Search from './pages/Search.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

function App() {
  return (
    <DataProvider>

      <BrowserRouter>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/country/:id' element={<Details />} />
          <Route path='/about' element={<About />} />
          <Route path='/search' element={<Search />} />
        </Routes>

        <Footer />
      </BrowserRouter>

    </DataProvider>
  );
}

export default App;
