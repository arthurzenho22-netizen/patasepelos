import { useState } from 'react';
import { X } from 'lucide-react';

const Galeria = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&h=400&fit=crop&crop=center",
      alt: "Cachorro feliz após banho e tosa",
      span: false
    },
    {
      src: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop&crop=center",
      alt: "Cachorro sendo cuidado com carinho",
      span: false
    },
    {
      src: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&h=800&fit=crop&crop=center",
      alt: "Gatinho fofo sendo cuidado",
      span: true
    },
    {
      src: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop&crop=center",
      alt: "Cachorro fofo após tosa na tesoura",
      span: false
    },
    {
      src: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=600&h=800&fit=crop&crop=center",
      alt: "Gato lindo após cuidados estéticos",
      span: true
    },
    {
      src: "https://images.unsplash.com/photo-1589941013453-ec89f0a34b07?w=600&h=400&fit=crop&crop=center",
      alt: "Cachorro limpo e feliz após banho",
      span: false
    }
  ];

  return (
    <section id="galeria" className="py-20 md:py-32 bg-sage-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sage-900 mb-4">
            Momentos de <span className="text-terracotta-600 italic">cuidado</span> e fofura
          </h2>
          <p className="text-xl text-sage-700">
            Fotos de nossos atendimentos especiais.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className={`relative overflow-hidden rounded-2xl shadow-lg ${image.span ? 'sm:col-span-2 lg:col-span-1 lg:row-span-2' : ''}`}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 lg:h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedImage(image.src)}
              />
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <button className="absolute top-4 right-4 text-white">
              <X size={32} />
            </button>
            <img src={selectedImage} alt="Imagem ampliada" className="max-w-full max-h-full rounded-2xl" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Galeria;