import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Models from './components/Models';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-rose-600/40 selection:text-white">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_0%,rgba(244,63,94,0.12),transparent_60%)]" />
      <Navbar />
      <Hero />
      <Features />
      <Models />
      <Footer />
    </div>
  )
}

export default App
