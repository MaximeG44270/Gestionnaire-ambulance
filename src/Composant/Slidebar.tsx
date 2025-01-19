import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../index.css";
import "../fonts.css";

const Slidebar: React.FC = () => {
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isDesinfectionOpen, setIsDesinfectionOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/utilisateurs")) {
      setIsUserOpen(true);
    } else if (location.pathname.startsWith("/resultats-desinfection")) {
      setIsDesinfectionOpen(true);
    }
  }, [location.pathname]);

  return (
    <div className="w-64 xl:h-2/3 h-screen bg-white">
      <div className="p-4 text-xl font-carving-black">Tableau de bord</div>
      <ul className="space-y-2">
        {/* ----------------------------------------------- ACCUEIL ----------------------------------------------- */}
        <li className="p-2 flex items-center gap-3 font-carving-black">
          <div className={`flex items-center ml-1 gap-3 w-72 rounded-md ${location.pathname === "/dashboard" ? "bg-[#0f6ca5] text-white" : ""} hover:bg-[#0f6ca5] hover:text-white`}>
            <img src="/image/icone-acceuil.png" alt="Logo" className="w-6 h-4" />
            <Link to="/dashboard" className="h-10 flex items-center w-full">
              Acceuil
            </Link>
          </div>
        </li>

        {/* ----------------------------------------------- PHARMACIE INTERNE ----------------------------------------------- */}
        <li className="p-2 flex items-center gap-3 font-carving-black">
          <div className={`flex items-center gap-3 w-72 ml-1 rounded-md ${location.pathname === "/pharmacie-interne" ? "bg-[#0f6ca5] text-white" : ""} hover:bg-[#0f6ca5] hover:text-white`}>
            <img src="/image/icone-pharmacie.png" alt="Logo" className="w-6 h-6" />
            <Link to="/pharmacie-interne" className="h-10 flex items-center w-full">
              Pharmacie interne
            </Link>
          </div>
        </li>

        {/* ----------------------------------------------- AMBULANCE ----------------------------------------------- */}
        <li className="p-2 flex items-center gap-3 font-carving-black">
          <div className={`flex items-center gap-3 w-72 ml-1 rounded-md ${location.pathname === "/ambulance" ? "bg-[#0f6ca5] text-white" : ""} hover:bg-[#0f6ca5] hover:text-white`}>
            <img src="/image/fleche-ambulance.png" alt="Logo" className="w-6 h-6" />
            <Link to="/ambulance" className="h-10 flex items-center w-full">
              Ambulance
            </Link>
          </div>
        </li>

        {/* ----------------------------------------------- VSL & TAXIS ----------------------------------------------- */}
        <li className="p-2 flex items-center gap-3 font-carving-black">
          <div className={`flex items-center gap-3 w-72 ml-1 rounded-md ${location.pathname === "/vsltaxis" ? "bg-[#0f6ca5] text-white" : ""} hover:bg-[#0f6ca5] hover:text-white`}>
            <img src="/image/icone-vsl-taxis.png" alt="Logo" className="w-6 h-6" />
            <Link to="/vsltaxis" className="h-10 flex items-center w-full">
              VSL/Taxis
            </Link>
          </div>
        </li>

        {/* ----------------------------------------------- UTILISATEURS ----------------------------------------------- */}
        <li className="p-2">
          <button
            className={`flex items-center justify-between h-10 rounded-md ${isUserOpen ? "bg-[#0f6ca5] text-white" : ""} hover:bg-[#0f6ca5] hover:text-white cursor-pointer font-carving-black`}
            onClick={() => setIsUserOpen(!isUserOpen)}>
            <div className="flex ml-1 items-center gap-3">
              <img src="/image/icone-User.png" alt="Logo" className="w-6 h-6" />
              <span>Utilisateurs</span>
            </div>
            <img
              src={isUserOpen ? "/image/fleche-haut.png" : "/image/fleche-bas.png"}
              alt="Toggle"
              className="w-4 h-3 mr-1"
            />
          </button>
          {isUserOpen && (
            <ul className="ml-11 mt-2 space-y-2">
              <li className={`hover:bg-[#0f6ca5] hover:text-white rounded-md font-carving-semi-bold p-2 ${location.pathname === "/utilisateurs/liste" ? "bg-[#0f6ca5] text-white" : ""}`}>
                <Link to="/utilisateurs/liste" className="block w-full h-full">
                  Listes Utilisateurs
                </Link>
              </li>
              <li className={`hover:bg-[#0f6ca5] hover:text-white rounded-md font-carving-semi-bold p-2 ${location.pathname === "/utilisateurs/ajouter" ? "bg-[#0f6ca5] text-white" : ""}`}>
                <Link to="/utilisateurs/ajouter" className="block w-full h-full">
                  Ajouter Utilisateurs
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* ----------------------------------------------- RESULTATS DESINFECTION ----------------------------------------------- */}
        <li className="p-2">
          <button
            className={`flex items-center justify-between h-10 rounded-md ${isDesinfectionOpen ? "bg-[#0f6ca5] text-white" : ""} hover:bg-[#0f6ca5] hover:text-white cursor-pointer font-carving-black`}
            onClick={() => setIsDesinfectionOpen(!isDesinfectionOpen)}>
            <div className="flex ml-1 items-center gap-3">
              <img src="/image/icone-Resultat.png" alt="Logo" className="w-6 h-6" />
              <span>Résultats Désinfection</span>
            </div>
            <img
              src={isDesinfectionOpen ? "/image/fleche-haut.png" : "/image/fleche-bas.png"}
              alt="Toggle"
              className="w-4 h-3 mr-1"
            />
          </button>
          {isDesinfectionOpen && (
            <ul className="ml-11 mt-2 space-y-2">
              <li className={`hover:bg-[#0f6ca5] hover:text-white rounded-md font-carving-semi-bold p-2 ${location.pathname === "/resultats-desinfection/ambulance" ? "bg-[#0f6ca5] text-white" : ""}`}>
                <Link to="/resultats-desinfection/ambulance" className="block w-full h-full">
                  Ambulance
                </Link>
              </li>
              <li className={`hover:bg-[#0f6ca5] hover:text-white rounded-md font-carving-semi-bold p-2 ${location.pathname === "/resultats-desinfection/vsl" ? "bg-[#0f6ca5] text-white" : ""}`}>
                <Link to="/resultats-desinfection/vsl" className="block w-full h-full">
                  Vsl
                </Link>
              </li>
              <li className={`hover:bg-[#0f6ca5] hover:text-white rounded-md font-carving-semi-bold p-2 ${location.pathname === "/resultats-desinfection/taxis" ? "bg-[#0f6ca5] text-white" : ""}`}>
                <Link to="/resultats-desinfection/taxis" className="block w-full h-full">
                  Taxis
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* ----------------------------------------------- PARAMETRES ----------------------------------------------- */}
        <li className="p-2 flex items-center gap-3 font-carving-black ">
          <div className={`flex ml-1 items-center gap-3 w-72 rounded-md ${location.pathname === "/parametres" ? "bg-[#0f6ca5] text-white" : ""} hover:bg-[#0f6ca5] hover:text-white`}>
            <img src="/image/icone-setting.png" alt="Logo" className="w-6 h-6" />
            <Link to="/parametres" className="h-10 flex items-center w-full">
              Paramètres
            </Link>
          </div>
        </li>

        {/* ----------------------------------------------- AJOUT BDD PRODUIT ----------------------------------------------- */}
        <li className="p-2 flex items-center gap-3 font-carving-black">
          <div className={`flex items-center gap-3 w-72 ml-1 rounded-md ${location.pathname === "/ajoutBDD" ? "bg-[#0f6ca5] text-white" : ""} hover:bg-[#0f6ca5] hover:text-white`}>
            <img src="/image/icone-vsl-taxis.png" alt="Logo" className="w-6 h-6" />
            <Link to="/ajoutBDD" className="h-10 flex items-center w-full">
              Ajout produit BDD
            </Link>
          </div>
        </li>

        {/* ----------------------------------------------- AJOUT BDD AMBULANCE ----------------------------------------------- */}
        <li className="p-2 flex items-center gap-3 font-carving-black">
          <div className={`flex items-center gap-3 w-72 ml-1 rounded-md ${location.pathname === "/ajoutBDDAmbulance" ? "bg-[#0f6ca5] text-white" : ""} hover:bg-[#0f6ca5] hover:text-white`}>
            <img src="/image/icone-vsl-taxis.png" alt="Logo" className="w-6 h-6" />
            <Link to="/ajoutBDDAmbulance" className="h-10 flex items-center w-full">
              Ajout Ambulance BDD
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Slidebar;