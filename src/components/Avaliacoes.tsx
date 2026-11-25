import { Star, MapPin } from 'lucide-react';

const Avaliacoes = () => {
  const reviews = [
    {
      text: "Voltou pra casa linda e cheirosa, todas as minhas expectativas foram atendidas.",
      stars: 5
    },
    {
      text: "Um lugar cheio de carinho, cuidado e dedicação com os animais.",
      stars: 5
    },
    {
      text: "Excelente atendimento e um ótimo trabalho. Nota 10!",
      stars: 5
    }
  ];

  const googleMapsLink = "https://www.google.com/maps/place/Patas+%26+Pelos+Est%C3%A9tica+Animal/@-29.987456,-51.107832,17z";

  return (
    <section id="avaliacoes" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sage-900 mb-4">
            Quem cuida, recebe <span className="text-terracotta-600 italic">carinho</span> de volta.
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="text-amber-400 fill-amber-400" size={24} />
            <Star className="text-amber-400 fill-amber-400" size={24} />
            <Star className="text-amber-400 fill-amber-400" size={24} />
            <Star className="text-amber-400 fill-amber-400" size={24} />
            <Star className="text-amber-400 fill-amber-400" size={24} />
            <span className="text-xl font-bold text-sage-900 ml-2">4,9 de 5 estrelas</span>
          </div>
          <p className="text-lg text-sage-700">114 avaliações no Google</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <div key={index} className="bg-sage-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-amber-400 fill-amber-400" size={20} />
                ))}
              </div>
              <p className="text-sage-800 italic">"{review.text}"</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-sage-700 text-white px-8 py-4 rounded-full hover:bg-sage-800 transition-colors"
          >
            <MapPin size={20} className="mr-2" />
            Ver avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Avaliacoes;