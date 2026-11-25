const WhatsAppFloat = () => {
  const message = "Olá! Gostaria de agendar um horário para meu pet na Patas & Pelos Estética Animal.";
  const whatsappLink = `https://wa.me/5551980429176?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-whatsapp-500 text-white p-4 rounded-full shadow-2xl hover:bg-whatsapp-600 hover:scale-110 transition-all duration-200 z-50"
    >
      💬
    </a>
  );
};

export default WhatsAppFloat;