import { MessageCircle, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sage-950 text-sage-200 py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Patas & Pelos</h3>
            <p className="text-sage-400 mb-6">Estética Animal</p>
            <a
              href="https://www.instagram.com/patasepelosoficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white hover:text-terracotta-400 transition-colors"
            >
              <Instagram size={20} className="mr-2" />
              @patasepelosoficial
            </a>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Endereço</h4>
            <p className="text-sage-400">Rua Tenente Eugênio Duarte, 808</p>
            <p className="text-sage-400">Porto Verde, Alvorada - RS</p>
            <p className="text-sage-400">CEP 94858-390</p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contato</h4>
            <a
              href="https://wa.me/5551980429176"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sage-300 hover:text-white transition-colors"
            >
              <MessageCircle size={20} className="mr-2" />
              (51) 98042-9176
            </a>
          </div>
        </div>

        <div className="border-t border-sage-800 pt-8 text-center text-sage-500">
          <p>&copy; {currentYear} Patas & Pelos Estética Animal. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;