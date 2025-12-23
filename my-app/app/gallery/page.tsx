'use client'
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  { src: "/gallery/image.png" },
  { src: "/gallery/image copy.png" },
  { src: "/gallery/image copy 2.png" },
  { src: "/gallery/image copy 3.png" },
  { src: "/gallery/image copy 4.png" },
  { src: "/gallery/image copy 5.png" },
  { src: "/gallery/image copy 6.png" },
  { src: "/gallery/image copy 7.png" },
  { src: "/gallery/image copy 8.png" },
  { src: "/gallery/image copy 9.png" },
  { src: "/gallery/image copy 10.png" },
  { src: "/gallery/image copy 11.png" },
  { src: "/gallery/image copy 12.png" },
  { src: "/gallery/image copy 13.png" },
  { src: "/gallery/image copy 14.png" },
  { src: "/gallery/image copy 15.png" },
  { src: "/gallery/image copy 16.png" },
  { src: "/gallery/image copy 17.png" },
  { src: "/gallery/image copy 18.png" },
  { src: "/gallery/image copy 19.png" },
  { src: "/gallery/image copy 20.png" },
  { src: "/gallery/image copy 21.png" },
  { src: "/gallery/image copy 22.png" },
  { src: "/gallery/image copy 23.png" },
  { src: "/gallery/image copy 24.png" },
  { src: "/gallery/image copy 25.png" },
  { src: "/gallery/image copy 26.png" },
  { src: "/gallery/image copy 27.png" },
  { src: "/gallery/image copy 28.png" },
  
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <div className="max-w-7xl mx-auto py-16 px-6 ">
      <h2 className="text-4xl font-bold text-center mb-8">Gallery</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            className="cursor-pointer rounded-lg object-cover w-full h-48 hover:scale-105 transform transition-transform"
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      {index >= 0 && (
        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={images}
          index={index}
        />
      )}
    </div>
  );
}
