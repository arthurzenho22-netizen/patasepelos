import { Heart, HeartHandshake, Eye, Sparkles } from 'lucide-react';

const Diferenciais = () => {
  const diferencias = [
    {
      icon: HeartHandshake,
      title: "Atendimento carinhoso",
      description: "Cada interação é feita com carinho e respeito."
    },
    {
      icon: Heart,
      title: "Cuidado individual",
      description: "Atenção personalizada para cada pet."
    },
    {
      icon: Sparkles,
      title: "Higiene e estética",
      description: "Serviços completos de higiene e beleza."
    },
    {
      icon: Eye,
      title: "Atenção aos detalhes",
      description: "Pequenos detalhes fazem grande diferença."
    }
  ];

  return (
    <section id="diferenciais" className="py-20 md:py-32 bg-sage-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sage-900 mb-4">
            Mais do que estética, <span className="text-terracotta-600 italic">cuidado</span> de verdade.
          </h2>
          <p className="text-xl text-sage-700">
            Por trás de cada serviços está um verdadeiro cuidado pelo seu companheiro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {diferencias.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4 flex justify-center">
                <div className="bg-sage-100 rounded-full p-4">
                  <item.icon size={32} className="text-sage-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-sage-900 mb-2">{item.title}</h3>
              <p className="text-sage-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;