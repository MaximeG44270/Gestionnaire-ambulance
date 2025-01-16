import React, { useEffect, useState } from 'react';
import { collection, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import "../../index.css";
import "../../fonts.css";
import Header from "../../Composant/Header";
import Slidebar from "../../Composant/Slidebar";

const ListUtilisateurs: React.FC = () => {
  const [utilisateurs, setUtilisateurs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingUserId, setEditingUserId] = useState<string | null>(null);
  const [editData, setEditData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
  });

  useEffect(() => {
    const fetchUtilisateurs = async () => {
      try {
        const utilisateursCollectionRef = collection(db, 'utilisateurs');
        const snapshot = await getDocs(utilisateursCollectionRef);
        const utilisateurList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUtilisateurs(utilisateurList);
      } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUtilisateurs();
  }, []);

  const filteredUtilisateurs = utilisateurs.filter((utilisateur) => {
    const matchesRole = selectedRole ? utilisateur.role === selectedRole : true;
    const matchesSearchQuery =
      utilisateur.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      utilisateur.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      utilisateur.email.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRole && matchesSearchQuery;
  });

  const deleteUtilisateur = async (id: string) => {
    try {
      const utilisateurDocRef = doc(db, 'utilisateurs', id);
      await deleteDoc(utilisateurDocRef);
      setUtilisateurs(utilisateurs.filter(utilisateur => utilisateur.id !== id));
      alert("Utilisateur supprimé avec succès !");
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'utilisateur:', error);
    }
  };

  const modifyUtilisateur = async (id: string) => {
    try {
      const utilisateurDocRef = doc(db, 'utilisateurs', id);
      await updateDoc(utilisateurDocRef, { 
        firstName: editData.firstName, 
        lastName: editData.lastName, 
        email: editData.email,
        role: editData.role,
      });
      setUtilisateurs(utilisateurs.map(utilisateur => 
        utilisateur.id === id ? { ...utilisateur, ...editData } : utilisateur
      ));
      setIsEditing(false);
      setEditData({ firstName: '', lastName: '', email: '', role: '' });
      alert("Informations de l'utilisateur modifiées avec succès !");
    } catch (error) {
      console.error('Erreur lors de la modification des informations de l\'utilisateur:', error);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-row flex-grow">
        <div className="hidden custom2:block w-64">
          <Slidebar />
        </div>
        <div className="flex-grow overflow-y-auto max-h-87vh lg:max-h-91vh xl:max-h-92vh scrollbar-hide bg-gray-100 p-4">
          <h1 className="text-2xl font-carving-black FC-BM text-center mb-4">
            Liste des Utilisateurs
          </h1>

          <input
            type="text"
            placeholder="Rechercher..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border mb-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 font-carving-semi-bold"
          />

          <div className="mb-4 md:flex md:w-full md:space-x-4 p">
            <div className="flex justify-around space-x-4 md:mb-0 mb-4 md:w-full">
              <button
                className={`px-4 w-full py-2 rounded-lg font-carving-bold ${
                  selectedRole === 'salarié' ? 'bg-BM text-white' : 'bg-slate-400 text-white'
                }`}
                onClick={() => setSelectedRole('salarié')}>
                Salarié
              </button>
              <button
                className={`px-4 w-full py-2 rounded-lg font-carving-bold ${
                  selectedRole === 'gérant' ? 'bg-BM text-white' : 'bg-slate-400 text-white'
                }`}
                onClick={() => setSelectedRole('gérant')}>
                Gérant
              </button>
            </div>
            <div className="flex justify-around space-x-4 md:w-full">
              <button
                className={`px-4 w-full py-2 rounded-lg font-carving-bold ${
                  selectedRole === 'responsable' ? 'bg-BM text-white' : 'bg-slate-400 text-white'
                }`}
                onClick={() => setSelectedRole('responsable')}>
                Responsable
              </button>
              <button
                className="px-4 w-full py-2 rounded-lg font-carving-bold bg-slate-400 text-white"
                onClick={() => setSelectedRole(null)}>
                Complet
              </button>
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-32">
              <p className="text-gray-500">Chargement...</p>
            </div>
          ) : (
            <div className="w-full flex flex-col bg-white rounded-lg shadow-md">
              {filteredUtilisateurs.map((utilisateur) => (
                <div key={utilisateur.id} className="flex flex-col border-b p-4 md:flex-row">
                  <div className="flex flex-col justify-between items-center w-full">
                    <p className="text-black text-base self-start font-carving-bold">
                      Prénom:<span className="text-slate-400 ml-2 font-sans">{utilisateur.firstName}</span>
                    </p>
                    <p className="text-black text-base self-start font-carving-bold">
                      Nom:<span className="text-slate-400 ml-2 font-sans">{utilisateur.lastName}</span>
                    </p>
                    <div className="flex md:flex-row flex-col w-full">
                      <p className="text-black text-base self-start font-carving-bold md:mr-2">
                        Email:
                      </p>
                      <p className="text-black text-base self-start font-carving-bold">
                        <span className="text-slate-400 font-sans">{utilisateur.email}</span>
                      </p>
                    </div>
                    <p className="text-black text-base self-start font-carving-bold">
                      Rôle:<span className="text-slate-400 ml-2 font-sans">{utilisateur.role}</span>
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 flex md:flex-col justify-center md:justify-around space-x-4 md:space-x-0">
                    <button
                      className="px-4 py-2 bg-BM text-white rounded-lg"
                      onClick={() => {
                        setIsEditing(true);
                        setEditingUserId(utilisateur.id);
                        setEditData({
                          firstName: utilisateur.firstName,
                          lastName: utilisateur.lastName,
                          email: utilisateur.email,
                          role: utilisateur.role,
                        });
                      }}>
                      Modifier
                    </button>
                    <button
                      className="px-4 py-2 bg-slate-400 text-white rounded-lg"
                      onClick={() => deleteUtilisateur(utilisateur.id)}>
                      Supprimer
                    </button>
                  </div>

                  {isEditing && editingUserId === utilisateur.id && (
                    <div className="mt-4 md:mt-0 md:ml-8 flex flex-col">
                      <input
                        type="text"
                        placeholder="Prénom"
                        value={editData.firstName}
                        onChange={(e) => setEditData({ ...editData, firstName: e.target.value })}
                        className="px-4 py-2 mb-2 border border-gray-300 focus:outline-none focus:ring-2 rounded-lg"
                      />
                      <input
                        type="text"
                        placeholder="Nom"
                        value={editData.lastName}
                        onChange={(e) => setEditData({ ...editData, lastName: e.target.value })}
                        className="px-4 py-2 mb-2 border border-gray-300 focus:outline-none focus:ring-2 rounded-lg"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        value={editData.email}
                        onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                        className="px-4 py-2 mb-2 border border-gray-300 focus:outline-none focus:ring-2 rounded-lg"
                      />
                      <select
                        value={editData.role}
                        onChange={(e) => setEditData({ ...editData, role: e.target.value })}
                        className="px-4 py-2 mb-4 border border-gray-300 focus:outline-none focus:ring-2 rounded-lg"
                      >
                        <option value="">Sélectionner un rôle</option>
                        <option value="salarié">Salarié</option>
                        <option value="responsable">Responsable</option>
                        <option value="gérant">Gérant</option>
                      </select>
                      <button
                        onClick={() => modifyUtilisateur(utilisateur.id)}
                        className="px-4 py-2 mb-4 bg-BM text-white rounded-lg">
                        Valider
                      </button>
                      <button
                        onClick={() => {
                          setIsEditing(false);
                          setEditData({ firstName: '', lastName: '', email: '', role: '' });
                        }}
                        className="px-4 py-2 bg-slate-400 text-white rounded-lg">
                        Annuler
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListUtilisateurs;