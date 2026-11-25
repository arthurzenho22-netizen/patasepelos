import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const whatsappMessage = "Olá! Gostaria de agendar um horário para meu pet na Patas & Pelos Estética Animal.";
  const whatsappLink = `https://wa.me/5551980429176?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <header className="fixed top-0 left-0 right-0 bg-cream-50 shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-sage-700">Patas & Pelos</h1>
            <span className="text-xs text-sage-600 uppercase tracking-wider">Estética Animal</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollTo('inicio')} className="text-sage-700 hover:text-sage-900 transition-colors">Início</button>
            <button onClick={() => scrollTo('servicos')} className="text-sage-700 hover:text-sage-900 transition-colors">Serviços</button>
            <button onClick={() => scrollTo('diferenciais')} className="text-sage-700 hover:text-sage-900 transition-colors">Diferenciais</button>
            <button onClick={() => scrollTo('sobre')} className="text-sage-700 hover:text-sage-900 transition-colors">Sobre</button>
            <button onClick={() => scrollTo('galeria')} className="text-sage-700 hover:text-sage-900 transition-colors">Galeria</button>
            <button onClick={() => scrollTo('avaliacoes')} className="text-sage-700 hover:text-sage-900 transition-colors">Avaliações</button>
            <button onClick={() => scrollTo('localizacao')} className="text-sage-700 hover:text-sage-900 transition-colors">Localização</button>
          </nav>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center bg-whatsapp-500 text-white px-6 py-3 rounded-full hover:bg-whatsapp-600 transition-colors">
            <MessageCircle size={20} className="mr-2" />
            Agendar pelo WhatsApp
          </a>

          <button onClick={toggleMenu} className="md:hidden text-sage-700">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <button onClick={() => scrollTo('inicio')} className="block w-full text-left text-sage-700 hover:text-sage-900">Início</button>
            <button onClick={() => scrollTo('servicos')} className="block w-full text-left text-sage-700 hover:text-sage-900">Serviços</button>
            <button onClick={() => scrollTo('diferenciais')} className="block w-full text-left text-sage-700 hover:text-sage-900">Diferenciais</button>
            <button onClick={() => scrollTo('sobre')} className="block w-full text-left text-sage-700 hover:text-sage-900">Sobre</button>
            <button onClick={() => scrollTo('galeria')} className="block w-full text-left text-sage-700 hover:text-sage-900">Galeria</button>
            <button onClick={() => scrollTo('avaliacoes')} className="block w-full text-left text-sage-700 hover:text-sage-900">Avaliações</button>
            <button onClick={() => scrollTo('localizacao')} className="block w-full text-left text-sage-700 hover:text-sage-900">Localização</button>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center bg-whatsapp-500 text-white px-6 py-3 rounded-full justify-center">
              <MessageCircle size={20} className="mr-2" />
              Agendar pelo WhatsApp
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;