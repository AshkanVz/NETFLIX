import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movie from "./Movie";
const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);
  const [show, setShow] = useState(true)
  useEffect(() => {
      axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  
  const showhandler = () =>{
    setShow(!show)
  }
  return (
    <div className="bg-slate-800/60 mb-3 shadow-md shadow-slate-700 rounded-xl mx-3 cursor-pointer ">
    <div className="  " onClick={showhandler}>
    <h2 className="text-white font-bold md:text-xl p-4 hover:text-2xl hover:text-slate-600 transition-all duration-150 ">{title}</h2>
    </div>
      
      <div className={`relative ${show  ? "flex" : "hidden"} items-center group`}>
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-none relative">
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>

        <MdChevronRight
          onClick={slideRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </div>
  );
};

export default Row;
