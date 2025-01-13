import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';

const AddAmbulance: React.FC = () => {
    const [name, setName] = useState('');
    const [plate, setPlate] = useState('');
    const [type, setType] = useState('Petit Volume');
    const [message, setMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const plateRegex = /^[A-Z]{2}-\d{3}-[A-Z]{2}$/;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !plate) {
            setMessage('Veuillez remplir tous les champs');
            return;
        }

        if (!plateRegex.test(plate)) {
            setMessage('La plaque d\'immatriculation doit être au format XX-YYY-XX. X=Lettre en majuscule Y=Nombre !!!');
            return;
        }

        setLoading(true);

        try {
            const ambulancesCollectionRef = collection(db, 'ambulances');
            await addDoc(ambulancesCollectionRef, {
                name,
                plate,
                type,
            });

            setMessage('Ambulance ajoutée avec succès !');
            setName('');
            setPlate('');
            setType('Petit Volume');
        } catch (error) {
            setMessage('Erreur lors de l\'ajout de l\'ambulance.');
        }

        setLoading(false);
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 rounded-lg">
            <h2 className="text-xl font-carving-black FC-BM text-center mb-4">
              AJOUTER UNE AMBULANCE
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Nom de l'ambulance</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nom de l'ambulance"
                        className="border w-full border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2"
                    />
                </div>

                <div>
                    <label htmlFor="plate" className="block text-sm font-semibold text-gray-700">Plaque d'immatriculation</label>
                    <input
                        type="text"
                        id="plate"
                        value={plate}
                        onChange={(e) => setPlate(e.target.value)}
                        placeholder="XX-YYY-XX"
                        className="border w-full border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2"
                    />
                    {!plateRegex.test(plate) && plate.length > 0 && (
                        <p className="text-red-500 text-sm mt-1">Format attendu : XX-YYY-XX</p>
                    )}
                </div>

                <div>
                    <label htmlFor="type" className="block text-sm font-semibold text-gray-700">Type de l'ambulance</label>
                    <select
                        id="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="border w-full border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2"
                    >
                        <option value="Petit Volume">Petit Volume</option>
                        <option value="Grand Volume">Grand Volume</option>
                    </select>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full px-4 py-2 text-white rounded-lg mt-4 ${loading ? 'bg-gray-500' : 'bg-BM hover:bg-BM'}`}
                >
                    {loading ? 'Chargement...' : 'Ajouter l\'ambulance'}
                </button>
            </form>

            {message && (
                <p className={`mt-4 text-center ${message.includes('Erreur') ? 'text-red-500' : 'text-green-500'}`}>
                    {message}
                </p>
            )}
        </div>
    );
};

export default AddAmbulance;