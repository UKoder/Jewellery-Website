import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Company from './pages/Company';
import GroupCompany from './pages/GroupCompany';
import OnlineShopping from './pages/OnlineShopping';
import CareersPage from './pages/CareersPage';
import OurStores from './pages/OurStores';
import ContactUs from './pages/ContactUs';
import ChairmanMessage from './pages/ChairmanMessage';
import MDMessage from './pages/MDMessage';
import Schemes from './pages/Schemes';
import SubsidiaryPage from './pages/SubsidiaryPage';
import Openings from './pages/Openings';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/group" element={<GroupCompany />} />
          <Route path="/shop" element={<OnlineShopping />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/stores" element={<OurStores />} />
          <Route path="/openings" element={<Openings />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/chairman" element={<ChairmanMessage />} />
          <Route path="/md" element={<MDMessage />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/group/:id" element={<SubsidiaryPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
