import React from "react";

import mock from '../../public/shared/mockup.jpg';


function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-cente xl:flex-row xl:justify-between">
      <div className="container mx-auto px-4 flex justify-center w-full xl:w-1/3 mb-6 xl:mb-0">
        <img
          src={mock.src}
          alt="imagem ilustrativa"
          className="w-full max-w-[300px] h-auto object-contain xl:max-w[400px]" />
      </div>

      <div className="flex flex-col items-center text-center  xl:items-start xl:text-left w-full xl:w-1/3 mb-6 xl:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold uppercase text-preto-suave mb-4">
          Soluções Digitais Inovadoras para o seu negócio
        </h2>
        <p className="text-lg md:text-xl text-preto-suave leading-relaxed mb-6">
          Criamos sistemas, landing pages e sites que impulsionam microempreendedores e pessoas físicas.
        </p>

        <div className="flex flex-col justify-between gap-4 w-full xl:w-1/3 xl:flex-row xl:justify-start">
          <button
            aria-label="Solicitar Orçamento"
            className="bg-verde-musgo text-branco items-center px-12 py-1 rounded-lg font-bold tracking-wide hover:bg-verde-musgo-claro transition-all">
            Solicitar Orçamento
          </button>
          <button
            aria-label="Veja nossos serviços"
            className="bg-verde-musgo text-branco items-center px-12 py-1 rounded-lg font-bold tracking-wide hover:bg-verde-musgo-claro transition-all">
            <a href="servicos">
              Veja nossos serviços
            </a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;