import React, { useContext, Fragment } from 'react'
import { contextApi } from '/src/useContext'
import { getAsset } from '/src/helpers'
import { normalize } from '/src/helpers'

export const Complementary = () => {
  const { cardData: { egg_groups, shape, generation, growth_rate, habitat } } = useContext(contextApi)

  const generations = ['Kanto', 'Johto', 'Hoenn', 'Sinnoh', 'Unova', 'Kalos', 'Alola', 'Galar']

  const toRender = [
    {
      name: "egg groups",
      value: egg_groups?.map((item, index) => <span key={item + index}>{item}</span>)
    },
    {
      name: "generation",
      value: `${generation}: ${generations[generation - 1] || 'unknown'}`
    },
    {
      name: "g. rate",
      value: growth_rate?.name
    },
    {
      name: "shape",
      value: shape || 'unknown'
    },
  ]

  return (
    <div className='complementary'>
      {toRender.map(({ name, value }, index) => (
        <div key={name + index} className='complementary__item'>
          <h4 className='complementary__name'>{name}</h4>
          <p className='complementary__value'>{value}</p>
        </div>
      ))}
      {habitat.name && (
        <div className='complementary__item'>
          <h4 className='complementary__name complementary__img-name'>{habitat?.name}</h4>
          <img className='complementary__img' src={getAsset('habitats', habitat?.name)} alt={habitat?.name} />
        </div>
      )}
    </div>
  )
}
