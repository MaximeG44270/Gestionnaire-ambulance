import React from "react";
import Header from "../Composant/Header";
import Slidebar from "../Composant/Slidebar";

const Parametres: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />
      {/* Body avec la slidebar et le contenu */}
      <div className="flex flex-row flex-grow">
        {/* Slidebar pour écrans larges */}
        <div className="hidden custom2:block w-64">
          <Slidebar />
        </div>
        {/* Contenu principal */}
        <div className="flex-grow bg-gray-100 p-4">
          <h1>Bienvenue sur la page Paramètres</h1>
        </div>
      </div>
    </div>
  );
};

export default Parametres;