import React, { Fragment } from 'react';
import { getAsset } from '/src/helpers/formatData';

export function TypesIcon({ type = "" }) {
  return (
    <Fragment>
      {type !== "All Pokemons" &&
        <img className="types__img" src={getAsset("types", type)} alt={type} />
      }
    </Fragment>
  );
};
