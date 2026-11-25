const Agendamento = () => {
  const whatsappMessage = "Olá! Gostaria de agendar um horário para meu pet na Patas & Pelos Estética Animal.";
  const whatsappLink = `https://wa.me/5551980429176?text=${encodeURIComponent(whatsappMessage)}`;

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
    <section className="py-24 md:py-32 bg-sage-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/80 rounded-full px-6 py-3 mb-8">
            <span className="text-sage-800 text-2xl mr-3">✨</span>
            <span className="font-semibold text-3xl text-white">Seu pet merece esse momento.</span>
          </div>
          <p className="text-lg text-sage-300 mb-8 max-w-2xl mx-auto">
            Agende um horário e venha conhecer nosso cuidado de perto. Nossa equipe está pronta para receber seu pet com carinho e dedicação.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-sage-900 px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-xl transition-all duration-300"
          >
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Agendamento;