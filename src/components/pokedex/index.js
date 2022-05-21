import React, { useEffect, useContext } from 'react'
import { contextApi } from '/src/useContext'
import { Filters, Main, Types } from './objects'
import './style.sass'

export function Pokedex() {
	const { effects: { fetchPokemons } } = useContext(contextApi)

	useEffect(() => {
		fetchPokemons()
	}, [])

	return (
		<div className='pokedex'>
			<Types />
			<Main />
			<Filters />
		</div>
	)
}
