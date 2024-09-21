import visitaBTG from "../../assets/VisitaBTGESG2023.png";

const ESGChatbotProjectPage = () => {
  return (
    <div className="p-4 lg:p-8 bg-white text-gray-700">
      <div className="container mx-auto">
        <article className="prose lg:prose-xl">
          <h1 className="text-4xl font-bold mb-4">
            Automatização da Análise de Questionários ESG - BTG
          </h1>
          <p className="text-gray-500 mb-2">
            Data de previsão de entrega: 28 de Novembro de 2024
          </p>
          <img
                src={visitaBTG}
                alt="Ponto de coleta de lixo eletrônico na Inteli"
                className="w-full h-auto mb-6 mx-auto"
                style={{ width: "50%"}}
            />
          <p>
            Em parceria com o Banco BTG, o GreenTech está desenvolvendo uma solução tecnológica
            para automatizar o processo de análise e resposta de questionários na área de ESG
            (Environmental, Social, and Governance) do banco. O objetivo do projeto é criar um
            sistema baseado em IA que permita ao banco inserir novos questionários na plataforma,
            gerando automaticamente respostas adequadas para cada pergunta.
          </p>
          <p>
            A solução será implementada utilizando IA desenvolvida pelo BTG, e estamos responsáveis
            pela construção de toda a aplicação e infraestrutura. Esse sistema promete melhorar
            significativamente a eficiência no fluxo de trabalho interno da área ESG do BTG,
            eliminando a necessidade de análise manual para cada novo questionário recebido.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Impacto Esperado</h2>
          <p>
            Espera-se que o projeto melhore significativamente a eficiência da área ESG do BTG,
            permitindo que a equipe responda rapidamente a questionários complexos de forma
            automática. Além disso, este projeto abre portas para futuras colaborações entre o
            GreenTech e o BTG, além de posicionar o clube como um importante parceiro em soluções
            tecnológicas voltadas para ESG.
          </p>
        </article>
      </div>
    </div>
  );
};

export default ESGChatbotProjectPage;
