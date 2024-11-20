import './App.css';
import AboutUs from './pages/AboutUs';
import ContactPage from './pages/ContactPage';
import SegmentExpertise from './SegmentExpertise';
import OurProducts from './pages/OurProducts';
 
import OurOffering from './pages/OurOffering';

function App() {
  return (
    <div className="App">
      <AboutUs />
      <OurOffering/>
      <SegmentExpertise />
      <OurProducts/>
      <ContactPage />
    </div>
  );
}

export default App;
