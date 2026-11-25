const Localizacao = () => {
  const googleMapsEmbed =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.413349465657!2d-51.10783268488098!3d-29.987456241834793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951f6ccd3c9b1c97%3A0x8a0a1e1e0e0e0e0e!2sPatas%20%26%20Pelos%20Est%C3%A9tica%20Animal!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr";

  const googleMapsDirections =
    "https://www.google.com/maps/dir/?api=1&destination=Rua+Tenente+Eugenio+Duarte+808+Porto+Verde+Alvorada-RS";

  const whatsappMessage = "Olá! Gostaria de agendar um horário para meu pet na Patas & Pelos Estética Animal.";
  const whatsappLink = `https://wa.me/5551980429176?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="localizacao" className="py-20 md:py-32 bg-sage-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Estamos esperando <span className="text-terracotta-400 italic">por vocês!</span>
          </h2>
          <p className="text-lg text-sage-300">
            Venha nos conhecer e veja o cuidado que seu pet merece.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-2xl text-sage-900">
            <h3 className="text-xl font-bold mb-2">Patas & Pelos Estética Animal</h3>
            <address className="mb-6 text-sage-700 space-y-2">
              <p>Rua Tenente Eugênio Duarte, 808</p>
              <p>Porto Verde, Alvorada - RS</p>
              <p>CEP 94858-390</p>
            </address>
            <p className="mb-4 text-sage-700">
              Tel/WhatsApp: <span className="font-semibold">(51) 98042-9176</span>
            </p>
            <p className="mb-6 text-sage-700">
              Aberto até as 19h
            </p>

            <div className="flex gap-4">
              <a href={googleMapsDirections} target="_blank" rel="noopener noreferrer" className="flex items-center bg-sage-700 text-white px-6 py-3 rounded-xl hover:bg-sage-800 transition-colors">
                <span className="mr-2">📍</span> Como chegar
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-whatsapp-500 text-white px-6 py-3 rounded-xl hover:bg-whatsapp-600 transition-colors">
                💬 Agendar pelo WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl aspect-video bg-sage-100">
            <iframe
              src={googleMapsEmbed}
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa do Google da Patas & Pelos"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Localizacao;