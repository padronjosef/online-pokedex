import { constants } from './constants';

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
    { value: page, logic: filterByPage }
  ]

  const finalArray = pipe.reduce((acum, { value, logic }) => {
    if (logic === filterByPage) totalOfPokemon = acum.length - 10
    return logic(acum, value)
  }, toFilter)

  return finalArray
}

export const reduceData = (fullData) => {
  const {
    species,
    varieties,
    capture_rate,
    forms,
    past_types,
    is_default,
    location_area_encounters,
    game_indices,
    base_experience,
    types,
    stats,
    held_items,
    evolution_chain,
    sprites,
    ...rest } = fullData

  const { other: { dream_world, home, }, versions, ...restSprites } = sprites
  const official = sprites.other["official-artwork"]

  const formatedSprites = { ...restSprites, dream_world, home, official }

  const { genera, flavor_text_entries, egg_groups, color, generation } = species

  const power = stats.reduce((acum, value) => acum + value.base_stat, 0)

  const generaEN = genera.filter(item => item.language.name === "en")
  const subTitle = generaEN[0].genus

  const descriptionEN = flavor_text_entries.filter(item => item.language.name === "en")
  const description = descriptionEN[0].flavor_text.replace("\f", '. ')


  const formatedStats = stats.map(({ stat, base_stat }) => ({ name: stat.name, value: base_stat }))

  const eggs = egg_groups.map(egg => egg.name)

  const typesRaw = types.map(item => item.type.name)

  const extra = {
    sprites: formatedSprites,
    generation: constants().ROMANNUMERALS[generation.name.replace("generation-", '')],
    power,
    subTitle,
    capture_rate,
    description,
    color: color.name,
    egg_groups: eggs,
    types: typesRaw,
    stats: formatedStats,
    evolution_chain: evolution_chain.chain
  }

  return { ...rest, ...extra }
}

// async function fetchPhoto() {
//   const URL_PAGE = "https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${0}"
//   const url = URL_PAGE + `pokemon/?limit=${20}&offset=${0}`
//   const res = await fetch(url);
//   const rawData = await res.json();
//   return await rawData.results
// }

// function all(items, fn) {
//   const promises = items.map(item => fn(item));
//   return Promise.all(promises);
// }

// function series(items, fn) {
//   let result = [];
//   return items.reduce((acc, item) => {
//     acc = acc.then(() => {
//       return fn(item).then(res => result.push(res));
//     });
//     return acc;
//   }, Promise.resolve())
//     .then(() => result);
// }

// function splitToChunks(items, chunkSize = 10) {
//   const result = [];
//   for (let i = 0; i < items.length; i += chunkSize) {
//     result.push(items.slice(i, i + chunkSize));
//   }
//   return result;
// }

// function chunks(items, fn, chunkSize = 10) {
//   let result = [];
//   const chunks = splitToChunks(items, chunkSize);
//   return series(chunks, chunk => {
//     return all(chunk, fn)
//       .then(res => result = result.concat(res))
//   })
//     .then(() => result);
// }

// const nombre = async () => {
//   const algo = await fetchPhoto()
//   const results = await chunks(algo, fetch)
// }

// nombre()