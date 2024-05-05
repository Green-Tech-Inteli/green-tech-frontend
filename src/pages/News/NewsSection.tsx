function NewsSection() {
    return(
        <>
            <section id="section1Id" className="p-4 lg:p-8 bg-green-950 bg-opacity-90 dark:text-gray-700">

                <div className="container mx-auto space-y-12">

                    <div className="flex flex-col overflow-hidden rounded-xl shadow-sm lg:flex-row">
                        <div className="h-80 bg-gray-300 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 bg-white">
                            <span className="text-xs uppercase dark:text-gray-400">Texto complementar</span>
                            <h3 className="text-3xl font-bold">Título</h3>
                            <p className="my-6 dark:text-gray-400">
                                🌱 Especialistas em Projetos Tecnológicos Sustentáveis
                                💡Explorando inovações que impulsionam o futuro verde
                                💚 Preparado para iniciar o seu projeto?
                            </p>
                            <button type="button" className="self-start text-gray-500 bg-gray-100 px-2 py-1 ring-1 ring-gray-300 rounded-xl">Botão</button>
                        </div>
                    </div>

                    <div className="flex flex-col overflow-hidden rounded-xl shadow-sm lg:flex-row-reverse">
                        <div className="h-80 bg-gray-300 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 bg-white">
                            <span className="text-xs uppercase dark:text-gray-400">Texto complementar</span>
                            <h3 className="text-3xl font-bold">Título</h3>
                            <p className="my-6 dark:text-gray-400">
                                🌱 Especialistas em Projetos Tecnológicos Sustentáveis
                                💡Explorando inovações que impulsionam o futuro verde
                                💚 Preparado para iniciar o seu projeto?
                            </p>
                            <button type="button" className="self-start text-gray-500 bg-gray-100 px-2 py-1 ring-1 ring-gray-300 rounded-xl">Botão</button>
                        </div>
                    </div>

                    <div className="flex flex-col overflow-hidden rounded-xl shadow-sm lg:flex-row">
                        <div className="h-80 bg-gray-300 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 bg-white">
                            <span className="text-xs uppercase dark:text-gray-400">Texto complementar</span>
                            <h3 className="text-3xl font-bold">Título</h3>
                            <p className="my-6 dark:text-gray-400">
                                🌱 Especialistas em Projetos Tecnológicos Sustentáveis
                                💡Explorando inovações que impulsionam o futuro verde
                                💚 Preparado para iniciar o seu projeto?
                            </p>
                            <button type="button" className="self-start text-gray-500 bg-gray-100 px-2 py-1 ring-1 ring-gray-300 rounded-xl">Botão</button>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}
export default NewsSection;