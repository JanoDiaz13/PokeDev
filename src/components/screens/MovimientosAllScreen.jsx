import React, { useEffect, useState } from 'react';
//components
import MostrarMovimientos from '../presentational/MovimientosAllScreen/MostrarMovimientos'
export const MovimientosAllScreen = () => {

    const [movesAll, setmovesAll] = useState([]);
    const cantMovesFetch = 300;


    useEffect(() => {
        const obtenerMovimientos = async (id) => {
            const data = await fetch("https://pokeapi.co/api/v2/move/?offset=0&limit=" + cantMovesFetch);
            const dataJSON = await data.json();
            setmovesAll(dataJSON.results);
        }
        obtenerMovimientos();
    }, []);

    return (
        <div className="MovimientosAllScreen">
        <MostrarMovimientos movesAll={movesAll}/>
        </div>
    )
}
