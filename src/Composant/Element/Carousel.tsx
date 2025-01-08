// import React from "react";
// import "../../index.css";
// import "../../fonts.css";

// interface Contributor {
//     name: string;
//     contributions: number;
// }

// const contributors: Contributor[] = [
//     { name: "Alice", contributions: 50 },
//     { name: "Bob", contributions: 45 },
//     { name: "Charlie", contributions: 40 },
//     { name: "Diana", contributions: 35 },
//     { name: "Eve", contributions: 30 },
// ];

// const Carousel: React.FC = () => {
//     return (
//         <div className="w-full max-w-full h-52 rounded-lg md:ml-6">
//             {/* Le conteneur principal avec overflow-x-auto */}
//             <div className="flex h-full max-w-7 rounded-lg overflow-x gap-4 flex-nowrap scrollbar-hide">
//               {contributors.map((user, index) => (
//                 <div
//                   key={index}
//                   className="bg-white p-6 w-72 rounded-lg shadow-lg flex-shrink-0"
//                 >
//                   <h3 className="font-bold text-xl">{user.name}</h3>
//                   <p className="text-lg">Contributions: {user.contributions}</p>
//                 </div>
//               ))}
//             </div>
//         </div>
//     );
// };

// export default Carousel;

import React, { useState, useEffect } from "react";

interface Contributor {
    name: string;
    contributions: number;
}

const contributors: Contributor[] = [
    { name: "Alice", contributions: 50 },
    { name: "Bob", contributions: 45 },
    { name: "Charlie", contributions: 40 },
    { name: "Diana", contributions: 35 },
    { name: "Eve", contributions: 30 },
];

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Avance automatique du carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === contributors.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-52 bg-white shadow-lg rounded-lg flex items-center justify-center flex-col">
            <div className="text-center">
                <h2 className="text-2xl font-bold">{contributors[currentIndex].name}</h2>
                <p className="text-lg text-gray-600">
                    Contributions: {contributors[currentIndex].contributions}
                </p>
            </div>

            <div className="flex space-x-2 mt-4">
                {contributors.map((_, index) => (
                    <span
                        key={index}
                        className={`block w-3 h-3 rounded-full ${
                            index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                        }`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Carousel;

