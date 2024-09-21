import image1 from "../../assets/Ponto-de-coleta-foto-1.jpg";
import image2 from "../../assets/Ponto-de-coleta-foto-2.jpg";

function NewsPageTrash() {
  return (
    <div className="p-4 lg:p-8 bg-white text-gray-700">
      <div className="container mx-auto">
        <article className="prose lg:prose-xl">
          <h1 className="text-4xl font-bold mb-4">Ponto de Coleta de Lixo Eletrônico na Inteli</h1>
          <p className="text-gray-500 mb-2">Data da publicação: 20 de Setembro de 2024</p>
          <img
            src={image1}
            alt="Ponto de coleta de lixo eletrônico na Inteli"
            className="w-full h-auto mb-6 mx-auto"
            style={{ width: "23%"}}
          />
          <p>
            O Clube GreenTech, em parceria com a Electrotec Reciclagem, lançou uma iniciativa para
            promover a coleta de lixo eletrônico na Inteli. Um ponto de coleta foi estabelecido no 
            espaço da central para que estudantes, professores e colaboradores possam descartar 
            corretamente seus equipamentos eletrônicos sem uso.
          </p>
          <p>
            A Electrotec Reciclagem oferece serviços de coleta de lixo eletrônico gratuitos em São 
            Paulo e região, e esta colaboração permite que nossa comunidade se engaje em práticas 
            de descarte responsável. A iniciativa também foi incentivada pelo Clube de Robótica, 
            que poderá reaproveitar componentes de eletrônicos que forem depositados.
          </p>
          <img
            src={image2}
            alt="Ponto de coleta de lixo eletrônico na Inteli"
            className="w-full h-auto mb-6 mx-auto"
            style={{ width: "23%"}}
          />
          <p>
            A divulgação foi realizada através dos totens digitais e das redes sociais do Clube 
            GreenTech, e será reforçada no próximo Town Hall. Esta é uma oportunidade de promover a 
            sustentabilidade no campus, além de oferecer um destino adequado para resíduos que 
            poderiam causar danos ao meio ambiente se descartados de forma incorreta.
          </p>
          <p>
            Desde o dia 07 de junho, o ponto de coleta está ativo, mas até o momento, poucos itens 
            foram depositados. O Clube GreenTech incentiva toda a comunidade a contribuir com esta 
            ação e garantir um impacto ambiental positivo.
          </p>
        </article>
      </div>
    </div>
  );
}

export default NewsPageTrash;
