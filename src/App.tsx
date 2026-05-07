import './index.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Sobre } from './components/Sobre';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { WhatsAppCTA } from './components/WhatsAppCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="font-outfit">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Sobre />
        <Testimonials />
        <FAQ />
        <WhatsAppCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
