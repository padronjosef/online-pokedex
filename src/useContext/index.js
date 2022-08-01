import React, { createContext, useState, useEffect } from 'react'
import { toQuery, ENV_LOCALHOST } from '/src/helpers'
import { constants } from './constants'
import { applyFilters, totalOfPokemon } from './fillterEffects'
import { getChunks } from './fetchEffects'

export const contextApi = createContext()

export const ContextProvider = ({ children }) => {
  const setLocal = (key, value) => localStorage.setItem(key, JSON.stringify(value))
  const getLocal = (key) => JSON.parse(localStorage.getItem(key))
  const deleteLocal = (key) => localStorage.removeItem(key)

  const [firstFetch, setFirstFetch] = useState([])
  const [pokemons, setPokemons] = useState([])
  const [cardData, setCardData] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => { setCardData(getLocal('cardData')) }, [])

  const [spritesLength, setSpritesLength] = useState(0)
  const [notFound, setNotFound] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [isMobile, setIsMobile] = useState(window.screen.width < 720)
  const [numberOfPokemons, setNumberOfPokemons] = useState(0)

  const handleToogle = () => setToggle(!toggle)

  const [inputSearch, setInputSearch] = useState('')

  useEffect(() => {
    const resizer = () => {
      setIsMobile(window.screen.width < 720)
    }
    addEventListener('resize', resizer)

    return () => removeEventListener('resize', resizer)
  }, [])

  // options
  const [options, setOptions] = useState({
    op_color: getLocal("op_color") || false,
    op_shiny: getLocal("op_shiny") || false,
    op_rotate: getLocal("op_rotate") || false,
    op_gender: getLocal("op_gender") || false,
    op_units: getLocal("op_units") || false,
    op_view: getLocal("op_view") || false,
  })

  const handleOptions = (name, value) => {
    setLocal(name, value)
    setOptions({ ...options, [name]: value })
  }

  const [filters, setFilters] = useState({
    // type: getLocal("type") || 'All Pokemons',
    // page: getLocal("page") || 0,
    type: 'All Pokemons',
    page: 0,
  })

  const handleFilters = (name, value) => {
    closeCard()

    const verifyFilters = () => {
      if (name !== 'page') {
        setLocal('page', 0)
        return { ...filters, 'page': 0 }
      }
      return filters
    }

    setLocal(name, value)
    setFilters({ ...verifyFilters(), [name]: value })
    setCardData(false)

    const result = applyFilters(firstFetch, { ...verifyFilters(), [name]: value })
    setPokemons(result)
  }

  const URL_PAGE = (limit = 0, offset = 0) => `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`

  const getNumberOfPokemons = async () => {
    const firstFetch = await fetch(URL_PAGE())
    const firstJson = await firstFetch.json()
    const getTotal = await firstJson.count

    return getTotal
  }

  const fetchPokemons = async () => {
    setNotFound(false)
    setPokemons(false)
    setCardData(false)
    setLoading(false)

    // first fetch
    // const getTotal =  1
    const getTotal = ENV_LOCALHOST ? 100 : await getNumberOfPokemons()

    setNumberOfPokemons(getTotal)

    // fetch them all
    const url = URL_PAGE(getTotal)
    const res = await fetch(url)
    const rawData = await res.json()
    const results = rawData.results

    const setFilters = async data => {
      const filteredpokemons = await applyFilters(data, { ...filters })

      setPokemons(filteredpokemons)
    }

    // getting basic info
    const pokemons = await getChunks(results, fetch, setFilters)

    setFirstFetch(pokemons)
    setLoading(true)
  }

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
    isMobile,
    toggle,
    numberOfPokemons,
    loading
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
      setInputSearch,
      handleToogle
    }
  }

  const state = {
    ...INITITAL_STATE,
    ...constants(),
    effects: {
      ...effects(),
    },
  }

  return (
    <contextApi.Provider value={state}>
      {children}
    </contextApi.Provider>
  )
}