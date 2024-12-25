export default function Projects() {
    const projects = [
        {
            image: "/shared/Starbucks.png",
            title: "Starbucks",
            descricao: "É uma aplicação web de uma LadingPage onde é inspirada na famosa cafeteria Starbucks.",
            webapp: "https://alissonlins.github.io/Starbucks-Lading-Page/#"
        },
        {
            image: "/shared/Dropdown.png",
            title: "Dropdown",
            descricao: "",
            webapp: "https://dropdown-navigation-blue.vercel.app"
        }
    ];

    return (
        <div className="container bg-red-500 py-1 md:pt-10 flex flex-col  items-center p-6 mx-auto">
            <h2 className="text-center text-2xl font-bold text-preto-suave mb-4">Projetos em Destaque</h2>
            <p className="">Esses são projetos reais realizados pela equipe.</p>
            <div className="grid grid-cols-1 sm:grid-col-2 lg:grid-cols-4 mt-8 gap-8 px-8">
                {projects.map((projects, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <img
                            src={projects.image}
                            alt={projects.title}
                            className="w-full h-48 object-cover mb-4 rounded-lg" />
                        <h3 className="text-xl font-semibold mb-2">{projects.title}</h3>
                        <p className="text-gray-600 text-center">{projects.descricao}</p>
                        <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg text-lg shadow-md hover:bg-blue-600" >
                            <a href={projects?.webapp}
                            target="new" >
                                Ver Projeto
                            </a>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}