import React, { useEffect, useContext } from 'react';
import { contextApi } from '/src/useContext';
import { Filters, Main, Types } from './objects';
import './style.sass';

export function Pokedex() {
	const { pageNumbers, activeType, effects: { getPokemons } } = useContext(contextApi);

	useEffect(() => getPokemons(), [pageNumbers, activeType]);

	return (
		<div className='pokedex'>
			<Types />
			<Main />
			<Filters />
		</div>
	);
};
