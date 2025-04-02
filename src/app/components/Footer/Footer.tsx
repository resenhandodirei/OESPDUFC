export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          {/* Grid de 4 colunas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            
            {/* Sobre */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Sobre</h3>
              <p className="text-sm text-gray-400">
                Somos uma plataforma dedicada a compartilhar conhecimento e inovação no mundo jurídico e tecnológico.
              </p>
            </div>
  
            {/* Links Rápidos */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Início</a></li>
                <li><a href="#" className="hover:text-white transition">Artigos</a></li>
                <li><a href="#" className="hover:text-white transition">Projetos</a></li>
                <li><a href="#" className="hover:text-white transition">Contato</a></li>
              </ul>
            </div>
  
            {/* Recursos */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Tutoriais</a></li>
                <li><a href="#" className="hover:text-white transition">E-books</a></li>
                <li><a href="#" className="hover:text-white transition">Webinars</a></li>
                <li><a href="#" className="hover:text-white transition">Notícias</a></li>
              </ul>
            </div>
  
            {/* Contato */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Contato</h3>
              <ul className="space-y-2">
                <li>Email: contato@exemplo.com</li>
                <li>Telefone: (11) 1234-5678</li>
                <li>Endereço: Rua Fictícia, 123</li>
              </ul>
            </div>
  
          </div>
  
          {/* Linha Divisória */}
          <div className="border-t border-gray-700 my-8"></div>
  
          {/* Newsletter */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">Inscreva-se para receber atualizações:</p>
            <div className="mt-4 md:mt-0 flex">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="px-4 py-2 rounded-l-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
              />
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition text-white rounded-r-md">
                Inscrever-se
              </button>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm mt-8">
            &copy; {new Date().getFullYear()} Todos os direitos reservados.
          </div>
        </div>
      </footer>
    );
  }
  