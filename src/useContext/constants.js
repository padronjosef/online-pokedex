export function constants() {
  const types = [
    { name: "All Pokemons", color: "" },
    { name: "normal", color: "#9994A0" },
    { name: "dark", color: "#9994A0" },
    { name: "fighting", color: "#E12C6A" },
    { name: "flying", color: "#8AACE4" },
    { name: "poison", color: "#B667CF" },
    { name: "ground", color: "#E97333" },
    { name: "rock", color: "#C9B787" },
    { name: "bug", color: "#84C400" },
    { name: "ghost", color: "#4B6AB3" },
    { name: "steel", color: "#598FA3" },
    { name: "fire", color: "#FF983F" },
    { name: "water", color: "#3393DD" },
    { name: "grass", color: "#35C04A" },
    { name: "electric", color: "#FBD200" },
    { name: "psychic", color: "#FF6676" },
    { name: "ice", color: "#4BD2C1" },
    { name: "fairy", color: "#FB8AEC" },
    { name: "dragon", color: "#0070CA" },
  ]

  const filds = ["image", "id", "name", "height", "weight", "type", "stats"]

  const FILTERS = [
    "hp",
    "attack",
    "defense",
    "special attack",
    "special defense",
    "speed",
    "weight",
    "generation",
    "base experience",
    "held items",
  ]

  return {
    types,
    filds,
    FILTERS
  }
}