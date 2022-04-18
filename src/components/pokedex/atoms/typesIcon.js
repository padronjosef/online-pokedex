import React, { Fragment } from 'react';
import { getAsset } from '/src/helpers/formatData';

export function TypesIcon({ type = {} }) {
  return (
    <Fragment>
      {type.name !== "All Pokemons" &&
        <img className="types__img" src={getAsset("types", type.name)} alt={type.name} />
      }
    </Fragment>
  );
};
