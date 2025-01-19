import React, { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import Slidebar from "./Slidebar";
import "../index.css";
import "../fonts.css";


const Header: React.FC = () => {
  const [firstName, setFirstName] = useState<string | null>("Nom Utilisateur");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const fetchFirstName = async () => {
    try {
      const userId = auth.currentUser?.uid;
      if (userId) {
        const userDocRef = doc(db, "users", userId);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          setFirstName(userData.firstName);
        } else {
          console.error("Aucun document trouvé pour cet utilisateur.");
        }
      } else {
        console.error("Aucun utilisateur connecté.");
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des données utilisateur :", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/auth/login");
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error);
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
          <p className="text-base FC-BM hidden custom3:block font-carving-semi-bold">
            Ambulance Digital
          </p>
        </div>
        <div className="w-2/3 flex justify-end items-center">
        {/* TODO: faire peut-etre une barre de recherche mais pas encore l'idée
          <input
            type="text"
            placeholder="Rechercher..."
            className="px-4 py-2 border rounded-lg focus:outline-none hidden custom:block focus:ring-2 focus:ring-blue-500 font-carving-semi-bold mr-20"
          /> */}
          <p className="text-base FC-BM font-carving-semi-bold mr-6">
            {firstName || "Nom Utilisateur"}
          </p>
          <img
            src="/image/deco.png"
            alt="Déconnexion"
            className="w-6 h-6 mr-8 cursor-pointer"
            onClick={handleLogout}
          />
        </div>
        <div
          className={`burger custom2:hidden ${isMobileMenuOpen ? "open" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="burger-line line-1"></div>
          <div className="burger-line line-2"></div>
          <div className="burger-line line-3"></div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className="fixed inset-y-0 left-0 z-50">
            <Slidebar />
          </div>
        </>
      )}
    </div>
  );
};

export default Header;