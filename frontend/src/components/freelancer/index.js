import React from "react";

const FreeLancerCard = ({ person }) => {
    return (
        <div className="bg-white shadow-lg rounded-2xl p-4 w-80 hover:shadow-xl transition-all duration-300">
            {/* Image */}
            <img src={person.image} alt="person" className="rounded-lg w-full h-40 object-cover" />

            {/* User Info */}
            <div className="flex justify-between items-center mt-4">
                <div className="flex items-center space-x-2">
                    <div className="bg-gray-200 p-2 rounded-full">{person.logo}</div>
                    <div className="font-semibold text-lg">{person.name}</div>
                </div>
                <span className="bg-blue-500 text-white px-2 py-1 text-sm rounded-full">{person.level}</span>
            </div>

            {/* Description */}
            <p className="text-gray-600 mt-2 text-sm">{person.description}</p>

            {/* Rating & Price */}
            <div className="flex justify-between items-center mt-4">
                <span className="text-yellow-500 font-semibold">{person.rating} ⭐</span>
                <span className="text-green-600 font-semibold">{person.price}</span>
            </div>

            {/* CTA Button */}
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                Hire Now
            </button>
        </div>
    );
};

export default FreeLancerCard;