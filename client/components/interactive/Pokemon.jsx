import React, { Component, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { async } from 'regenerator-runtime';
import { useState } from 'react';
import * as actions from '../../actions/actions.js'
//import * as actions from '../actions/actionTypes.js';
//import store from '../store.js';
const mapStateToProps = state => (
  {
      pokemon: state.relax.favPokemon,
      
  }
); 

const Pokemon = props => {
  const dispatch = useDispatch()
    //maybe render issue here
  const [pokemon, setPokemon] = useState([])
  const [pokemonHeight, hPokemon] = useState([])
  const [pokemonpic, picPokemon] = useState([])
  const [pokemonWeight, wPokemon] = useState([])
   const fetchPokemon = async (x) => {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${x}`)
    return res
   }
    useEffect( async () => {
      console.log(props.pokemon)
      const response = await fetchPokemon(props.pokemon)
      const data = await response.json();
      console.log(data)
      setPokemon(data.name)
      
      
      
    });
    useEffect( async () => {
      console.log(props.pokemon)
      const response = await fetchPokemon(props.pokemon)
      const data = await response.json();
      console.log(data)
      
      hPokemon(data.height)
     
    });
    useEffect( async () => {
      console.log(props.pokemon)
      const response = await fetchPokemon(props.pokemon)
      const data = await response.json();
      console.log(data)
      
      
      if(data.weight > 1000){
      wPokemon(`${data.weight}? OH BOI HE CHUNKY`)}
      else{ wPokemon(data.weight)}
    });
    useEffect( async () => {
      console.log(props.pokemon)
      const response = await fetchPokemon(props.pokemon)
      const data = await response.json();
      console.log(data.sprites.front_default)
      picPokemon(data.sprites.front_default)
    });
    const changePoke = () => {
       let val = document.getElementById('pokemonFave').value
        dispatch(actions.pokeActionCreator(val))}
    
    
    return(
      <div id="pokeContainer">
        <div id="pokeinfo">
        <p>Name: {pokemon}</p>
        <p>Height: {pokemonHeight}</p>
        <p>Weight: {pokemonWeight}</p>
        
        <a href={'https://www.youtube.com/results?search_query=cute+' +props.pokemon +'+videos'} ><p>Click for cute {props.name} videos!</p></a>
      </div>
      <div><input id="pokemonFave" placeholder="favorite pokemon" type="text"></input><button onClick={changePoke}>set favorite</button></div>
      <img src={pokemonpic}></img>
      </div>)
  };
  
  
  export default connect(mapStateToProps)(Pokemon)
  