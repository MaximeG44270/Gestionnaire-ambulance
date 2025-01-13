// Composant affichage bouton pour ajouter des produits en masse pour la BDD !!!
// import AjoutBDDMasse from './AjoutBDDMasse';

import React, { useState } from 'react';
import { collection, query, where, getDocs, updateDoc, addDoc, doc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const ProductForm: React.FC = () => {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState<number | ''>('');
  const [expiryDate, setExpiryDate] = useState('');
  const [label, setLabel] = useState('');
  const [description, setDescription] = useState('');
  const [reference, setReference] = useState('');
  const [manufacturer, setManufacturer] = useState('');

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [warning, setWarning] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!productName || !quantity || !expiryDate || !label || !description || !reference || !manufacturer) {
      setError('Tous les champs sont obligatoires.');
      setSuccess('');
      setWarning('');
      return;
    }

    try {
      const productsRef = collection(db, 'products');
      const normalizedReference = reference.trim().toUpperCase();

      const refQuery = query(
        productsRef,
        where('reference', '==', normalizedReference)
      );

      const refQuerySnapshot = await getDocs(refQuery);
      
      const exactQuery = query(
        productsRef,
        where('reference', '==', normalizedReference),
        where('expiryDate', '==', expiryDate)
      );

      const exactQuerySnapshot = await getDocs(exactQuery);

      const hasProductWithDifferentDate = refQuerySnapshot.docs.some(
        doc => doc.data().expiryDate !== expiryDate
      );

      if (!exactQuerySnapshot.empty) {
        const productDoc = exactQuerySnapshot.docs[0];
        const newQuantity = (productDoc.data().quantity || 0) + Number(quantity);

        await updateDoc(doc(db, 'products', productDoc.id), {
          quantity: newQuantity,
        });

        setSuccess('Quantité mise à jour avec succès pour la référence existante !');
        
        if (hasProductWithDifferentDate) {
          setWarning('Note : Ce produit existe également avec d\'autres dates de péremption dans la base de données.');
        }
      } else {
        await addDoc(productsRef, {
          productName,
          quantity: Number(quantity),
          expiryDate,
          label,
          description,
          reference: normalizedReference,
          manufacturer,
          createdAt: new Date(),
        });

        setSuccess('Produit ajouté avec succès !');
        
        if (hasProductWithDifferentDate) {
          setWarning('Attention : Un produit avec la même référence mais une date de péremption différente existe déjà dans la base de données.');
        }
      }

      setProductName('');
      setQuantity('');
      setExpiryDate('');
      setLabel('');
      setDescription('');
      setReference('');
      setManufacturer('');
      setError('');
    } catch (err) {
      console.error('Erreur lors de l\'ajout ou de la mise à jour du produit:', err);
      setError('Une erreur est survenue. Veuillez réessayer.');
      setSuccess('');
      setWarning('');
    }
  };

  return (
    <div className="max-w-md overflow-y-auto max-h-80vh scrollbar-hide mx-auto p-4">
      <h2 className="text-xl font-carving-black FC-BM text-center mb-4">
        AJOUTER UN PRODUIT DANS LE STOCK PHARMACIE
      </h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      {success && <p className="text-green-500 mb-2">{success}</p>}
      {warning && <p className="text-orange-500 mb-2">{warning}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nom du produit"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2"
        />
        <input
          type="number"
          placeholder="Quantité"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value) || '')}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2"
        />
        <input
          type="date"
          placeholder="Date de péremption"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2"
        />
        <select
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2"
        >
          <option value="" disabled>Choisissez un label</option>
          <option value="K.AES">K.AES</option>
          <option value="K.Accouchement">K.Accouchement</option>
          <option value="K.Brûlure">K.Brûlure</option>
          <option value="K.COVID">K.COVID</option>
          <option value="K.Hémoragie">K.Hémoragie</option>
          <option value="K.Membre">K.Membre</option>
          <option value="Oxygène">Oxygène</option>
          <option value="Soins et pansements">Soins et pansements</option>
        </select>
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2"
        ></textarea>
        <input
          type="text"
          placeholder="Référence"
          value={reference}
          onChange={(e) => setReference(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2"
        />
        <input
          type="text"
          placeholder="Nom du fabricant"
          value={manufacturer}
          onChange={(e) => setManufacturer(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-BM text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2"
        >
          Ajouter
        </button>
        {/* <AjoutBDDMasse /> */}
      </form>
    </div>
  );
};

export default ProductForm;