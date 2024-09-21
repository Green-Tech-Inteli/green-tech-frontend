import { useNavigate } from 'react-router-dom';

function NewsSection() {
    const navigate = useNavigate();

    return(
        <>
            <section id="section1Id" className="p-4 lg:p-8 bg-green-950 bg-opacity-90 dark:text-gray-700">

                <div className="container mx-auto space-y-12">

                <div className="flex flex-col overflow-hidden rounded-xl shadow-sm lg:flex-row-reverse">

                <div className="h-80 bg-gray-300 aspect-video">
                    <img src="/src/assets/Ponto-de-coleta-foto-1.jpg" alt="Ponto de coleta de lixo eletrônico na Inteli" className="w-full h-auto mb-6 object-cover" style={{ aspectRatio: '16/9' }}/>
                </div>
                <div className="flex flex-col justify-center flex-1 p-6 bg-white">
                    <span className="text-xs uppercase dark:text-gray-400">Atividade Extensionista</span>
                    <h3 className="text-3xl font-bold">Ponto de Coleta de Lixo Eletrônico</h3>
                    <p className="my-6 dark:text-gray-400">
                    ♻️ Em parceria com a Electrotec Reciclagem, o GreenTech estabeleceu um ponto de coleta de lixo eletrônico na Inteli. 
                    🌍 Promovendo o descarte consciente e incentivando a reutilização de componentes pelo Clube de Robótica.
                    </p>
                    <button
                    type="button"
                    className="self-start text-gray-500 bg-gray-100 px-2 py-1 ring-1 ring-gray-300 rounded-xl"
                    onClick={() => navigate('/news/eletronic-trash')}
                    >
                    Saiba mais
                    </button>
                </div>
                </div>


                <div className="flex flex-col overflow-hidden rounded-xl shadow-sm lg:flex-row-reverse">

                <div className="h-80 bg-gray-300 aspect-video">
                    <img src="/src/assets/OficinaAtrobots.png" alt="Ponto de coleta de lixo eletrônico na Inteli" className="w-full h-auto mb-6 object-cover" style={{ aspectRatio: '16/9' }}/>
                </div>
                    
                <div className="flex flex-col justify-center flex-1 p-6 bg-white">
                    <span className="text-xs uppercase dark:text-gray-400">Atividade Extensionista</span>
                    <h3 className="text-3xl font-bold">Workshop “Sobre Plásticos e Moldes” - Tech Week</h3>
                    <p className="my-6 dark:text-gray-400">
                    📅 Data: 15 de Agosto de 2024 <br />
                    🎯 Público-alvo: Toda a comunidade Inteli <br />
                    🌍 Venha aprender mais sobre o ciclo de vida dos plásticos e reciclagem com o GreenTech e o Clube de Robótica!
                    Participe também de uma atividade prática de moldagem com giz de cera, ministrada pela professora Bruna.
                    </p>
                    <button
                    type="button"
                    className="self-start text-gray-500 bg-gray-100 px-2 py-1 ring-1 ring-gray-300 rounded-xl"
                    onClick={() => navigate('/news/atrobots-partnership')}
                    >
                    Saiba mais
                    </button>
                </div>
                </div>

                </div>

            </section>
        </>
    )
}
export default NewsSection;