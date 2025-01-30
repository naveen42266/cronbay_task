import React, { useEffect, useState } from "react";
import { addBidding, getAllBidding } from "../../sevices";
import { toast, ToastContainer } from "react-toastify"; // Import Toastify components
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';


const BidNowComponent = () => {
    const [biddingData, setBiddingData] = useState([]);
    const [bidName, setBidName] = useState('');
    const [bidAmount, setBidAmount] = useState('');
    const [deadline, setDeadLine] = useState('');
    const navigate = useNavigate();


    useEffect(() => {
        fetchBidding();
    }, []);

    const fetchBidding = async () => {
        try {
            const response = await getAllBidding();
            setBiddingData(response || []); // Ensure biddingData is always an array
            toast.success("Bid fetched successfully!"); // Display failure toast
        } catch (error) {
            toast.error("Error fetching bidding data!"); // Display failure toast
            console.error("Error fetching bidding data:", error);
            setBiddingData([]); // Fallback to empty array
        }
    };

    const handleAddBid = async () => {
        if (!bidName || !bidAmount || !deadline) {
            alert("All fields are required!");
            return;
        }

        const newBid = {
            name: bidName,
            bidPrice: Number(bidAmount),
            deadline: Number(deadline)
        };

        try {
            await addBidding(newBid);
            fetchBidding(); // Refresh data after adding a new bid
            setBidName('');
            setBidAmount('');
            setDeadLine('');
            toast.success("Bid added successfully!"); // Display success toast
        } catch (error) {
            toast.error("Failed to add bid! Please try again."); // Display error toast on failure
        }
    };

    // Ensure biddingData is not empty before calculations
    const lowestBidPrice = biddingData.length > 0 ? Math.min(...biddingData.map(item => item.bidPrice)) : null;
    const highestBidPrice = biddingData.length > 0 ? Math.max(...biddingData.map(item => item.bidPrice)) : null;
    const averageBidPrice = biddingData.length > 0 ? (biddingData.reduce((acc, item) => acc + item.bidPrice, 0) / biddingData.length).toFixed(2) : null;

    const lowestBidders = biddingData.filter(item => item.bidPrice === lowestBidPrice);
    const highestBidders = biddingData.filter(item => item.bidPrice === highestBidPrice);

    return (
        <div>
            <ToastContainer />
            <div className="flex justify-start items-center gap-2">
                <ArrowBackIosIcon onClick={()=>{navigate(-1);}} />
                <div className="font-bold text-4xl">
                    Current Bidding: <span className="italic">{lowestBidPrice ? `$${lowestBidPrice}` : "N/A"}</span>
                </div>
            </div>

            {/* Form */}
            <div>
                <div className="font-medium text-2xl text-center py-4">Fill the form</div>
                <div className="grid grid-cols-6 gap-4">
                    <div className="flex flex-col gap-4 col-span-2">
                        <label className="text-lg">Name</label>
                        <input type="text" value={bidName} className="border-2 rounded-lg p-2"
                            onChange={(e) => setBidName(e.target.value)} />
                    </div>

                    <div className="flex flex-col gap-4 col-span-2">
                        <label className="text-lg">Your Bid</label>
                        <input type="number" value={bidAmount} className="border-2 rounded-lg p-2"
                            onChange={(e) => setBidAmount(e.target.value)} />
                    </div>

                    <div className="flex flex-col gap-4 col-span-2">
                        <label className="text-lg">Deadline (days)</label>
                        <input type="number" value={deadline} className="border-2 rounded-lg p-2"
                            onChange={(e) => setDeadLine(e.target.value)} />
                    </div>
                </div>

                <div className="flex gap-4 py-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                        onClick={handleAddBid}>
                        Submit
                    </button>
                </div>
            </div>

            {/* Bidder Section */}
            <div>
                <div className="font-bold text-xl py-2">Bidder Section</div>
                <div className="text-lg">The Highest Bid Amount is
                    <span className="italic"> {highestBidPrice ? `$${highestBidPrice}` : "N/A"} </span>
                    and the Highest Bidder is
                    <span className="italic"> {highestBidders.length > 0 ? highestBidders.map(b => b.name).join(', ') : "N/A"} </span>
                </div>
                <div className="text-lg">The Lowest Bid Amount is
                    <span className="italic"> {lowestBidPrice ? `$${lowestBidPrice}` : "N/A"} </span>
                    and the Lowest Bidder is
                    <span className="italic"> {lowestBidders.length > 0 ? lowestBidders.map(b => b.name).join(', ') : "N/A"} </span>
                </div>
                <div className="text-lg">The Average Bid Amount is
                    <span className="italic"> {averageBidPrice ? `$${averageBidPrice}` : "N/A"} </span>
                </div>
            </div>

            {/* Bidders Table */}
            <div>
                <div className="font-bold text-xl py-2">Bidders</div>
                <table className="table-auto border-collapse border border-gray-400 w-full">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2 border">Name</th>
                            <th className="px-4 py-2 border">Bid Amount</th>
                            <th className="px-4 py-2 border">Deadline</th>
                        </tr>
                    </thead>
                    <tbody>
                        {biddingData.length > 0 ? (
                            biddingData.map((item, index) => (
                                <tr key={index} className="capitalize">
                                    <td className="border px-4 py-2">{item.name}</td>
                                    <td className="border px-4 py-2">{item.bidPrice}</td>
                                    <td className="border px-4 py-2">{item.deadline}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="text-center py-4">No bidders yet</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BidNowComponent;
