import React from "react";

const FirstUserContrib: React.FC<{ user: { name: string; contributions: number } }> = ({ user }) => {
    return (
        <div className="bg-green-500 text-white rounded-lg shadow-md p-4 h-52 w-64">
            <h3 className="text-lg font-bold mb-2">Meilleur Contributeur</h3>
            <p className="text-xl">{user.name}</p>
            <p>{user.contributions} contributions</p>
        </div>
    );
};

export default FirstUserContrib;