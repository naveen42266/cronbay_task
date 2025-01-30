import React from "react";
import { Link } from "react-router-dom";
import JobCard from "../jobCard";
import { JobData } from "../../data";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';




const BidderComponent = () => {
  return (
    <div>
      <div className="flex justify-start items-center gap-2">
        <Link to={'/'}><ArrowBackIosIcon /></Link>
        <div className="font-bold text-4xl">Client's</div>
      </div>
      <div className="grid grid-cols-3">
        {JobData?.map((ele, index) => {
          return (
            <div key={index} className="col-span-1 py-4">
              <JobCard job={ele} />
            </div>
          )
        })}

      </div>
    </div>
  );
};

export default BidderComponent;
