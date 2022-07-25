import React, { useState, useEffect } from 'react'
import Psyduck from '../assets/images/Psyduck.png'
import Snorlax from '../assets/images/Snorlax.png'
import Eevee from '../assets/images/Eevee.jpg'
import PokemonFragment from "./Fragments/PokemonFragment";

const Pokemon = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1> Pokedex!</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-4">
                        <PokemonFragment
                            textoDescripcion="Su nombre proviene de la combinación de palabras en inglés psychic (psíquico) y duck (pato)."
                            imagen={Psyduck}
                            titulo="Psyduck"
                            subtitulo="Tipo: Agua"
                        />
                    </div>
                    <div className="col-4">
                        <PokemonFragment
                            textoDescripcion="Su nombre proviene de las palabras en inglés snore (ronquido) y relax (relajación). También viene de lax (flojo en inglés)."
                            imagen={Snorlax}
                            titulo="Snorlax"
                            subtitulo="Tipo: Normal"
                        />
                    </div>
                    <div className="col-4">
                        <PokemonFragment
                            textoDescripcion="Su nombre original iba a ser Eon, pero al final se cambió. A pesar de esto, todas sus evoluciones sí terminan con dicho sufijo."
                            imagen={Eevee}
                            titulo="Eevee"
                            subtitulo="Tipo: Normal"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pokemon