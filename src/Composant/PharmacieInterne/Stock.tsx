import React, { useState } from "react";
import { Product } from "../PharmacieInterne/Types";

interface StockProps {
    selectedButton: string | null;
    filteredData: Product[];
    onProductClick: (product: Product) => void;
}

const Stock: React.FC<StockProps> = ({ selectedButton, filteredData, onProductClick }) => {
    const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

    const handleProductClick = (product: Product) => {
        setSelectedProductId(product.id);
        onProductClick(product);
    };

    return (
        <>
            {selectedButton && (
                <div className="w-full flex flex-col justify-center items-center">
                    <p className="bg-BM w-full rounded-t-lg h-12 content-center text-xl font-carving-black text-white text-center">
                        {selectedButton}
                    </p>
                    <div className="bg-white text-center items-center w-full text-black rounded-b-lg shadow-lg p-4 max-h-52 overflow-y-auto">
                        <div className="grid grid-cols-[2fr_1fr_1fr] w-full mb-2">
                            <p className="font-bold text-left">Produit</p>
                            <p className="font-bold text-center">Quantité</p>
                            <p className="font-bold text-center">Date de péremption</p>
                        </div>
                        {filteredData.map((row) => (
                            <button
                                key={row.id}
                                className={`grid grid-cols-[2fr_1fr_1fr] w-full  mb-2 cursor-pointer transition-colors duration-300 ${selectedProductId === row.id ? 'bg-gray-300 rounded-lg p-3' : ''}`}
                                onClick={() => handleProductClick(row)}
                            >
                                <p className="text-left">{row.name}</p>
                                <p className="text-center">{row.quantity}</p>
                                <p className="text-center">{row.expirationDate}</p>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Stock;