import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";



export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [flag, setFlag] = useState(true);

    useEffect(() => {
        getGifs(category).then(resp => 
            setImages(resp));
            setFlag(false)
        return
    }, [])
    return {
        images: images,
        flag: flag,
    }
}
