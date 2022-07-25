import React, {useEffect, useState} from "react"
import RecomendacionFragment from "./Fragments/RecomendacionFragment"
import Mascarilla from "../assets/images/Mascarilla.png"

const Recomendaciones = () => {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Recomendaciones</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <RecomendacionFragment
                            titulo="Título 1"
                            tipoAlerta="alert-danger">
                            Contenido 1
                        </RecomendacionFragment>
                    </div>
                    <div className="col-6">
                        <RecomendacionFragment
                            titulo="Título 2"
                            tipoAlerta="alert-success">
                            Contenido 2
                            <br/>
                            <img src={Mascarilla} alt="Mascarilla" />
                        </RecomendacionFragment>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Recomendaciones