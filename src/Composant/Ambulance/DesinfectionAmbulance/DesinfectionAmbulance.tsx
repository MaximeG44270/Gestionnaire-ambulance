import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import "../../../index.css";
import "../../../fonts.css";
import Header from "../../Header";
import Slidebar from "../../Slidebar";

const Desinfection: React.FC = () => {
    const { id } = useParams();
    const [ambulance, setAmbulance] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAmbulance = async () => {
            try {
                const ambulanceRef = doc(db, "ambulances", id!);
                const ambulanceSnapshot = await getDoc(ambulanceRef);

                if (ambulanceSnapshot.exists()) {
                    setAmbulance({ id: ambulanceSnapshot.id, ...ambulanceSnapshot.data() });
                } else {
                    console.error("Aucune ambulance trouvée avec cet ID.");
                }
            } catch (error) {
                console.error("Erreur lors de la récupération de l'ambulance:", error);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchAmbulance();
        }
    }, [id]);

    if (loading) {
        return <p>Chargement...</p>;
    }

    if (!ambulance) {
        return <p>Aucune ambulance trouvée.</p>;
    }

    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-row flex-grow">
                <div className="hidden custom2:block w-64">
                    <Slidebar />
                </div>
                <div className="w-full overflow-y-auto max-h-87vh bg-gray-100 scrollbar-hide">
{/* --------------------------------------------- THIRD BLOCK
 --------------------------------------------- */}
                    <div className="flex flex-col p-4">
                        <h1 className="text-2xl text-center font-carving-bold FC-BM font-bold mb-4">
                            Désinfection de l'ambulance: <span className="text-slate-400">{ambulance.name}</span>
                        </h1>
{/* --------------------------------------------- FORMULAIRE --------------------------------------------- */}                        
                        <div>
                            <p className="bg-BM w-full rounded-t-lg h-12 content-center text-xl font-carving-black text-white text-center">
                                Formulaire de désinfection
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Desinfection;