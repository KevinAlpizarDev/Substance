import React from 'react'
import { useTranslation } from "react-i18next";
import "../i18n";

const Biligual = () => {

  const { t, i18n } = useTranslation();

 const toggleLang = () => {
    const nextLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(nextLang);
  };

  return (


    <>
    

<div class="relative size-64 perspective-dramatic mx-auto my-12 group">
  {/* <!-- Cubo 3D con animación de rotación --> */}
  <div class="absolute inset-0 transform-style-3d transition-transform duration-1000 group-hover:rotate-y-180 group-hover:rotate-x-30">
    {/* <!-- Caras del cubo --> */}
    <div class="absolute inset-0 bg-sky-400/80 backface-hidden flex items-center justify-center text-4xl font-bold text-white border-2 border-white/30">
      Front
    </div>
    <div class="absolute inset-0 bg-emerald-400/80 backface-hidden flex items-center justify-center text-4xl font-bold text-white border-2 border-white/30 transform rotate-y-180 translate-z-64">
      Back
    </div>
    <div class="absolute inset-0 bg-amber-400/80 backface-hidden flex items-center justify-center text-4xl font-bold text-white border-2 border-white/30 transform rotate-y-90 translate-x-32 translate-z-32">
      Right
    </div>
    <div class="absolute inset-0 bg-rose-400/80 backface-hidden flex items-center justify-center text-4xl font-bold text-white border-2 border-white/30 transform rotate-y-270 -translate-x-32 translate-z-32">
      Left
    </div>
    <div class="absolute inset-0 bg-purple-400/80 backface-hidden flex items-center justify-center text-4xl font-bold text-white border-2 border-white/30 transform rotate-x-90 -translate-y-32 translate-z-32">
      Top
    </div>
    <div class="absolute inset-0 bg-indigo-400/80 backface-hidden flex items-center justify-center text-4xl font-bold text-white border-2 border-white/30 transform rotate-x-270 translate-y-32 translate-z-32">
      Bottom
    </div>
  </div>
</div>






<div class="flex flex-wrap gap-8 justify-center p-8">
  {/* <!-- Tarjeta 1 --> */}
  <div class="w-64 h-80 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:translate-y-[-10px] hover:shadow-2xl hover:rotate-1">
    <div class="h-40 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
    <div class="p-6">
      <h3 class="text-xl font-bold text-gray-800 mb-2">Tarjeta Flotante</h3>
      <p class="text-gray-600">Pasa el mouse para ver el efecto de levitación.</p>
    </div>
  </div>
  
  {/* <!-- Tarjeta 2 --> */}
  <div class="w-64 h-80 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:translate-y-[-10px] hover:shadow-2xl hover:-rotate-1">
    <div class="h-40 bg-gradient-to-r from-purple-500 to-pink-500"></div>
    <div class="p-6">
      <h3 class="text-xl font-bold text-gray-800 mb-2">Efecto 3D</h3>
      <p class="text-gray-600">Perspectiva y sombras mejoradas.</p>
    </div>
  </div>
</div>












    <div className="flex justify-center items-center h-64">
      <div className="relative size-20 perspective-distant">
        {/* Cubo giratorio */}
        <div className="absolute inset-0 transform-style-3d animate-spin-slow">
          <div className="absolute inset-0 bg-blue-500/70 border-2 border-blue-700/30 backface-hidden transform rotate-y-0 translate-z-10"></div>
          <div className="absolute inset-0 bg-blue-600/70 border-2 border-blue-700/30 backface-hidden transform rotate-y-90 translate-z-10"></div>
          <div className="absolute inset-0 bg-blue-700/70 border-2 border-blue-800/30 backface-hidden transform rotate-y-180 translate-z-10"></div>
          <div className="absolute inset-0 bg-blue-800/70 border-2 border-blue-900/30 backface-hidden transform rotate-y-270 translate-z-10"></div>
          <div className="absolute inset-0 bg-blue-900/70 border-2 border-blue-900/30 backface-hidden transform rotate-x-90 translate-z-10"></div>
          <div className="absolute inset-0 bg-blue-950/70 border-2 border-blue-900/30 backface-hidden transform rotate-x-270 translate-z-10"></div>
        </div>
      </div>

      {/* Estilos */}
      <style jsx>{`
        @keyframes spin-slow {
          0% { transform: rotateX(0) rotateY(0) rotateZ(0); }
          100% { transform: rotateX(360deg) rotateY(720deg) rotateZ(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 6s linear infinite;
        }
      `}</style>
    </div>




  <h1 className="text-4xl font-bold dark:text-white">


    {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
          {t("bilingual")}

<ul className="list bg-base-100 rounded-box shadow-md">
  
  <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Most played songs this week</li>
  
  <li className="list-row group hover:[transform-style:preserve-3d] hover:[perspective:1000px] transition-all duration-500">
    <div className="group-hover:[transform:rotateY(180deg)] transition-transform duration-500">
      <img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/>
    </div>
    <div className="group-hover:[transform:rotateY(20deg)] transition-transform duration-300 delay-100">
      <div>Dio Lupa</div>
      <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
    </div>
    <button className="btn btn-square btn-ghost group-hover:[transform:rotateY(10deg)_scale(1.1)] transition-transform duration-300 delay-75">
      <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
    </button>
    <button className="btn btn-square btn-ghost group-hover:[transform:rotateY(-10deg)_scale(1.1)] transition-transform duration-300 delay-100">
      <svg className="size-[1.2em] group-hover:fill-red-500 transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
    </button>
  </li>
  
  <li className="list-row group hover:[transform-style:preserve-3d] hover:[perspective:1000px] transition-all duration-500">
    <div className="group-hover:[transform:rotateY(180deg)] transition-transform duration-500">
      <img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/4@94.webp"/>
    </div>
    <div className="group-hover:[transform:rotateY(20deg)] transition-transform duration-300 delay-100">
      <div>Ellie Beilish</div>
      <div className="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
    </div>
    <button className="btn btn-square btn-ghost group-hover:[transform:rotateY(10deg)_scale(1.1)] transition-transform duration-300 delay-75">
      <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
    </button>
    <button className="btn btn-square btn-ghost group-hover:[transform:rotateY(-10deg)_scale(1.1)] transition-transform duration-300 delay-100">
      <svg className="size-[1.2em] group-hover:fill-red-500 transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
    </button>
  </li>
  
  <li className="list-row group hover:[transform-style:preserve-3d] hover:[perspective:1000px] transition-all duration-500">
    <div className="group-hover:[transform:rotateY(180deg)] transition-transform duration-500">
      <img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp"/>
    </div>
    <div className="group-hover:[transform:rotateY(20deg)] transition-transform duration-300 delay-100">
      <div>Sabrino Gardener</div>
      <div className="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
    </div>
    <button className="btn btn-square btn-ghost group-hover:[transform:rotateY(10deg)_scale(1.1)] transition-transform duration-300 delay-75">
      <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
    </button>
    <button className="btn btn-square btn-ghost group-hover:[transform:rotateY(-10deg)_scale(1.1)] transition-transform duration-300 delay-100">
      <svg className="size-[1.2em] group-hover:fill-red-500 transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
    </button>
  </li>
  
</ul>

<h1 class="
  text-5xl font-bold text-center py-8
  transition-all duration-1000 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]
  hover:scale-125 
  hover:rotate-3 
  hover:skew-x-6
  hover:translate-y-4
  hover:text-transparent 
  hover:bg-clip-text 
  hover:bg-gradient-to-r 
  hover:from-pink-500 
  hover:to-violet-500
  hover:[transform-style:preserve-3d]
  hover:[perspective:1000px]
  hover:shadow-[0_25px_50px_-12px_rgba(236,72,153,0.5)]
  hover:drop-shadow-[0_0_15px_rgba(192,132,252,0.8)]
">
  Transitions & Animation
</h1>
        </h1>
    
    </>
  )
}

export default Biligual