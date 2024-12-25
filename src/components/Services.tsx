export default function Services() {
    const services = [
        {
            icon: "🌐",
            title: "Lading Pages",
            description: "Criação de páginas otimizadas para conversão e captação de leads."
        },
        {
            icon: "🛒",
            title: "E-commerce",
            description: "Construa uma loja virtual moderna e pronta para vendas."
        },
        {
            icon: "⚙️",
            title: "Sistemas Web",
            description: "Automatize processos e facilite sua gestão com sistemas sob medida.",
        }
    ];

    return (
        <section className="py-16 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8">Serviços Oferecidos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-600 text-center">{service.description}</p>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <button className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg shadow-md hover:bg-blue-600">
                    Solicite uma Solução Agora
                </button>
            </div>
        </section>
    );
}