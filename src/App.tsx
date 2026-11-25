import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Diferenciais from './components/Diferenciais';
import Sobre from './components/Sobre';
import Galeria from './components/Galeria';
import Avaliacoes from './components/Avaliacoes';
import Localizacao from './components/Localizacao';
import Agendamento from './components/Agendamento';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

const App = () => {
  useEffect(() => {
    // Animações de scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Aplica animações a todos os elementos que não têm animate-fade-in ainda
    const elements = document.querySelectorAll('section');
    elements.forEach((el) => {
      if (!el.classList.contains('animate-fade-in')) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      <main>
        <Hero />
        <Services />
        <Diferenciais />
        <Sobre />
        <Galeria />
        <Avaliacoes />
        <Localizacao />
        <Agendamento />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default App;