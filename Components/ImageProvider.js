export default function ImageProvider({ imgPath = "", alt = "Image", loading="lazy" }) {
    const imgUrl = process.env.NEXT_PUBLIC_CDN + imgPath;
    if(imgPath.includes("16x9")) {
        return <picture>
            <source media="(min-width: 1200px)" srcSet={`${imgUrl}?tr=w-1120,ar-16-9,q-75`} />
            <source media="(min-width: 700px)" srcSet={`${imgUrl}?tr=w-660,ar-16-9,q-75`} />
            <img src={`${imgUrl}?tr=w-640,ar-16-9,q-75`} loading={loading} decoding="async" alt={alt} />
        </picture>
    }

    if(imgPath.includes("4x3")) {
        return <picture>
            <source media="(min-width: 1200px)" srcSet={`${imgUrl}?tr=w-1120,ar-4-3,q-75`} />
            <source media="(min-width: 700px)" srcSet={`${imgUrl}?tr=w-660,ar-4-3,q-75`} />
            <img src={`${imgUrl}?tr=w-640,ar-4-3,q-75`} loading={loading} decoding="async" alt={alt} />
        </picture>
    }

    return <picture>
        <source media="(min-width: 700px)" srcSet={`${imgUrl}?tr=w-600,ar-1-1,q-75`} />
        <img src={`${imgUrl}?tr=w-400,ar-1-1,q-75`} loading={loading} decoding="async" alt={alt} />
    </picture>
}