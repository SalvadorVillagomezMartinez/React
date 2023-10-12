import { useState } from "react";

const gifs = [1,2,3,4,5]

export const GifGrid = ({ category }) => {
    return (
        <>
            <h3>{ category}</h3>
            {
                gifs.map( gif =>(
                    <p>{gif}</p>
                ))
            }
        </>
    );
}