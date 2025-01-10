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
    {
      productName: "Masque FFP2",
      quantity: 50,
      expiryDate: "2025-06-01",
      label: "Oxygène",
      description: "Masque de protection respiratoire de haute qualité.",
      reference: "FFP2-001",
      manufacturer: "ProtecMed",
    },
    {
      productName: "Gel hydroalcoolique",
      quantity: 120,
      expiryDate: "2024-12-12",
      label: "K.AES",
      description: "Gel désinfectant pour les mains à base d'alcool.",
      reference: "GHA-001",
      manufacturer: "CleanHands",
    },
    {
      productName: "Gants latex",
      quantity: 200,
      expiryDate: "2025-03-01",
      label: "K.COVID",
      description: "Gants en latex pour usage médical.",
      reference: "GL-001",
      manufacturer: "MedGloves"
    },
    {
      productName: "Stéthoscope",
      quantity: 15,
      expiryDate: "",
      label: "Soins et pansements",
      description: "Instrument médical pour ausculter les sons corporels.",
      reference: "ST-001",
      manufacturer: "MedInstruments"
    },
    {
      productName: "Thermomètre",
      quantity: 30,
      expiryDate: "2025-07-02",
      label: "K.Accouchement",
      description: "Thermomètre médical pour mesurer la température corporelle.",
      reference: "TH-001",
      manufacturer: "TempCheck"
    },
    {
      productName: "Bande de gaze",
      quantity: 150,
      expiryDate: "2025-09-09",
      label: "K.Hémoragie",
      description: "Bande de gaze stérile pour pansements.",
      reference: "BG-001",
      manufacturer: "WoundCare"
    },
    {
      productName: "Oxygène médical",
      quantity: 20,
      expiryDate: "",
      label: "K.Membre",
      description: "Oxygène médical pour usage thérapeutique.",
      reference: "O2-001",
      manufacturer: "OxyCare"
    },
    {
      productName: "Bandage élastique",
      quantity: 80,
      expiryDate: "2025-11-10",
      label: "K.Brûlure",
      description: "Bandage élastique pour soutien et compression.",
      reference: "BE-001",
      manufacturer: "ElasticBand"
    },
    {
      productName: "Bouteille désinfectante",
      quantity: 100,
      expiryDate: "2025-12-05",
      label: "Oxygène",
      description: "Bouteille de solution désinfectante.",
      reference: "BD-001",
      manufacturer: "CleanSol"
    },
    {
      productName: "Seringue",
      quantity: 500,
      expiryDate: "2025-08-04",
      label: "K.AES",
      description: "Seringue stérile pour injections.",
      reference: "SR-001",
      manufacturer: "InjectMed"
    },
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