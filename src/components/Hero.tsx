import { MessageCircle } from 'lucide-react';

const Hero = () => {
  const whatsappLink = "https://wa.me/5551980429176";
  const generalMessage = "Olá! Gostaria de agendar um horário para meu pet na Patas & Pelos Estética Animal.";
  const whatsappMessage = `https://wa.me/5551980429176?text=${encodeURIComponent(generalMessage)}`;

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
  };

  return (
    <section id="inicio" className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-cream-50 via-cream-100 to-sage-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center bg-white/80 rounded-full px-4 py-2 shadow-sm mb-6">
              <span className="text-amber-500 mr-2">★</span>
              <span className="font-semibold text-sage-700">4,9</span>
              <span className="text-sage-600 ml-2 text-sm">no Google</span>
              <span className="text-sage-600 ml-2 text-sm">• 114 avaliações</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-sage-900 mb-6 leading-tight">
              Seu pet merece um cuidado <span className="text-terracotta-600 italic">especial</span>.
            </h2>
            <p className="text-xl text-sage-700 mb-8 max-w-lg">
              Banho, tosa e carinho em cada detalhe. Na Patas & Pelos, seu melhor amigo recebe todo o cuidado que merece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={whatsappMessage} target="_blank" rel="noopener noreferrer" className="bg-whatsapp-500 text-white px-8 py-4 rounded-full hover:bg-whatsapp-600 transition-all hover:scale-105 flex items-center justify-center">
                <MessageCircle size={24} className="mr-2" />
                Agendar horário
              </a>
              <button onClick={() => scrollTo('servicos')} className="bg-white text-sage-700 px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 border-2 border-sage-200">
                Conhecer serviços
              </button>
            </div>
          </div>

          <div className="animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-terracotta-200/30 to-transparent rounded-full blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&h=600&fit=crop&crop=center"
                alt="Cachorro sendo banhado com cuidado profissional"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur rounded-2xl px-6 py-4 shadow-lg">
                <p className="text-sage-900 font-semibold">Carinho na medida do seu pet</p>
                <p className="text-sage-600 text-sm">Cada cuidado é único e especial</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;