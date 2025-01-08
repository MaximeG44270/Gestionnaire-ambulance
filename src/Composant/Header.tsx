import React, { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import "../index.css";
import "../fonts.css";
import Slidebar from "./Slidebar";

const Header: React.FC = () => {
  const [firstName, setFirstName] = useState<string | null>("Nom Utilisateur");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const fetchFirstName = async () => {
    try {
      const userId = "ilfDFGYO6LYOCPu7GGfIBX0MoYF3";
      const userDocRef = doc(db, "users", userId);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        setFirstName(userData.firstName);
      } else {
        console.error("Aucun document trouvé pour cet utilisateur.");
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des données utilisateur :", error);
    }
  };

  useEffect(() => {
    fetchFirstName();
  }, []);
  return (
      <div className="w-full p-4 bg-white shadow-md">
        <div className="flex justify-between items-center">
          <div className="w-1/3 flex items-center">
            <img src="/image/logo-amb.png" alt="Logo" className="w-16 h-12 mr-5" />
            <p className="text-base FC-BM hidden custom3:block font-carving-semi-bold">Ambulance Digital</p>
          </div>
          <div className="w-2/3 flex justify-end items-center">
            <input
              type="text"
              placeholder="Rechercher..."
              className="px-4 py-2 border rounded-lg focus:outline-none hidden custom:block focus:ring-2 focus:ring-blue-500 font-carving-semi-bold mr-20"
            />
            <p className="text-base FC-BM font-carving-semi-bold mr-20">{firstName || "Nom Utilisateur"}</p>
          </div>
{/* ----------------------------------------------- MENU BRUGER ----------------------------------------------- */}
          <div
            className={`burger custom2:hidden ${isMobileMenuOpen ? "open" : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="burger-line line-1"></div>
            <div className="burger-line line-2"></div>
            <div className="burger-line line-3"></div>
          </div>
        </div>

{/* ----------------------------------------------- MOBILE MENU ----------------------------------------------- */}
        {isMobileMenuOpen && (
          <div className="custom2:hidden scrollbar-custom mobile-menu bg-white">
            <Slidebar />
          </div>
        )}
      </div>
  );
};

export default Header;