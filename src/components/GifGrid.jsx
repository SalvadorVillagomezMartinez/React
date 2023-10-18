import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from './GifItem';



export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category).then(resp => setImages(resp));
        return
    }, [])



    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {images.map((image) => (
                    <GifItem  key={image.id} gif={image}></GifItem>
                ))
                }
            </div>
        </>
    );
}