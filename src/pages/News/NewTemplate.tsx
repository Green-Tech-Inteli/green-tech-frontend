function NewsPage() {
  return (
    <div className="p-4 lg:p-8 bg-white text-gray-700">
      <div className="container mx-auto">
        <article className="prose lg:prose-xl">
          <h1 className="text-4xl font-bold mb-4">Título da Notícia</h1>
          <p className="text-gray-500 mb-2">Data da publicação: 01 de Janeiro de 2023</p>
          <img
            src="/path/to/your/image.jpg"
            alt="Descrição da imagem"
            className="w-full h-auto mb-6"
          />
          <p>
            Aqui você pode adicionar o conteúdo completo da notícia. Este é um parágrafo de exemplo que você pode substituir pelo texto real da sua notícia. Você pode adicionar quantos parágrafos forem necessários para cobrir todo o conteúdo.
          </p>
          <p>
            Lembre-se de incluir quaisquer citações, links, imagens adicionais ou outros elementos que sejam relevantes para o seu artigo.
          </p>
          {/* Adicione mais conteúdo conforme necessário */}
        </article>
      </div>
    </div>
  );
}

export default NewsPage;
