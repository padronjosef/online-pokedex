export let totalOfPokemon = 0

export const filterByType = (toFilter, typeValue) => {
  if (typeValue !== 'All Pokemons') {
    return toFilter.filter(({ types }) => types.some(type => type === typeValue)
    )
  }

  return toFilter
}

export const filterByPage = (toFilter, page) => {
  if (typeof page !== "number") {
    return toFilter.slice(0, 10)
  }
  return toFilter.slice(page, page + 10)
}

export const applyFilters = (toFilter, { type, page }) => {
  const pipe = [
    { value: type, logic: filterByType },
    { value: page, logic: filterByPage },
  ]

  const finalArray = pipe.reduce((acum, { value, logic }) => {
    if (logic === filterByPage) totalOfPokemon = acum.length - 10
    return logic(acum, value)
  }, toFilter)

  return finalArray
}
