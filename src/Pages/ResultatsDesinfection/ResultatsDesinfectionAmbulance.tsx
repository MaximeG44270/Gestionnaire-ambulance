import React from "react";
import "../../index.css";
import "../../fonts.css";
import Header from "../../Composant/Header";
import Slidebar from "../../Composant/Slidebar";

const ResultatsAmbulance: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-row flex-grow">
        <div className="hidden custom2:block w-64">
          <Slidebar />
        </div>
        <div className="flex-grow bg-gray-100 p-4">
          <h1>Bienvenue sur la page Résultats des Désinfection des Ambulances</h1>
        </div>
      </div>
    </div>
  );
};

export default ResultatsAmbulance;