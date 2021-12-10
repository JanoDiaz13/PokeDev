import React from 'react'
//import {pokemon from '../mocks/pokemonData'
import '../../styles/components/pokeTypes.css'
import pokeTypes from './visualData/pokeTypes';
import UsePokemon from "../context/usePokemon";  /* Entrada de datos pokemon*/ 



export const CallDataExample = () => {
    const pokemon = UsePokemon();       //Le pasamos la funcion
    return (
        <div>
            <p>Nombre pokemon:  {pokemon.name}</p>
            <p>Id Pokemon:  {pokemon.id}</p>
            <p>Descripcion</p>
            <p>Tipos:  {pokemon.types[0].type.name}</p>
            <p>Ataque:  {pokemon.stats[1].base_stat}</p>
            <p>Defensa:  {pokemon.stats[2].base_stat}</p>
            <p>Defensa esp:  {pokemon.stats[4].base_stat}</p>
            <p>Speed:  {pokemon.stats[5].base_stat}</p>
            <p>HP:  {pokemon.stats[0].base_stat}</p>
            <p>Total</p>
            <p>Location:  {pokemon.location_area_encounters}</p>

            <p>evolution xxxxxxxxx</p>   
            <i class={pokeTypes.fire}></i>
            <i class={pokeTypes.water}></i>
            <i class={pokeTypes.electric}></i>
            <i class={pokeTypes.earth}></i>
            <i class={pokeTypes.leaf}></i>
            <i class={pokeTypes.ghost}></i>
            <i class={pokeTypes.fly}></i>
            <i class={pokeTypes.bug}></i>
            <i class={pokeTypes.stone}></i>
            <i class={pokeTypes.fight}></i>
            <i class={pokeTypes.steel}></i>
            <i class={pokeTypes.dragon}></i>
            <i class={pokeTypes.poison}></i>
            <i class={pokeTypes.ice}></i>

        </div>
    )
}
