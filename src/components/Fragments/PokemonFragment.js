import React, {useEffect, useState} from "react"
import Psyduck from "../../assets/images/Psyduck.png"

const PokemonFragment = ({ imagen, titulo, textoDescripcion, subtitulo}) => {

    return (
        <>
<div className="card" style={{ width: "18rem"}}>
<img src={imagen} className="card-img-top" alt="..."/>
<div className="card-body">
<h5 className="card-title">{titulo}</h5>
    <p className="card-text">{textoDescripcion}</p>
    <h6 className="card-subtitle">{subtitulo}</h6>
</div>
</div>
        </>
    )

}

export default PokemonFragment;
