import React from "react";
import NbUsers from "../Composant/Infos/NbUsers";
import Carousel from "./Element/Carousel";
import "../index.css";
import "../fonts.css";

const Accueil: React.FC = () => {
    const userCount = 120;

    return (
        <div>
{/* ----------------------------------------------- CONTAINER 1 ----------------------------------------------- */}
        <div className="flex flex-col md:flex-row w-full">
{/* ----------------------------------------------- BLOCK 1 ----------------------------------------------- */}
            <div className="w-full flex justify-center md:w-1/3">
                <NbUsers userCount={userCount} />
            </div>

{/* ----------------------------------------------- BLOCK 2 ----------------------------------------------- */}
            <div className="w-full flex justify-center items-center mt-4 md:mt-0 md:ml-4 md:w-1/3">
                <p className="bg-white items-center w-full text-black rounded-lg shadow-lg p-4 h-52">Ici je sais pas quoi mettre</p>
            </div>

{/* ----------------------------------------------- BLOCK 3 ----------------------------------------------- */}
            <div className="w-full mt-4 md:mt-0 md:ml-4 md:w-1/3">
                <Carousel />
            </div>            
        </div>
{/* ----------------------------------------------- CONTAINER 2 ----------------------------------------------- */}
        <div className="flex flex-col md:flex-row w-full">
            <div className="w-full mt-4 flex justify-center">
                <div className="bg-white shadow-lg rounded-lg h-80 w-full">
                    DATE DE PEREMPTION
                </div>
            </div>
        </div>
{/* ----------------------------------------------- CONTAINER 3 ----------------------------------------------- */}
        <div className="flex flex-col mt-4 md:flex-row w-full">
{/* ----------------------------------------------- BLOCK 1 ----------------------------------------------- */}
            <div className="bg-white shadow-lg rounded-lg w-full flex justify-center h-48 mt-4 md:w-1/4">
                Date de la première ambulance à faire
            </div>
{/* ----------------------------------------------- BLOCK 2 ----------------------------------------------- */}
            <div className="bg-white shadow-lg rounded-lg w-full flex justify-center h-48 mt-4 md:ml-4 md:w-1/4">
                Date de la seconde ambulance à faire
            </div>
{/* ----------------------------------------------- BLOCK 3 ----------------------------------------------- */}
            <div className="bg-white shadow-lg rounded-lg w-full flex justify-center h-48 mt-4 md:ml-4 md:w-1/4">
                Date de la troisième ambulance à faire
            </div>
{/* ----------------------------------------------- BLOCK 4 ----------------------------------------------- */}
            <div className="bg-white shadow-lg rounded-lg w-full flex justify-center h-48 mt-4 md:ml-4 md:w-1/4">
                Date de la quatrième ambulance à faire
            </div>
        </div>

        </div>
    );
};

export default Accueil;
