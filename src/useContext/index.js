import React, { createContext, useState } from 'react';
import { constants } from './constants';

export const contextApi = createContext();

export const ContextProvider = ({ children }) => {
  const setLocal = (key, value) => localStorage.setItem(key, JSON.stringify(value));
  const getLocal = (key) => JSON.parse(localStorage.getItem(key))
  const deleteLocal = (key) => localStorage.removeItem(key)

  const [pokemons, setPokemons] = useState([]);
  const [modalData, setModalData] = useState(getLocal("cardData"))
  const [showShiny, setShowShiny] = useState(false)
  const [showGenders, setShowGenders] = useState(false)
  const [showFront, setShowFront] = useState(true)
  const [toogleUnits, setToogleUnits] = useState(true)
  const [pageNumbers, setPageNumbers] = useState(getLocal("page") || 0);
  const [totalOfPokemons, setTotalOfPokemons] = useState(0);
  const [notFound, setNotFound] = useState(false);
  const [activeType, setActiveType] = useState(getLocal("activeType") || 'All Pokemons');
  const [speciesInfo, setSpeciesInfo] = useState({})
  const [subStitle, setSubStitle] = useState("")
  const [evolutionChain, setEvolutionChain] = useState({})
  const [typeSearch, setTypeSearch] = useState('pokemon')
  const [inputSearch, setInputSearch] = useState('')
  const [pokemonType, setPokemonType] = useState('')
  const [showColors, setShowColors] = useState(false)

  const URL_PAGE = "https://pokeapi.co/api/v2/"

  const getPokemons = async () => {
    const limit = 10;
    const typeSaved = getLocal("activeType")
    const all = "All Pokemons"

    setNotFound(false)
    setPokemons(false)
    setModalData(false)

    const getArray = async () => {
      const url = activeType === all
        ? URL_PAGE + `${typeSearch}/?limit=${limit}&offset=${pageNumbers}`
        : URL_PAGE + `type/${activeType}`

      const res = await fetch(url);
      const rawData = await res.json();

      // fetch all the pokemons
      if (activeType === all) {
        // set actual page to 0 only on the second render of the filter
        if (typeSaved !== all && activeType === all) setPageNumbers(0)

        setTotalOfPokemons(rawData.count - limit);

        return rawData.results
      }

      // fetch all pokemons by type
      const pokemonToFetch = rawData.pokemon

      const pokemons = pokemonToFetch.slice(pageNumbers, pageNumbers + limit)

      if (typeSaved !== activeType) setPageNumbers(0)

      setTotalOfPokemons(pokemonToFetch.length - limit)
      return pokemons.map(({ pokemon }) => pokemon)
    }

    const rawPokemons = await getArray()

    const pokemonFullData = await Promise.all(
      await rawPokemons.map(async ({ url }) => {
        const resp = await fetch(url)
        return await resp.json()
      }),
    );

    setLocal("activeType", activeType)
    setLocal("pokemons", pokemonFullData)
    setLocal("page", pageNumbers)

    setPokemons(pokemonFullData);
  };

  const getAPokemon = async () => {
    setNotFound(false)
    setPokemons(false)
    setModalData(false)

    const query = inputSearch.toLowerCase().trim()

    // show pokemons saved if the input is empty
    if (!query) return setPokemons(getLocal("pokemons"))

    try {
      const response = await fetch(URL_PAGE + `${typeSearch}/${query.split(" ").join("-")}`)
      const data = await response.json()

      data.id ? setPokemons([data]) : setNotFound(true)
    } catch (err) {
      console.log("Error: ", err)
      setNotFound(true)
    }
  }

  const getEvolutions = async (species) => {
    const specieInfo = async () => {
      const response = await fetch(species.url)
      return await response.json()
    }

    const specie = await specieInfo()
    setSpeciesInfo(specie)

    const selectEnglish = specie.genera.filter(item => item.language.name === "en")
    setSubStitle(selectEnglish[0].genus)

    const chainInfo = async () => {
      const response = await fetch(specie.evolution_chain.url)
      return await response.json()
    }

    const chain = await chainInfo()

    setEvolutionChain(chain)
  }

  const closeModal = () => {
    setModalData(false)
    deleteLocal("cardData")
  }

  const handleKeyDown = (e) => e.key === 'Enter' && getAPokemon()

  const handleChangeType = (type) => setActiveType(type)

  const formatHeight = (height) => {
    if (toogleUnits) {
      const heightInM = height / 10

      return height >= 10 ? heightInM + " m" : height + "0 cm"
    }

    const mToFt = 0.32
    const cmToIn = 0.254
    const heightInFt = height * mToFt
    const heightInIn = height / cmToIn

    return height >= 10 ? heightInFt.toFixed(1).replace(".", '"') + " ft" : heightInIn.toFixed(1) + " in"
  }

  const formatWeight = (weight) => {
    if (toogleUnits) {
      const ton = 1000
      const weightInKgs = weight / 10
      const weightInTons = weightInKgs / ton

      return weightInKgs < ton ? weightInKgs + " kg" : weightInTons + " ton"
    }

    const weightInLb = weight / 22.05

    return weightInLb.toFixed(1) + " lb"
  }

  const handleCardData = (pokemon) => {
    setModalData(pokemon)
    setPokemonType(pokemon.types[0].type.name)
    setLocal("cardData", pokemon)
  }

  const INITITAL_STATE = {
    pokemons,
    modalData,
    showShiny,
    showGenders,
    showFront,
    toogleUnits,
    pageNumbers,
    totalOfPokemons,
    notFound,
    activeType,
    evolutionChain,
    speciesInfo,
    subStitle,
    pokemonType,
    showColors
  }

  function effects() {
    return {
      setLocal,
      getLocal,
      getPokemons,
      setPokemons,
      setModalData,
      setShowShiny,
      setShowGenders,
      setShowFront,
      setToogleUnits,
      setPageNumbers,
      setTotalOfPokemons,
      setNotFound,
      setActiveType,
      setEvolutionChain,
      closeModal,
      getEvolutions,
      setSpeciesInfo,
      getAPokemon,
      setInputSearch,
      handleKeyDown,
      handleChangeType,
      formatHeight,
      formatWeight,
      handleCardData,
      setSubStitle,
      setPokemonType,
      setShowColors
    }
  }

  const state = {
    ...INITITAL_STATE,
    ...constants(),
    effects: { ...effects() },
  }

  return <contextApi.Provider value={state}>{children}</contextApi.Provider>;
};