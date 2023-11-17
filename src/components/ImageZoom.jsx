"use client";

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgZoom from "lightgallery/plugins/zoom";
import Image from "next/image";

import style from "src/components/gallery-style.css";

const ImageZoom = ({ src }) => {
  return (
    <>
      <LightGallery
        speed={500}
        counter={false}
        download={false}
        plugins={[lgZoom]}
      >
        <a href={src}>
          <Image
            priority
            src={src}
            alt="image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            className=" hover:scale-105 transition-all duration-300 ease-linear"
          ></Image>
        </a>
      </LightGallery>
    </>
  );
};

export default ImageZoom;
