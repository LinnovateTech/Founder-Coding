"use client";
import React, { useState } from "react";

import hamburg from '../../public/shared/icon-hamburger.svg';
import close from '../../public/shared/icon-close.svg';
import logo from "../../public/shared/logo.png";

function Navbar() {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavbar = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <header className="bg-cinza-claro z-20 relative">
      <div className="container py-1 md:pt-10">
        <div className="flex justify-between items-center mx-auto">
          <a href="/">
          <img 
          src={logo.src}
          alt="Logo empressa"
          className="w-auto max-w-[100px] md:max-w-[100px] h-auto block mx-auto md:mx-0" />
          
          </a>
          <nav className="relative hidden md:block flex-initial text-azul-profundo border-branco-gelo">
            <ul className="flex flex-row list-none ml-auto z-10 ">
              <li className="nav-item relative item-Home hover:border-b-2">
                <a className="relative px-6 pt-2 flex items-center font-normal " href="/">
                  <span>Home</span>
                </a>
              </li>

              <li className="nav-item relative item-Sobre-Nos hover:border-b-2">
                <a className="relative px-6 pt-2 flex items-center font-normal " href="Sobre-nos">
                  <span>Sobre Nós</span>
                </a>
              </li>

              <li className="nav-item relative item-Servicos hover:border-b-2">
                <a className="relative px-6 pt-2 flex items-center font-normal " href="servicos">
                  <span>Serviços</span>
                </a>
              </li>

              <li className="nav-item relative item-Contato hover:border-b-2">
                <a className="relative px-6 pt-2 flex items-center font-normal " href="contato">
                  <span>Contato</span>
                </a>
              </li>
            </ul>
          </nav>

          <div className="xl:hidden">
            <div className="absolute top-11 right-11">
              <div onClick={handleNavbar} className="bg-azul-profundo">
                {isNavOpen ? (
                  <img src={close.src} alt="icon" />
                ) : (
                  <img src={hamburg.src} alt="icon" />
                )}
              </div>
              <nav className="absolute top-12 right-2 z-20 text-azul-profundo border-branco-gelo">
                {isNavOpen ? (
                  <div className="flex justify-between gap-y-10 backdrop-blur-lg px-5 py-6 rounded-lg">
                    <ul className="flex space-x-2 flex-col items-center text-azul-profundo uppercase tracking-widest text-sm">
                      <li className="flex space-x-2 items-center hover:border-b border-slate-400">
                        <a className="relative px-6 pt-2 flex items-center font-normal" href="/">
                          <span>Home</span>
                        </a>
                      </li>

                      <li className="flex space-x-2 items-center hover:border-b border-slate-400">
                        <a className="relative px-6 pt-2 flex items-center font-normal" href="sobre nós">
                          <span>Sobre Nós</span>
                        </a>
                      </li>

                      <li className="flex space-x-2 items-center hover:border-b border-slate-400">
                        <a className="relative px-6 pt-2 flex items-center font-normal" href="Serviços">
                          <span>Serviços</span>
                        </a>
                      </li>

                      <li className="flex space-x-2 items-center hover:border-b border-slate-400">
                        <a className="relative px-6 pt-2 flex items-center font-normal" href="Contato">
                          <span>Contato</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar;