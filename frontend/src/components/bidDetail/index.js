import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

const BidDetailComponent = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div>
                <div className="flex justify-start items-center gap-2">
                    <ArrowBackIosIcon onClick={() => { navigate(-1); }} />
                    <div className="font-bold text-4xl">Cron Bay</div>
                </div>
                <div className="text-2xl">Description</div>
                <div className="text-2xl">$100</div>
                <div className="text-lg">Deadline: 5 days</div>
                <div className="text-lg">Category: Web Development</div>
                <div className="py-4">
                    <Link to={'/bid'} >
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                            Bid Now
                        </button>
                    </Link>
                </div>
                <img src="https://i.ebayimg.com/00/s/NDk2WDE0NDA=/z/hcQAAOSwg2dj6n~7/$_57.JPG" alt="placeholder" className="rounded-lg" />
            </div>
            <div>
                <div className="font-bold text-xl py-2">About Cron Bay</div>
                <div className="text-lg">
                    <div className="font-medium">
                        Why Choose Us?
                    </div>
                    <div className="font-medium">
                        Expertise in Modern Technologies:
                    </div>
                    <div className="italic">
                        With over 5+ years of experience, we excel in HTML, CSS, Bootstrap, Tailwind CSS, Next JS, React JS, JavaScript, GitHub, Firebase, Strapi CMS, Node.js, and MongoDB.
                    </div>
                    <div className="font-medium">
                        Client Satisfaction:
                    </div>
                    <div className="italic">
                        Your satisfaction is our top priority. We ensure your project meets your expectations with revisions until you're happy.
                    </div>
                    <div className="font-medium">Responsive Design:</div>
                    <div className="italic">
                        We guarantee responsiveness up to 320 pixels.
                    </div>
                    <div className="font-medium">SEO-Friendly Code:</div>
                    <div className="italic">
                        Our code is optimized for search engines.
                    </div>
                    <div className="font-medium">Live Preview:</div>
                    <div className="italic">
                        Before we submit the final project, you'll receive a live preview to see the progress and provide feedback.
                    </div>
                </div>
            </div>
            <div>
                <div className="font-bold text-xl py-2">Bidder Section</div>
                <div className="text-lg">
                    The bidder section will contain the following:
                </div>
                <div className="text-lg">
                    The Highest Bid Amount is
                    <span className="italic"> $100 </span>
                    and the Highest Bidder is
                    <span className="italic"> John Doe </span>
                </div>
                <div className="text-lg">
                    The Lowest Bid Amount is
                    <span className="italic"> $50 </span>
                    and the Lowest Bidder is
                    <span className="italic"> Jane Doe </span>
                </div>
                <div className="text-lg">
                    The Average Bid Amount is
                    <span className="italic"> $75 </span>
                </div>
                <Link to={'/bid'} className="text-blue-500 underline italic">See more</Link>
            </div>
        </div>
    )
};

export default BidDetailComponent;