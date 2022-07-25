import React, {useEffect, useState} from "react"
import { Routes, Route, Link} from "react-router-dom"
import Pokemon from "./components/Pokemon"
import Recomendaciones from "./components/Recomendaciones"

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Pokemon />} />
            <Route path='/pokedex' element={<Pokemon />} />
            <Route path='/recomienda' element={<Recomendaciones />} />
        </Routes>
    )
}

export default App;