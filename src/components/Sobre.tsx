import { Image, Heart, Sparkles } from 'lucide-react';
import { useState } from 'react';

const Sobre = () => {
  const [imageError, setImageError] = useState(false);

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

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section id="sobre" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-sage-900 mb-4">
              Um lugar onde seu pet é <span className="text-terracotta-600 italic">tratado com amor</span>.
            </h2>
            <p className="text-xl text-sage-700 mb-6">
              Na Patas & Pelos Estética Animal, acreditamos que cada pet merece ser tratado com carinho, atenção e respeito. Nosso objetivo é proporcionar momentos de cuidado e bem-estar, deixando seu companheiro limpo, cheiroso e ainda mais bonito.
            </p>
          </div>

          <div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-terracotta-100 to-sage-50 rounded-3xl"></div>
              <div className="relative inset-0 rounded-3xl overflow-hidden">
                {!imageError ? (
                  <img
                    src="https://images.unsplash.com/photo-1601758125910-81f5f79a6729?w=800&h=900&fit=crop&crop=center"
                    alt="Profissional cuidando de cachorro com higiene e carinho"
                    className="w-full h-[400px] md:h-[450px] object-cover rounded-3xl"
                    onError={handleImageError}
                  />
                ) : (
                  <div className="w-full h-[400px] md:h-[450px] rounded-3xl bg-gradient-to-br from-terracotta-100 via-cream-100 to-sage-100 flex flex-col items-center justify-center p-8">
                    <div className="w-24 h-24 rounded-full bg-terracotta-100 flex items-center justify-center mb-6">
                      <Heart className="text-terracotta-500" size={48} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-sage-900 text-center mb-3">
                      Cuidado Profissional
                    </h3>
                    <p className="text-sage-600 text-center text-lg max-w-md">
                      Atendimento especializado com carinho e dedicação para o seu pet
                    </p>
                    <div className="mt-6 flex items-center justify-center gap-2">
                      <Sparkles className="text-terracotta-400" size={20} />
                      <Sparkles className="text-terracotta-400" size={20} />
                      <Sparkles className="text-terracotta-400" size={20} />
                    </div>
                  </div>
                )}
              </div>
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur rounded-xl px-5 py-4 shadow-lg text-center">
                <h3 className="text-xl font-bold text-sage-900">Cuidado profissional</h3>
                <p className="text-sage-600 text-sm">Atendimento especializado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;