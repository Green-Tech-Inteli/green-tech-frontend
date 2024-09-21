import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children}
    </section>
  );
};

const List = ({ items }: { items: string[] }) => {
  return (
    <ul className="list-disc pl-8 mb-4">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

const ContactLink = ({ email }: { email: string }) => {
  return (
    <a href={`mailto:${email}`} className="text-blue-500 hover:text-blue-700 transition-colors">{email}</a>
  );
};

function AboutPage() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <div className="bg-green-950 text-gray-800 bg-opacity-90 body-font">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} transition={{ duration: 0.5 }} className="max-w-4xl mx-auto rounded-lg shadow-md p-6 bg-white bg-opacity-90">
          <h1 className="text-3xl font-bold mb-8 text-center">Sobre o Green Tech</h1>
            <Section title=''>
            O Clube GreenTech é uma comunidade apaixonada e comprometida com a aplicação da tecnologia para promover soluções sustentáveis e enfrentar os desafios ambientais atuais. Fundado em Maio de 2023, no âmbito do Instituto de Tecnologia e Liderança, o nosso objetivo é catalisar a inovação e a colaboração em prol de um futuro mais verde e sustentável.
            </Section>

          <Section title="Nossa Missão">
            <p>
              A missão do Clube GreenTech é incentivar o desenvolvimento de tecnologias inovadoras que promovam a conservação ambiental e sustentabilidade, utilizando a tecnologia como ferramenta para alcançar justiça social, equidade e inclusão digital. Estamos comprometidos em fomentar práticas empresariais éticas e uma governança corporativa sustentável, formando líderes na Inteli que apliquem a sustentabilidade em seus negócios. Buscamos transformar tanto a comunidade acadêmica quanto a sociedade, incentivando todos os membros a aplicar conscientemente tecnologia em prol de um impacto positivo e duradouro relacionado ao ESG.
            </p>
          </Section>

          <Section title="Nossos Valores">
            <List
              items={[
                "Inovação Sustentável: Promovemos o desenvolvimento de tecnologias que contribuam para a sustentabilidade ambiental, criando soluções inovadoras que não comprometam os recursos das futuras gerações.",
                "Integridade Ecológica: Defendemos práticas que respeitem e protejam o meio ambiente, incorporando princípios de ESG (Environmental, Social, and Governance) em todas as nossas atividades e projetos.",
                "Empreendedorismo Verde: Incentivamos o espírito empresarial focado em soluções ambientais, apoiando iniciativas e startups de GreenTech e Climatech que propõem modelos de negócios sustentáveis.",
                "Colaboração e Comunidade: Valorizamos a troca de ideias e a colaboração entre membros, instituições e a comunidade, criando uma rede de apoio para aqueles comprometidos com mudanças positivas.",
                "Educação e Capacitação: Comprometemo-nos com a educação contínua de nossos membros, fornecendo acesso a recursos, treinamento e oportunidades para se tornarem líderes em práticas sustentáveis.",
                "Liderança em Sustentabilidade: Aspiramos ser um exemplo para outros, liderando pelo exemplo no desenvolvimento e implementação de tecnologias e práticas que promovam um futuro sustentável."
              ]}
            />
          </Section>

          <Section title="O que Fazemos">
            <List
              items={[
                "Organização de eventos, workshops e palestras para promover a conscientização sobre questões ambientais e sustentabilidade.",
                "Pesquisa e desenvolvimento de soluções tecnológicas para mitigar problemas ambientais e promover práticas sustentáveis.",
                "Desenvolvimento de aplicativos e plataformas online que promovam a participação cívica, justiça social e transparência.",
                "Parcerias com empresas e organizações para implementar soluções tecnológicas que melhorem a governança e responsabilidade social."
              ]}
            />
          </Section>

          <Section title="Participe">
            <p className="mb-4">Damos as boas-vindas a estudantes interessados em tecnologia e comprometidos em criar um impacto positivo em questões relacionadas ao ESG. Junte-se a nós para fazer a diferença!</p>
            <p>Para obter mais informações sobre eventos futuros e como se envolver, entre em contato conosco em <ContactLink email="greentech@email.com" />.</p>
          </Section>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutPage;
