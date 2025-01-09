import React, { useState } from "react";
import Stock from "./Stock";

type Product = [string, string, string, string];

const data: Product[] = [
    ["Masque FFP2", "50", "01/06/25", "Oxygène"],
    ["Gel hydroalcoolique", "120", "12/12/24", "K.AES"],
    ["Gants latex", "200", "01/03/25", "K.COVID"],
    ["Stéthoscope", "15", "N/A", "Soins et pansements"],
    ["Thermomètre", "30", "02/07/25", "K.Accouchement"],
    ["Bande de gaze", "150", "09/09/25", "K.Hémoragie"],
    ["Oxygène médical", "20", "N/A", "K.Membre"],
    ["Bandage élastique", "80", "10/11/25", "K.Brûlure"],
    ["Bouteille désinfectante", "100", "05/12/25", "Oxygène"],
    ["Seringue", "500", "04/08/25", "K.AES"],
    ["Comprimés de Paracétamol", "1000", "05/01/26", "K.COVID"],
    ["Antibiotique", "250", "11/11/25", "Soins et pansements"],
    ["Masque chirurgical", "200", "15/04/25", "K.Accouchement"],
    ["Pansement adhésif", "350", "06/06/25", "K.Hémoragie"],
    ["Gants de chirurgie", "70", "15/10/25", "K.Membre"],
    ["Antiseptique", "180", "11/09/25", "K.Brûlure"],
    ["Seringues 10 ml", "400", "07/03/25", "Oxygène"],
    ["Masque de protection", "120", "01/05/25", "K.AES"],
    ["Gants non stériles", "250", "01/09/25", "K.COVID"],
    ["Stérilisateur", "5", "N/A", "Soins et pansements"],
    ["Thermomètre sans contact", "40", "01/02/25", "K.Accouchement"],
    ["Pansement hydrocolloïde", "60", "15/06/25", "K.Hémoragie"],
    ["Gants chirurgicaux", "100", "25/10/25", "K.Membre"],
    ["Bandages compressifs", "90", "13/08/25", "K.Brûlure"],
    ["Savon antiseptique", "200", "12/05/25", "Oxygène"],
    ["Bouteille de gel désinfectant", "75", "01/04/25", "K.AES"],
    ["Flacon de solution saline", "50", "03/12/25", "K.COVID"],
    ["Sutures", "250", "25/07/25", "Soins et pansements"],
    ["Bande cohésive", "150", "30/11/25", "K.Accouchement"],
    ["Compresses stériles", "500", "20/05/25", "K.Hémoragie"],
    ["Thermomètre médical", "35", "08/01/25", "K.Membre"],
    ["Aiguilles à injecter", "800", "15/03/25", "K.Brûlure"],
    ["Spirales contraceptives", "50", "02/10/25", "Oxygène"],
    ["Lames de scalpel", "100", "06/06/25", "K.AES"],
    ["Aérosol médical", "30", "12/08/25", "K.COVID"],
    ["Antibiotiques en crème", "150", "19/05/25", "Soins et pansements"],
    ["Savon antiseptique liquide", "300", "18/09/25", "K.Accouchement"],
    ["Pansement pour brûlures", "80", "14/07/25", "K.Hémoragie"],
    ["Kits de premiers secours", "20", "N/A", "K.Membre"],
    ["Gants en nitrile", "400", "22/02/25", "K.Brûlure"],
    ["Compresses gazeuses", "200", "25/09/25", "Oxygène"],
    ["Lentilles de contact", "100", "03/01/26", "K.AES"],
    ["Spray antiseptique", "50", "05/06/25", "K.COVID"],
    ["Kit d'hygiène buccale", "80", "11/12/25", "Soins et pansements"],
    ["Pansement pour ampoules", "120", "09/01/25", "K.Accouchement"],
    ["Lubrifiant médical", "60", "21/10/25", "K.Hémoragie"],
    ["Pansement pour coupures", "150", "04/02/25", "K.Membre"],
    ["Bande de compression", "100", "18/07/25", "K.Brûlure"],
    ["Ciseaux médicaux", "30", "N/A", "Oxygène"],
    ["Thermomètre infrarouge", "45", "15/05/25", "K.AES"],
    ["Aiguilles de suture", "300", "02/04/25", "K.COVID"],
    ["Patchs de froid", "200", "27/11/25", "Soins et pansements"],
    ["Tensio-mètre", "60", "09/08/25", "K.Accouchement"],
    ["Masque chirurgical jetable", "350", "28/05/25", "K.Hémoragie"],
    ["Système d'aspiration", "5", "N/A", "K.Membre"],
    ["Pansements pour plaies", "500", "03/12/25", "K.Brûlure"],
    ["Aérosol pour inhalation", "80", "17/09/25", "Oxygène"],
    ["Bande de fixation", "250", "06/03/25", "K.AES"],
    ["Pince chirurgicale", "100", "15/10/25", "K.COVID"],
    ["Stérilisateurs à vapeur", "10", "N/A", "Soins et pansements"],
    ["Détergent médical", "150", "30/06/25", "K.Accouchement"],
    ["Kit d'urgence", "20", "N/A", "K.Hémoragie"],
    ["Plastiques pour plaies", "180", "23/07/25", "K.Membre"],
    ["Trousse de premiers secours", "50", "N/A", "K.Brûlure"],
    ["Gel anesthésiant", "60", "05/02/25", "Oxygène"],
    ["Lampe de poche médicale", "70", "N/A", "K.AES"],
    ["Tablettes de magnésium", "1000", "12/11/25", "K.COVID"],
    ["Pommade antibactérienne", "150", "30/04/25", "Soins et pansements"],
    ["Bande de fixation élastique", "200", "02/08/25", "K.Accouchement"],
    ["Cicatrisation rapide", "120", "20/09/25", "K.Hémoragie"],
    ["Lance à perfusion", "50", "N/A", "K.Membre"],
    ["Bande cohésive absorbante", "150", "01/03/25", "K.Brûlure"],
    ["Tampons hémostatiques", "100", "15/06/25", "Oxygène"],
    ["Solution de lavage oculaire", "80", "23/05/25", "K.AES"],
    ["Gants de protection", "400", "12/07/25", "K.COVID"],
    ["Plâtre médical", "100", "14/04/25", "Soins et pansements"],
    ["Pansement pour fractures", "50", "01/10/25", "K.Accouchement"],
    ["Pistolet à injection", "30", "N/A", "K.Hémoragie"],
    ["Bandages de sport", "200", "22/03/25", "K.Membre"],
    ["Coton-tiges médicaux", "500", "N/A", "K.Brûlure"],
    ["Tensiomètre électronique", "40", "11/11/25", "Oxygène"],
    ["Masque respiratoire", "300", "28/02/25", "K.AES"],
    ["Coussins chauffants", "50", "03/09/25", "K.COVID"],
    ["Bande de compression médicale", "150", "21/06/25", "Soins et pansements"],
    ["Patchs chauffants", "200", "12/12/25", "K.Accouchement"],
    ["Solution désinfectante", "500", "25/05/25", "K.Hémoragie"],
    ["Désinfectant pour surfaces", "100", "N/A", "K.Membre"],
    ["Seringue sans aiguille", "300", "05/01/26", "K.Brûlure"],
    ["Bande d'immobilisation", "100", "30/07/25", "Oxygène"],
    ["Kit de réanimation", "10", "N/A", "K.AES"],
    ["Chiffons médicaux", "200", "10/09/25", "K.COVID"],
    ["Crème réparatrice", "100", "17/11/25", "Soins et pansements"],
    ["Gants pour examen médical", "300", "04/02/25", "K.Accouchement"],
    ["Soluté pour perfusion", "50", "N/A", "K.Hémoragie"],
    ["Pansement anti-UV", "60", "03/06/25", "K.Membre"],
    ["Pansements pour traumatismes", "150", "12/07/25", "K.Brûlure"]
];

