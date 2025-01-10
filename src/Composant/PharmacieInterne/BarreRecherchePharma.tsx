import React, { useState } from 'react';

interface Product {
    name: string;
    quantity: string;
    expirationDate: string;
    label: string;
    description: string;
    reference: string;
    manufacturer: string;
}

interface BarreRecherchePharmaProps {
    produits: Product[];
    onSearchResult: (result: Product[]) => void;
}

const BarreRecherchePharma: React.FC<BarreRecherchePharmaProps> = ({ produits, onSearchResult }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);

        const filteredResults = produits.filter(
            (produit) =>
                produit.name.toLowerCase().includes(query.toLowerCase()) ||
                produit.reference.toLowerCase().includes(query.toLowerCase())
        );

        onSearchResult(filteredResults);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const filteredResults = produits.filter(
                (produit) =>
                    produit.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    produit.reference.toLowerCase().includes(searchQuery.toLowerCase())
            );
            onSearchResult(filteredResults);
        }
    };

    return (
        <input
            type="text"
            value={searchQuery}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            placeholder="Rechercher un produit ou une référence..."
            className="px-4 py-2 border mb-4 md:mt-8 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 font-carving-semi-bold"
        />
    );
};

export default BarreRecherchePharma;