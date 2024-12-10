import React from "react";

function About() {
    return (
        <div className="flex items-center justify-center"
            aria-label="Container Centralizado">
            <main className="container p-8 bg-gray-100 rounded-lg shadow-md mx-auto max-w-4xl"
                aria-label="Seção sobre nós">
                <h2 className="text-center text-2xl font-bold text-preto-suave mb-4">Sobre Nós</h2>

                <p className="text-lg text-gray-700 mb-6">Na Linnovate, transformamos ideias em soluções digitais incríveis.
                    Nossa missão é oferecer sistemas acessíveis e personalizados, conectando tecnologia e inovação ao alcance de todos.
                    Acreditamos em parceria, personalização e simplicidade para criar resultados reais.
                </p>

                <a href="#"
                    className="block text-center text-azul-profundo font-semibold hover:underline">Descubra como fazemos a diferença.</a>
            </main>
        </div>

    )
}

export default About;