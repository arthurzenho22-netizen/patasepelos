import { useEffect, useRef } from 'react';
import { MessageCircle, Heart } from 'lucide-react';
import { services } from '../services';

const Services = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardsRef.current) {
      cardsRef.current.querySelectorAll('.service-card').forEach((card) => {
        observer.observe(card);
      });
    }

    return () => observer.disconnect();
  }, []);

  const getWhatsAppLink = (message: string) => {
    return `https://wa.me/5551980429176?text=${encodeURIComponent(message)}`;
  };

  const getServiceIcon = (index: number) => {
    const icons = [Heart, Heart, Heart, Heart, Heart, Heart, Heart, Heart, Heart, Heart, Heart, Heart, Heart, Heart, Heart];
    const Icon = icons[index % icons.length];
    return <Icon size={32} className="text-terracotta-600" />;
  };

  return (
    <section id="servicos" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sage-900 mb-4">
            Um cuidado <span className="text-terracotta-600 italic">completo</span> para o seu pet
          </h2>
          <p className="text-xl text-sage-700">
            Serviços pensados para deixar seu companheiro ainda mais bonito, confortável e feliz.
          </p>
        </div>

        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card bg-cream-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 opacity-0"
            >
              <div className="mb-4">
                {getServiceIcon(index)}
              </div>
              <h3 className="text-xl font-bold text-sage-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sage-700 mb-4">
                {service.description}
              </p>
              <a
                href={getWhatsAppLink(service.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-terracotta-600 font-semibold hover:text-terracotta-700 transition-colors"
              >
                <MessageCircle size={18} className="mr-2" />
                Consultar pelo WhatsApp
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sage-600">
            Consulte valores e disponibilidade pelo WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;