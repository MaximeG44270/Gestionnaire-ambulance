import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
import "../../../index.css";
import "../../../fonts.css";

const Ambulance: React.FC = () => {
    const [ambulances, setAmbulances] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');

    useEffect(() => {
        const fetchAmbulances = async () => {
            try {
                const ambulancesCollectionRef = collection(db, 'ambulances');
                const snapshot = await getDocs(ambulancesCollectionRef);
                const ambulanceList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setAmbulances(ambulanceList);
            } catch (error) {
                console.error('Erreur lors de la récupération des ambulances:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAmbulances();
    }, []);

    const filteredAmbulances = ambulances.filter(ambulance => {
        const matchesType = selectedType ? ambulance.type === selectedType : true;
        const matchesSearchQuery =
            ambulance.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            ambulance.plate.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesType && matchesSearchQuery;
    });

    return (
        <div className="flex-grow overflow-y-auto bg-gray-100 p-4 h-screen">
{/* --------------------------------------------- FIRST BLOCK --------------------------------------------- */}
            <div className="w-full flex flex-col md:flex-row">
                <div className="w-full">
                    <p className="items-center text-center text-2xl w-full FC-BM mr-4 p-4 font-carving-black">
                        Accès Ambulance
                    </p>
                </div>
                <div className="w-full">
                    <input
                        type="text"
                        placeholder="Rechercher..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="px-4 py-2 border mb-4 md:mt-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 font-carving-semi-bold"
                    />
                </div>
            </div>

{/* --------------------------------------------- SECOND BLOCK --------------------------------------------- */}
            <div className="w-full flex flex-col md:flex-row">
                <button
                    className={`px-4 py-2 md:mr-8 text-xl rounded-lg font-carving-bold ${
                        selectedType === 'Petit Volume' ? 'bg-BM text-white' : 'bg-slate-400 text-white'}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        setSelectedType('Petit Volume');}}>
                    Petit Volume
                </button>
                <button
                    className={`mt-4 md:mt-0 px-4 py-2 text-xl rounded-lg font-carving-bold ${
                        selectedType === 'Grand Volume' ? 'bg-BM text-white' : 'bg-slate-400 text-white'}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        setSelectedType('Grand Volume');}}>
                    Grand Volume
                </button>
                <button
                    className="bg-slate-400 text-white px-4 py-2 mt-4 md:mt-0 text-xl md:ml-8 rounded-lg font-carving-bold"
                    onClick={() => setSelectedType(null)}>
                    Tout afficher
                </button>
            </div>

{/* --------------------------------------------- THIRD BLOCK --------------------------------------------- */}
            <div className="w-full flex flex-col justify-center items-center mt-4">
                <p className="bg-BM w-full rounded-t-lg h-12 content-center text-xl font-carving-black text-white text-center">
                    Liste des véhicules
                </p>
            </div>
            {loading ? (
                <div className="flex justify-center items-center h-32">
                    <p className="text-gray-500">Chargement...</p>
                </div>
            ) : (
                <div className="w-full flex flex-col bg-white rounded-b-lg">
                    {filteredAmbulances.map((ambulance) => (
                        <div key={ambulance.id} className="w-full flex flex-col border-b md:border-0 md:flex-row p-4 md:p-2">
                            <div className="flex justify-around items-center w-full">
                                <p className="text-black text-sm text-center font-carving-bold">{ambulance.name}</p>
                                <p className="text-black text-sm text-center font-carving-bold">{ambulance.plate}</p>
                            </div>
                            <div className="flex justify-around md:mt-0 mt-4">
                                <button className="text-white bg-BM px-2 py-1 md:mr-8 rounded-md text-sm font-carving-bold">
                                    Pharmacie
                                </button>
                                <button className="text-white bg-BM px-2 py-1 rounded-md text-sm font-carving-bold">
                                    Désinfection
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Ambulance;