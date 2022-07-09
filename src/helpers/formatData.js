export const actualPage = (pageNumbers) => {
  return Math.ceil(pageNumbers / 10) + 1
}

export const totalPages = (pokemons) => {
  return Math.ceil(pokemons / 10) + 1
}

export const getLast = (list) => {
  return Math.ceil(list / 10) * 10
}

export const getAsset = (where, name) => {
  return require(`/src/assets/${where}/${name}.png`)
}

export const normalize = (text = '') => {
  return text.replace("-", " ").replace("special", "sp")
}

export const toQuery = (query = '') => {
  if( typeof query === "number") return Math.abs(query).trim()
  return query.trim().replace(" ", "-")
}

export const formatHeight = (height = 1000, imperials = false) => {
  const mToFt = 0.32
  const cmToIn = 0.254

  const heightInM = height / 10
  const heightInFt = height * mToFt
  const heightInIn = height / cmToIn

  if (imperials) {
    return height >= 10 ? heightInFt.toFixed(1).replace(".", '"') + " ft" : heightInIn.toFixed(1) + " in"
  }

  return height >= 10 ? heightInM + " m" : height + "0 cm"
}

export const formatWeight = (weight, imperials) => {
  const ton = 1000
  const weightInKgs = weight / 10
  const weightInTons = weightInKgs / ton
  const weightInLb = weight / 22.05

  if (imperials) {
    return weightInLb.toFixed(1) + " lb"
  }

  return weightInKgs < ton ? weightInKgs + " kg" : weightInTons + " ton"
}

export const fullHeight = (height) => {
  const heightInM = height / 10

  const mToFt = 0.32
  const cmToIn = 0.254
  const heightInFt = height * mToFt
  const heightInIn = height / cmToIn


  const metric = height >= 10 ? heightInM + "m" : height + "0 cm"

  const imperial = height >= 10
    ? heightInFt.toFixed(1).replace(".", '"') + "ft"
    : heightInIn.toFixed(1) + "in"

  return `${metric} - ${imperial}`
}

export const fullWeight = (weight) => {
  const ton = 1000
  const weightInKgs = weight / 10
  const weightInTons = weightInKgs / ton


  const weightInLb = weight / 22.05

  const imperial = weightInLb.toFixed(1) + "lb"
  const metric = weightInKgs < ton ? weightInKgs + "kg" : weightInTons + "ton"

  return `${metric} - ${imperial}`
}

export const ENV_LOCALHOST = location.hostname === 'localhost' || locacion.hostname === '127.0.0.1'