import React, { useContext } from 'react';
import { contextApi } from '/src/useContext';
import { Tooltip, getAsset } from '/src/helpers';

export function Stats({ stats = [] }) {
  const { options: { op_color }, } = useContext(contextApi);
  const showShadow = op_color ? "color-white" : ''

  return (
    <div className='stats'>
      {stats.map(({ base_stat, stat: { name } }) => {
        const lightIcons = op_color ? name + "-white" : name

        return (
          <Tooltip text={name} key={name}>
            <img className="stats__img" src={getAsset("stats", lightIcons)} alt={name} />
            <p className={`stats__text ${showShadow}`}>{base_stat}</p>
          </Tooltip>
        )
      })}
    </div>
  );
}
