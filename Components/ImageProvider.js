import Image from "next/image";

function imageLoader({ src, width }) {
      return `${process.env.NEXT_PUBLIC_CDN}${src}?tr=w-${width},q-75`;
}

export default function ImageProvider({ imgPath, width, height, alt }) {
    return <Image loader={imageLoader} src={imgPath} alt={alt} width={width} height={height} decoding={"async"} />;
};