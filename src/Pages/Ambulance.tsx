import React from "react";
import Header from "../Composant/Header";
import Slidebar from "../Composant/Slidebar";
import Ambulance from "../Composant/Ambulance/AccueilAmbulance/Ambulance";
import "../index.css";
import "../fonts.css";

const AmbulanceAll: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-row flex-grow">
        <div className="hidden custom2:block w-64">
          <Slidebar />
        </div>
        <div className="w-full overflow-y-auto max-h-87vh scrollbar-hide">
          <Ambulance />
        </div>
      </div>
    </div>
  );
};

export default AmbulanceAll;