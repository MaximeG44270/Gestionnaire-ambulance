import React, { useState } from "react";
import Slidebar from "../../Composant/Slidebar";
import Header from "../../Composant/Header";
import { db } from "../../firebaseConfig";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import "../../index.css";
import "../../fonts.css";

const AjouterUtilisateurs: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    role: "salarié",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [warningMessage, setWarningMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const checkEmailExists = async (email: string) => {
    const q = query(collection(db, "utilisateurs"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    setWarningMessage("");

    try {
      const emailExists = await checkEmailExists(formData.email);
      if (emailExists) {
        setWarningMessage("Cette adresse e-mail est déjà utilisée.");
        return;
      }

      const auth = getAuth();
      const temporaryPassword = "temporaryPassword123";

      await createUserWithEmailAndPassword(auth, formData.email, temporaryPassword);

      const userRef = collection(db, "utilisateurs");
      await addDoc(userRef, {
        ...formData,
        createdAt: new Date().toISOString(),
        isActive: true,
      });

      await sendPasswordResetEmail(auth, formData.email);

      setSuccessMessage("Utilisateur ajouté avec succès ! Un email de réinitialisation de mot de passe a été envoyé.");
      setFormData({
        email: "",
        firstName: "",
        lastName: "",
        role: "salarié",
      });
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'utilisateur :", error);
      setErrorMessage("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-row flex-grow">
        <div className="hidden lg:block lg:w-64">
          <Slidebar />
        </div>
        <div className="flex-grow bg-gray-100 p-4">
          <h2 className="text-xl font-carving-black FC-BM text-center mb-4">
            AJOUTER UN UTILISATEUR
          </h2>
          {errorMessage && <p className="text-red-500 text-center font-carving-bold mb-2">{errorMessage}</p>}
          {successMessage && <p className="text-green-500 text-center font-carving-bold mb-2">{successMessage}</p>}
          {warningMessage && <p className="text-orange-500 text-center font-carving-bold mb-2">{warningMessage}</p>}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              name="email"
              placeholder="Email de l'utilisateur"
              value={formData.email}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2"
              required
            />
            <input
              type="text"
              name="firstName"
              placeholder="Prénom"
              value={formData.firstName}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Nom"
              value={formData.lastName}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2"
              required
            />
            <select
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2"
            >
              <option value="salarié">Salarié</option>
              <option value="responsable">Responsable</option>
              <option value="gérant">Gérant</option>
            </select>
            <button
              type="submit"
              className="px-4 py-2 bg-BM text-white font-semibold rounded-lg hover:bg-BM focus:outline-none focus:ring-2"
            >
              Ajouter Utilisateur
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AjouterUtilisateurs;