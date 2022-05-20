import React, { createContext, useState } from 'react';
import { toQuery } from '/src/helpers/formatData';
import { constants } from './constants';
import { applyFilters, totalOfPokemon, reduceData } from './fillterEffects';

export const contextApi = createContext();

export const ContextProvider = ({ children }) => {
  const setLocal = (key, value) => localStorage.setItem(key, JSON.stringify(value));
  const getLocal = (key) => JSON.parse(localStorage.getItem(key))
  const deleteLocal = (key) => localStorage.removeItem(key)

  const [firstFetch, setFirstFetch] = useState([]);
  const [pokemons, setPokemons] = useState([]);

  const [cardData, setCardData] = useState();
  const [spritesLength, setSpritesLength] = useState(0);
  const [notFound, setNotFound] = useState(false);

  const [inputSearch, setInputSearch] = useState('')

  const isMobile = window.innerWidth <= 720

  // options
  const [options, setOptions] = useState({
    op_color: getLocal("op_color") || false,
    op_shiny: getLocal("op_shiny") || false,
    op_rotate: getLocal("op_rotate") || false,
    op_gender: getLocal("op_gender") || false,
    op_units: getLocal("op_units") || false,
  })

  const handleOptions = (name, value) => {
    setLocal(name, value)
    setOptions({ ...options, [name]: value })
  }

  const [filters, setFilters] = useState({
    type: getLocal("type") || 'All Pokemons',
    page: getLocal("page") || 0,
  })

  const handleFilters = (name, value) => {
    setLocal(name, value)
    setFilters({ ...filters, [name]: value })

    setCardData(false)
    // if (name !== 'page') {
    //   setFilters({ ...filters, page: 0 })
    //   deleteLocal('page')
    // }

    const result = applyFilters(firstFetch, { ...filters, [name]: value })
    setPokemons(result)
  }

  const fetchPokemons = async () => {
    const URL_PAGE = "https://pokeapi.co/api/v2/"
    const limit = 30;

    setNotFound(false)
    setPokemons(false)
    setCardData(false)

    // first fetch
    const url = URL_PAGE + `pokemon/?limit=${limit}&offset=${0}`
    const res = await fetch(url);
    const rawData = await res.json();

    // getting basic info
    const basicData = await Promise.all(
      await rawData.results.map(async ({ url }) => {
        const data = await fetch(url)
        return data.json()
      }),
    );

    // getting full info
    const fullData = basicData.map(async (pokemon) => {
      const fetch_specie = await fetch(pokemon.species.url);
      const specieResult = await fetch_specie.json();

      const fetch_evolution_chain = await fetch(specieResult.evolution_chain.url)
      const evolution_chain = await fetch_evolution_chain.json()

      const fullData = { ...pokemon, species: specieResult, evolution_chain }

      return reduceData(fullData)
    })

    const pokemons = await Promise.all(fullData).then(data => data)

    const filteredpokemons = await applyFilters(pokemons, { ...filters })

    setPokemons(filteredpokemons);

    setFirstFetch(pokemons);
  };

  const closeCard = () => {
    setCardData(false)
    deleteLocal("cardData")
  }

  const handleCardData = (pokemon) => {
    setCardData(pokemon)
    setLocal("cardData", pokemon)
  }

  const searchPokemons = () => {
    const query = toQuery(inputSearch)

    if (!query) return handleFilters("page", 0)

    const pokemonsFiltered = firstFetch.filter(pokemon => (pokemon.name || pokemon.id).includes(query))
    setPokemons(pokemonsFiltered)
  }

  const handleKeyDown = (e) => e.key === 'Enter' && searchPokemons()

  const INITITAL_STATE = {
    pokemons,
    firstFetch,

    filters,
    options,

    cardData,
    spritesLength,
    notFound,
    totalOfPokemon,
    inputSearch,
    isMobile
  }

  function effects() {
    return {
      setLocal,
      fetchPokemons,

      setFilters,

      setPokemons,

      setCardData,
      setSpritesLength,
      setNotFound,

      handleCardData,
      closeCard,
      handleKeyDown,
      handleFilters,
      handleOptions,

      searchPokemons,
      handleKeyDown,
      setInputSearch
    }
  }

  const state = {
    ...INITITAL_STATE,
    ...constants(),
    effects: {
      ...effects(),
    },
  }

  return <contextApi.Provider value={state}>{children}</contextApi.Provider>;
};