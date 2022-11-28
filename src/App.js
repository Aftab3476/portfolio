
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Work from './Components/Work';
import Data from './Components/Data';
import Services from './Components/Services';
import Experience from './Components/Experience';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import { Toaster } from 'react-hot-toast';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Work Data={Data} />
      <Experience />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