const isExpiringOrExpired = (expirationDate: string): boolean => {
    const today = new Date();
    
    if (expirationDate === "N/A") {
        return false;
    }

    const [day, month, year] = expirationDate.split("/");
    const expiration = new Date(`20${year}-${month}-${day}`);

    const threeMonthsFromNow = new Date();
    threeMonthsFromNow.setMonth(today.getMonth() + 3);

    return expiration <= threeMonthsFromNow;
};

const PharmacieStock: React.FC = () => {
    const [selectedButton, setSelectedButton] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>("");

    const handleButtonClick = (buttonName: string) => {
        setSelectedButton(buttonName);
    };

    const filteredData = data.slice(0).filter((row) => {
        if (selectedButton && row[3] !== selectedButton) return false;
        return row[0].toLowerCase().includes(searchQuery.toLowerCase());
    });

    const expiringOrExpiredData = data.slice(1).filter((row) => isExpiringOrExpired(row[2]));

    return (
        <div>
            <div className="flex flex-col md:flex-row w-full">
{/* ---------------------------------------- BLOCK LEFT ---------------------------------------- */}
                <div className="w-full overflow-y-auto max-h-80vh scrollbar-hide flex flex-col md:ml-4 md:w-1/2 md:mt-4">
{/* ---------------------------------------- FIRST BLOCK ---------------------------------------- */}
                    <div className="w-full flex flex-col items-center md:mt-0">
                        <p className="items-center text-center text-2xl w-full FC-BM mr-4 p-4 font-carving-black">
                            Pharmacie sur site
                        </p>
                    </div>

{/* ---------------------------------------- THREE BLOCK ---------------------------------------- */}
                    <div className="w-full flex flex-col justify-center items-center mt-4">
                        <p className="bg-BM w-full rounded-t-lg h-12 content-center text-xl font-carving-black text-white text-center">
                            Date de péremption
                        </p>
                        <div className="bg-white grid grid-cols-[2fr_1fr_1fr] text-center w-full text-black p-4 font-carving-bold">
                            <p className="text-left text-gray-500 font-bold">Produits</p>
                            <p className="text-center text-gray-500 hidden font-bold">Quantité</p>
                            <p className="text-center text-gray-500 hidden font-bold">Date Péremption</p>
                        </div>
                        <div className="bg-white text-center justify-center grid w-full text-black rounded-b-lg shadow-lg p-4 max-h-52 overflow-y-auto">
                            {expiringOrExpiredData.map((row, rowIndex) => (
                                <div key={`${row[0]}-${row[2]}`} className="grid grid-cols-[2fr_1fr_1fr] w-full mb-2">
                                    <p className="text-left">{row[0]}</p>
                                    <p className="text-center hidden">{row[1]}</p>
                                    <p className="text-center hidden">{row[2]}</p>
                                </div>
                            ))}
                        </div>
                    </div>

{/* ---------------------------------------- FOUR BLOCK ---------------------------------------- */}
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
                    <Stock selectedButton={selectedButton} filteredData={filteredData} />
                </div>

{/* ---------------------------------------- RIGHT BLOCK ---------------------------------------- */}
                <div className="w-full flex flex-col mt-8 items-center md:mt-0 md:ml-4 md:w-1/2">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Rechercher..."
                        className="px-4 py-2 border mb-4 md:mt-8 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 font-carving-semi-bold"
                    />
                    
{/* ---------------------------------------- FIRST BLOCK ---------------------------------------- */}
                    <p className="bg-BM w-full rounded-t-lg h-12 content-center text-xl lg:mt-2 font-carving-black text-white text-center">
                        Date de péremption
                    </p>
                    <div className="bg-white w-full mb-4 text-black rounded-b-lg shadow-lg p-4 h-52 overflow-y-auto">
                        <p className="text-left FC-BM font-bold">Description :</p>

                    </div>

{/* ---------------------------------------- SECOND BLOCK ---------------------------------------- */}
                    <div className="w-full flex justify-between mt-4">
                        <button className="bg-green-500 text-white px-4 py-2 rounded-lg w-[48%]">
                            Ajouter
                        </button>
                        <button className="bg-red-500 text-white px-4 py-2 rounded-lg w-[48%]">
                            Retirer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PharmacieStock;