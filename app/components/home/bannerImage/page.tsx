import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface BannerProps {
  imageSrc: StaticImageData; // Adjust according to your image type
  altText: string;
}

const BannerImg = ({ imageSrc, altText }:any) => {
  return (
    <div className="bg-white relative w-full h-64 lg:h-44 overflow-hidden rounded-lg group p-2">
      <Image
        src={imageSrc}
        alt={altText}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 group-hover:scale-110"
      />
    </div>
  );
}

export default BannerImg;
