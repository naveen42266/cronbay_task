import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
    return (
        <div className="bg-white shadow-lg rounded-2xl p-5 w-96 hover:shadow-xl transition-all duration-300">
            {/* Job Title */}
            <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>

            {/* Client Info */}
            <div className="flex justify-between items-center mt-2">
                <div className="flex items-center space-x-2">
                    <div className="bg-gray-200 p-2 rounded-full">{job.clientLogo}</div>
                    <div className="font-medium text-gray-700">{job.clientName}</div>
                </div>
                <span className="bg-blue-500 text-white px-3 py-1 text-sm rounded-full">{job.experienceLevel}</span>
            </div>

            {/* Description */}
            <p className="text-gray-600 mt-3 text-sm">{job.description}</p>

            {/* Skills */}
            <div className="mt-3">
                <h4 className="text-gray-700 font-semibold">Required Skills:</h4>
                <div className="flex flex-wrap gap-2 mt-1">
                    {job.skills.map((skill, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Budget & Deadline */}
            <div className="flex justify-between items-center mt-4">
                <span className="text-green-600 font-semibold">{job.budget}</span>
                <span className="text-red-500 text-sm">{job.deadline}</span>
            </div>

            {/* CTA Button */}
            <Link to={'/bidDetail'}>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                    Bit Now
                </button>
            </Link>
        </div>
    );
};

export default JobCard;
