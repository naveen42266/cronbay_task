import React from "react";
import BidDetailComponent from "../../components/bidDetail";


const BidderDetail = () => {
    return (
        <div className="w-full bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 min-h-screen max-h-full w-full">
                <BidDetailComponent />
            </div>
        </div>
    )
}

export default BidderDetail;