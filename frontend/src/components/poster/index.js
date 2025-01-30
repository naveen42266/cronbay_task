import React from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from "react-router-dom";

const PosterComponent = () => {
  return (
    <div>
      <div>
        <div className="flex justify-start items-center gap-2">
          <Link to={'/'}><ArrowBackIosIcon /></Link>
          <div className="font-bold text-4xl">Poster</div>
        </div>
        <div className="font-medium text-2xl text-center py-4">Fill the form</div>
        <div className="grid grid-cols-4 gap-4">

          <div className="col-span-1 flex gap-4">
            <label className="text-lg">Title</label>
            <input type="text" className="border-2 rounded-lg" />
          </div>

          <div className="col-span-1 flex gap-4">
            <label className="text-lg">Domain</label>
            <input type="text" className="border-2 rounded-lg" />
          </div>

          <div className="col-span-1 flex gap-4">
            <label className="text-lg">Prefered Stacks</label>
            <input type="text" className="border-2 rounded-lg" />
          </div>

          <div className="col-span-1 flex gap-4">
            <label className="text-lg">Deadline</label>
            <input type="date" className="border-2 rounded-lg" />
          </div>

          <div className="col-span-4 flex gap-4">
            <label className="text-lg">Description</label>
            <textarea className="border-2 rounded-lg w-full" />
          </div>

          <div className="col-span-1 flex gap-4">
            <label className="text-lg">Budget</label>
            <input type="number" className="border-2 rounded-lg" />
          </div>

          <div className="col-span-1 flex gap-4">
            <label className="text-lg">Category</label>
            <select className="border-2 rounded-lg">
              <option value="web">Web Development</option>
              <option value="app">App Development</option>
              <option value="ml">Machine Learning</option>
              <option value="ai">Artificial Intelligence</option>
            </select>
          </div>

          <div className="col-span-4 flex gap-4">
            <label className="text-lg">File</label>
            <input type="file" className="border-2 rounded-lg" />
          </div>

          <div className="col-span-4 flex gap-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
              Submit
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default PosterComponent;