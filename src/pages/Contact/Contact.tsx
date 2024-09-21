const ContactPage = () => {
  return (
    <div className="p-4 lg:p-8 bg-white text-gray-700">
      <div className="container mx-auto">
        <article className="prose lg:prose-xl">
          <h1 className="text-4xl font-bold mb-4">Contato</h1>
          <p className="mb-6">
            Entre em contato com o GreenTech para mais informações sobre nossos projetos, parcerias, ou como se envolver com nossas atividades de tecnologia e sustentabilidade.
          </p>
          
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Informações de Contato</h2>
            
            <p>
              <strong>Email:</strong> <a href="mailto:greentech@email.com" className="text-green-700 hover:underline">greentech@email.com</a>
            </p>
            
            <p className="mt-4">
              <strong>Telefone:</strong> <a href="tel:+551199999999" className="text-green-700 hover:underline">+55 (11) 99999-9999</a>
            </p>
            
            <h3 className="text-xl font-semibold mt-6">Estamos nas redes sociais</h3>
            <p>
              Siga-nos nas redes sociais para acompanhar nossos últimos projetos e eventos!
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.instagram.com/inteligreentech/" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">
                Instagram
              </a>
              <a href="https://www.linkedin.com/company/comunidade-inteli-greentech" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">
                LinkedIn
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ContactPage;
