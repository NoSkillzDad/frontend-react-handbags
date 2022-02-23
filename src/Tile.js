import React from "react";

const Tile = ({title, text, image, altText}) => {

    if (image) {
        return <img src={image} alt={altText}/>
    }

    return (
        <>
            <h2>{title}</h2>
            {text.map(function (t) {
                return <p>{t}</p>
            })}
        </>
    )
}
export default Tile;