import React from "react";
import Slidebar from "../../Composant/Slidebar";
import Header from "../../Composant/Header";
import "../../index.css";
import "../../fonts.css";

const AjouterUtilisateurs: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-row flex-grow">
        <div className="hidden custom2:block w-64">
          <Slidebar />
        </div>
        <div className="flex-grow bg-gray-100 p-4">
          <h1>Bienvenue sur la page Ajouter des Utilisateurs</h1>
        </div>
      </div>
    </div>
  );
};

export default AjouterUtilisateurs;