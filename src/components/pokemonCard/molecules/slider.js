import React, { useState } from 'react';

export const Slider = ({ sprites, id }) => {
  const [index, setIndex] = useState(0)
  const {
    front_default, back_default, front_shiny, back_shiny,
    front_female, back_female, front_shiny_female, back_shiny_female,
    other: { dream_world, home }
  } = sprites
  
  const oficial = sprites.other["official-artwork"].front_default;
  

  const carrousel = [
    oficial,
    front_default, back_default,
    front_shiny, back_shiny,
    front_female, back_female,
    front_shiny_female, back_shiny_female,
    dream_world.front_default,
    dream_world.front_female,
    home.front_default,
    home.front_female,
    home.front_shiny,
    home.front_shiny_female,
  ].filter(a => a)

  const limit = carrousel.length

  const handleIndex = (event) => {
    if (!event && !index) return setIndex(limit - 1)
    if (index + 1 === limit && event) return setIndex(0)
    return event ? setIndex(index + 1) : setIndex(index - 1)
  }

  const longId = () => {
    const digits = id.toString().length
    if (digits >= 4) return "slider__id--reduce1"
    if (digits >= 3) return "slider__id--reduce2"
    if (digits >= 2) return "slider__id--reduce3"
    return ''
  }

  return (
    <div className='slider'>
      <div
        className='slider__edges slider__edges--left'
        onClick={() => handleIndex()}>
        <button className='slider__btn slider__btn--prev highlight' >
          {"<"}
        </button>
      </div>
      <div className={`slider__id ${longId()}`}>#{id}</div>
      <img
        className='slider__img'
        src={carrousel[index]}
        onClick={() => handleIndex(true)}
      />
      <div
        className='slider__edges slider__edges--right'
        onClick={() => handleIndex(true)}>
        <button className='slider__btn slider__btn--next highlight' >
          {">"}
        </button>
      </div>
      <p>{carrousel[index].ob}</p>
      <span className='slider__counter highlight'>
        {index + 1 + " / " + limit}
      </span>
    </div >
  );
};
