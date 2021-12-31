import Image from "next/image";

function imageLoader({ src, width, height }) {
  	return `${process.env.NEXT_PUBLIC_CDN}/${src}?tr=w-${width},h-${height},q-75`;
}

export default function ImageProvider({ imgName, width, height, alt }) {
	return <Image loader={imageLoader} src={imgName} alt={alt} width={width} height={height} />;
};