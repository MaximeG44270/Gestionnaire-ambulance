import React, { useState, useEffect } from "react";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import Stock from "./Stock";
import { Product } from "../PharmacieInterne/Types";

const PharmacieStock: React.FC = () => {
    const [selectedButton, setSelectedButton] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [data, setData] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [quantityInput, setQuantityInput] = useState<string>("");
    const [message, setMessage] = useState<string | null>(null);
    const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    const fetchProducts = async () => {
        try {
            const productsRef = collection(db, "products");
            const querySnapshot = await getDocs(productsRef);

            const productsData: Product[] = querySnapshot.docs.map(doc => {
                const data = doc.data();
                return {
                    id: doc.id,
                    name: data.productName,
                    quantity: data.quantity.toString(),
                    expirationDate: data.expiryDate,
                    label: data.label,
                    description: data.description,
                    reference: data.reference,
                    manufacturer: data.manufacturer,
                };
            });

            setData(productsData);
        } catch (error) {
            console.error("Erreur lors de la récupération des produits:", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const isExpiringOrExpired = (expirationDate: string): boolean => {
        const today = new Date();

        if (expirationDate === "N/A") {
            return false;
        }

        const expiration = new Date(expirationDate);
        const threeMonthsFromNow = new Date();
        threeMonthsFromNow.setMonth(today.getMonth() + 3);

        return expiration <= threeMonthsFromNow;
    };

    const handleButtonClick = (buttonName: string) => {
        setSelectedButton(buttonName);
    };

    const handleProductClick = (product: Product) => {
        setSelectedProduct(product);
        setSelectedProductId(product.id);
    };

    const filteredData = data.filter((row) => {
        if (selectedButton && row.label !== selectedButton) return false;
        return row.name.toLowerCase().includes(searchQuery.toLowerCase()) || row.reference.toLowerCase().includes(searchQuery.toLowerCase());
    });

    const expiringOrExpiredData = data.filter((row) => isExpiringOrExpired(row.expirationDate));

    const handleSearchEnter = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            const foundProduct = data.find(product => product.name.toLowerCase() === searchQuery.toLowerCase() || product.reference.toLowerCase() === searchQuery.toLowerCase());

            if (foundProduct) {
                setSelectedProduct(foundProduct);
            } else {
                setSelectedProduct(null);
            }
        }
    };

    const handleAddQuantity = async () => {
        if (selectedProduct && quantityInput) {
            const newQuantity = parseInt(selectedProduct.quantity) + parseInt(quantityInput);
            const updatedProduct = { ...selectedProduct, quantity: newQuantity.toString() };
            setSelectedProduct(updatedProduct);
            setQuantityInput("");

            await updateProductQuantity(selectedProduct.id, newQuantity);
            setMessage(`Quantité ajoutée avec succès. Nouvelle quantité : ${newQuantity}`);
            setIsVisible(true);
        }
    };

    const handleRemoveQuantity = async () => {
        if (selectedProduct && quantityInput) {
            const newQuantity = parseInt(selectedProduct.quantity) - parseInt(quantityInput);
            const updatedProduct = { ...selectedProduct, quantity: newQuantity.toString() };
            setSelectedProduct(updatedProduct);
            setQuantityInput("");

            await updateProductQuantity(selectedProduct.id, newQuantity);
            setMessage(`Quantité retirée avec succès. Nouvelle quantité : ${newQuantity}`);
            setIsVisible(true);
        }
    };

    const updateProductQuantity = async (productId: string, newQuantity: number) => {
        try {
            const productRef = doc(db, "products", productId);
            await updateDoc(productRef, { quantity: newQuantity });
            console.log("Quantité mise à jour dans Firestore");
        } catch (error) {
            console.error("Erreur lors de la mise à jour de la quantité dans Firestore:", error);
            setMessage("Erreur lors de la mise à jour de la quantité.");
            setIsVisible(true);
        }
    };

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage(null);
                setIsVisible(false);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [message]);

    return (
        <div>
            <div className="flex flex-col md:flex-row w-full">
{/* ---------------------------------------------- BLOCK LEFT --------------------------------------------- */}
                <div className="w-full overflow-y-auto max-h-80vh scrollbar-hide flex flex-col md:ml-4 md:w-1/2 md:mt-4">
{/* ---------------------------------------------- FIRST BLOCK -------------------------------------------- */}
                    <div className="w-full flex flex-col items-center md:mt-0">
                        <p className="items-center text-center text-2xl w-full FC-BM mr-4 p-4 font-carving-black">
                            Pharmacie sur site
                        </p>
                    </div>

{/* ----------------------------------------------- THREE BLOCK -------------------------------------------- */}
                    <div className="w-full flex flex-col justify-center items-center mt-4">
                        <p className="bg-BM w-full rounded-t-lg h-12 content-center text-xl font-carving-black text-white text-center">
                            Date de péremption
                        </p>
                        <div className="bg-white grid grid-cols-[2fr_1fr_1fr] text-center w-full text-black p-4 font-carving-bold">
                            <p className="text-left text-gray-500 font-bold">Produits</p>
                            <p className="text-center text-gray-500 hidden font-bold">Quantité</p>
                            <p className="text-center text-gray-500 hidden font-bold">Date Péremption</p>
                        </div>
                        <div className="bg-white text-center grid w-full text-black rounded-b-lg shadow-lg pl-4 max-h-52 overflow-y-auto">
                            {expiringOrExpiredData.map((row) => (
                                <button
                                    key={row.id}
                                    className={`grid grid-cols-[2fr_1fr_1fr] w-full mb-2 cursor-pointer hover:bg-gray-300 hover:p-3 hover:rounded-lg transition-colors duration-300 ${selectedProductId === row.id ? 'bg-gray-300 rounded-lg p-3' : ''}`}
                                    onClick={() => handleProductClick(row)}
                                >
                                    <p className="text-left">{row.name}</p>
                                    <p className="text-center hidden">{row.quantity}</p>
                                    <p className="text-center hidden">{row.expirationDate}</p>
                                </button>
                            ))}
                        </div>
                    </div>

{/* --------------------------------------------- FOUR BLOCK --------------------------------------------- */}
                    <div className="w-full flex flex-col justify-center items-center mt-4">
                        <div className="w-full flex flex-col justify-center items-center mb-4">
                            <div className="w-full flex justify-between flex-wrap">
                                <div className="flex flex-col xl:flex-wrap xl:flex-row w-full xl:gap-y-4">
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 w-full">
                                        <button
                                            className="bg-slate-400 text-white px-4 py-2 rounded-lg font-carving-bold"
                                            onClick={() => handleButtonClick('Soins et pansements')}>Soins et pansements</button>
                                        <button
                                            className="bg-slate-400 text-white px-4 py-2 rounded-lg font-carving-bold"
                                            onClick={() => handleButtonClick('K.AES')}>K.AES</button>
                                        <button
                                            className="bg-slate-400 text-white px-4 py-2 rounded-lg font-carving-bold"
                                            onClick={() => handleButtonClick('K.COVID')}>K.COVID</button>
                                        <button
                                            className="bg-slate-400 text-white px-4 py-2 rounded-lg font-carving-bold"
                                            onClick={() => handleButtonClick('Oxygène')}>Oxygène</button>
                                        <button
                                            className="bg-slate-400 text-white px-4 py-2 rounded-lg font-carving-bold"
                                            onClick={() => handleButtonClick('K.Accouchement')}>K.Accouchement</button>
                                        <button
                                            className="bg-slate-400 text-white px-4 py-2 rounded-lg font-carving-bold"
                                            onClick={() => handleButtonClick('K.Hémoragie')}>K.Hémoragie</button>
                                        <button
                                            className="bg-slate-400 text-white px-4 py-2 rounded-lg font-carving-bold"
                                            onClick={() => handleButtonClick('K.Membre')}>K.Membre</button>
                                        <button
                                            className="bg-slate-400 text-white px-4 py-2 rounded-lg font-carving-bold"
                                            onClick={() => handleButtonClick('K.Brûlure')}>K.Brûlure</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Stock selectedButton={selectedButton} filteredData={filteredData} onProductClick={handleProductClick} />
                </div>

{/* --------------------------------------------- RIGHT BLOCK --------------------------------------------- */}
                <div className="w-full flex flex-col mt-8 overflow-y-auto max-h-80vh items-center md:mt-0 md:ml-4 md:w-1/2">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleSearchEnter}
                        placeholder="Rechercher..."
                        className="px-4 py-2 border mb-4 md:mt-8 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 font-carving-semi-bold"
                    />

{/* --------------------------------------------- FIRST BLOCK --------------------------------------------- */}
                    <p className="bg-BM w-full rounded-t-lg min-h-12 content-center text-xl lg:mt-2 font-carving-black text-white text-center">
                        Description du produit
                    </p>
                    <div className="bg-white w-full mb-4 text-black rounded-b-lg shadow-lg p-4 overflow-y-auto">
                        {selectedProduct ? (
                            <>
                                <p className="text-left FC-BM font-bold">Description :</p>
                                <p className="text-left break-words max-w-80">{selectedProduct.description ?? "Aucune description disponible"}</p>
                                <p className="text-left FC-BM font-bold mt-8">Quantité en stock :</p>
                                <p className="text-left">{selectedProduct.quantity}</p>
                                <div className="flex mt-8">
                                    <div className="flex flex-col w-1/2">
                                        <p className="text-left FC-BM font-bold">Date de péremption:</p>
                                        <p className="text-left">{selectedProduct.expirationDate ?? "Non précisée"}</p>
                                    </div>
                                    <div className="flex flex-col w-1/2 justify-end items-end">
                                        <p className="text-left FC-BM font-bold">Référence:</p>
                                        <p className="text-left">{selectedProduct.reference ?? "Non précisée"}</p>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <p>Aucun produit sélectionné</p>
                        )}
                    </div>

{/* --------------------------------------------- SECOND BLOCK ---------------------------------------------- */}
                    <div className="w-full">
                        <input
                            type="text"
                            value={quantityInput}
                            onChange={(e) => setQuantityInput(e.target.value)}
                            placeholder="Ajouter ou retirer des produits..."
                            className="px-4 py-2 border mb-4 md:mt-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 font-carving-semi-bold"
                        />
                    </div>
                    <div className="w-full flex justify-between mt-4">
                        <button
                            className="bg-BM text-white px-4 py-2 rounded-lg w-[48%]"
                            onClick={handleAddQuantity}>
                            Ajouter
                        </button>
                        <button
                            className="bg-slate-400 text-white px-4 py-2 rounded-lg w-[48%]"
                            onClick={handleRemoveQuantity}>
                            Retirer
                        </button>
                    </div>

{/* --------------------------------------------- AFFICHER LE MESSAGE ---------------------------------------------- */}
                    {message && (
                        <div className={`mt-4 p-4 bg-green-200 text-green-800 rounded-lg transition-all duration-500 ease-in-out ${isVisible ? 'fade-in-left' : 'fade-out-left'}`}>
                            {message}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PharmacieStock;