import React from "react";


const Contact = () => {



    return (
        <section className="container flex flex-col justify-center relative z-10 items-center max-w-screen-md ">
            <h2 className="text-3xl text-center font-semibold mt-5 sm:mt-3">Contato</h2>
            <p className="text-lg text-center max-w-xl sm:mt-3 sm:text-2xl">Entre em contato conosco agora e dê o próximo passo para o sucesso do seu negócio!</p>
            <form className="w-80 max-w-xl flex flex-col p-8 rounded-3xl shadow-custom-blue my-7 gap-3" >
                <h1 className="text-center text-2xl mb-1.5 font-semibold">Contate-me</h1>
                <input className="flex-1 bg-transparent border-branco-gelo outline-none text-lg rounded-xl py-3" placeholder="Seu Email" name="from_email" />
                <input className="flex-1 bg-transparent border-branco-gelo outline-none text-lg rounded-xl py-3" placeholder="Seu nome" name="from_name" />
                <input className="flex-1 bg-transparent border-branco-gelo outline-none text-lg rounded-xl py-3" placeholder="Mensagem" aria-rowspan={4} name="menssage" />
                <button className="w-24 no-underline text-center bg-verde-musgo py-3 mt-0.5 border-xl border-none text-lg font-semibold cursor-pointer" type="submit" value="Enviar">Enviar</button>
            </form>
        </section>
    )
}

export default Contact;