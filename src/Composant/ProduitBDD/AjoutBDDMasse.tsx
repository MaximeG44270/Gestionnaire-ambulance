import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

type Product = {
  productName: string;
  quantity: number;
  expiryDate: string;
  label: string;
  description: string;
  reference: string;
  manufacturer: string;
};

const AjoutBDDMasse: React.FC = () => {
  const [data, setData] = useState<Product[]>([   
  ]);

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleMassUpload = async () => {
    if (data.length === 0) {
      setError('Le tableau des produits est vide.');
      setSuccess('');
      return;
    }

    try {
      const invalidProducts = data.filter(product => 
        !product.productName ||
        !product.quantity ||
        !product.label ||
        !product.description ||
        !product.reference ||
        !product.manufacturer
      );

      if (invalidProducts.length > 0) {
        setError('Certains produits ont des champs obligatoires manquants.');
        setSuccess('');
        return;
      }

      const batchPromises = data.map((product) =>
        addDoc(collection(db, 'products'), {
          ...product,
          quantity: Number(product.quantity),
          reference: product.reference.trim().toUpperCase(),
          createdAt: new Date(),
        })
      );

      await Promise.all(batchPromises);

      setData([]);
      setError('');
      setSuccess('Tous les produits ont été ajoutés avec succès !');
    } catch (err) {
      console.error('Erreur lors de l\'ajout des produits:', err);
      setError('Une erreur est survenue lors de l\'ajout en masse. Veuillez réessayer.');
      setSuccess('');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl mt-8 font-bold text-center mb-4">
        AJOUTER TOUS LES PRODUITS EN BASE DE DONNÉE
      </h2>
      {error && <p className="text-red-500 text-center mb-2">{error}</p>}
      {success && <p className="text-green-500 text-center mb-2">{success}</p>}

      <button
        onClick={handleMassUpload}
        className="mt-4 w-full px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Ajouter tous les produits
      </button>
    </div>
  );
};

export default AjoutBDDMasse;