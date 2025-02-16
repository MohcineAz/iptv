import React from "react";
import Button from "./Button";

const images = [
  "/src/assets/images/movie 1.png",
  "/src/assets/images/movie 2.png",
  "/src/assets/images/movie 3.png",
  "/src/assets/images/movie 4.png",
  "/src/assets/images/movie 5.png",
  "/src/assets/images/movie 6.png",
  "/src/assets/images/movie 7.png",
  "/src/assets/images/movie 8.png",
];

function Movie() {
  return (
    <section className="bg-[#00050E] py-12 px-8">
      <div className="flex flex-col items-center">
        <div className="title text-white text-center text-2xl">
          All in one package <br />
          In demand Movies, Shows, News & Sports
        </div>
        <div className="movies grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8 place-items-center">
          {images.map((src, index) => (
            <img
              className="w-full object-cover max-w-[280px]"
              key={index}
              src={src}
              alt={`Movie ${index + 1}`}
            />
          ))}
        </div>
        <Button className="bg-white mt-8 hover:bg-[#30FFF3]" text="See more" />
      </div>
    </section>
  );
}

export default Movie;
