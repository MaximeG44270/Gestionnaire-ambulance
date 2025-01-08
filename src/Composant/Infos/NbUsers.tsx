import React from "react";

const NbUsers: React.FC<{ userCount: number }> = ({ userCount }) => {
    return (
        <div className="bg-white items-center w-full text-black rounded-lg shadow-lg p-4 h-52">
            <h3 className="text-lg font-bold mb-2">Nombre d'utilisateurs</h3>
            <p className="text-2xl">{userCount}</p>
        </div>
    );
};

export default NbUsers;