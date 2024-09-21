import imagem1 from '../../assets/OficinaAtrobots.png';
import imagem2 from '../../assets/OficinaAtrobots2.png';

function AtrobotsPartneshp() {
    return (
      <div className="p-4 lg:p-8 bg-white text-gray-700">
        <div className="container mx-auto">
          <article className="prose lg:prose-xl">
            <h1 className="text-4xl font-bold mb-4">Workshop “Sobre Plásticos e Moldes” - Tech Week</h1>
            <p className="text-gray-500 mb-2">Data da publicação: 15 de Agosto de 2024</p>
            <img
                src={imagem1}
                alt="Ponto de coleta de lixo eletrônico na Inteli"
                className="w-full h-auto mb-6 mx-auto"
                style={{ width: "23%"}}
            />
            <p>
              Durante a Tech Week 2024, o Clube GreenTech, em parceria com o Clube de Robótica e a professora Bruna, organizou um workshop prático intitulado “Sobre Plásticos e Moldes”. O evento teve como objetivo principal ensinar à comunidade Inteli sobre o ciclo de vida dos plásticos, abordando questões de reciclagem e sustentabilidade.
            </p>
            <p>
              No primeiro momento, a professora Bruna apresentou diversos tópicos relacionados à moldagem e à fabricação de plásticos, destacando a importância da reciclagem na conservação ambiental. Após a palestra, os participantes tiveram a oportunidade de colocar a teoria em prática, criando moldes com giz de cera.
            </p>
            <img
                src={imagem2}
                alt="Ponto de coleta de lixo eletrônico na Inteli"
                className="w-full h-auto mb-6 mx-auto"
                style={{ width: "23%"}}
            />
            <p>
              O workshop foi realizado no deck do prédio 5 e atraiu membros da comunidade acadêmica, curiosos para aprender mais sobre o ciclo de vida de materiais e o impacto do plástico no meio ambiente. A atividade está alinhada com a temática "Capacitação para o Futuro Global" da Tech Week, com foco em preparar as pessoas para um futuro mais consciente e sustentável.
            </p>
            <p>
              “Foi uma excelente oportunidade de trazer conceitos de sustentabilidade para a prática. A moldagem com giz de cera proporcionou uma experiência interativa e educativa para os participantes,” disse Rodrigo Sales, presidente do GreenTech.
            </p>
            <p>
              Esta ação reforça o compromisso do GreenTech com a educação e capacitação de seus membros, incentivando práticas tecnológicas sustentáveis e promovendo o desenvolvimento de soluções inovadoras para os desafios ambientais.
            </p>
          </article>
        </div>
      </div>
    );
  }
  
  export default AtrobotsPartneshp;
  