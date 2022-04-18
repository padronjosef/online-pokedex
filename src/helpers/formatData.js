export const actualPage = (pageNumbers) => (
  Math.ceil(pageNumbers / 10) + 1
)

export const totalPages = (totalOfPokemons) => (
  Math.ceil(totalOfPokemons / 10) + 1
)

export const lastPokemons = (totalOfPokemons) => (
  (parseInt(totalOfPokemons / 10, 10) * 10) + 10
)

export const getAsset = (where, name) => (
  require(`/src/assets/${where}/${name}.png`)
)

export const formatstat = (stat) => (
  stat.replace("-", " ").replace("special", "sp")
)

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