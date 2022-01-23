import './App.css';
import Navbar from './components/Navbar.jsx'
import HeadContent from './components/HeadContent.jsx'
import Features from './components/Features.jsx'
import Testimonials from './components/Testimonials.jsx'
import Pricing from './components/Pricing.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeadContent />
      <Features />
      <Testimonials/>
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
