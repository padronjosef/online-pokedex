import React, { useState, useContext } from 'react';
import { contextApi } from '/src/useContext';
import { actualPage, totalPages, lastPokemons } from '/src/helpers';

export const Pagination = () => {
	const { pokemons, pageNumbers, totalOfPokemons, effects } = useContext(contextApi);
	const { setPageNumbers, getPokemons } = effects

	const [showInput, setShowInput] = useState(false)

	const buttons = [
		{
			name: 'First',
			logic: () => setPageNumbers(0),
			disabled: !pageNumbers
		},
		{
			name: 'Previous',
			logic: () => setPageNumbers(pageNumbers - 10),
			disabled: !pageNumbers
		},
		{
			name: actualPage(pageNumbers) + " / " + totalPages(totalOfPokemons),
			className: "counter",
			logic: () => setShowInput(!showInput)
		},
		{
			name: 'Next',
			logic: () => setPageNumbers(pageNumbers + 10),
			disabled: pageNumbers >= totalOfPokemons,
		},
		{
			name: 'Last',
			logic: () => setPageNumbers(lastPokemons(totalOfPokemons)),
			disabled: pageNumbers >= totalOfPokemons,
		},
	]

	if (pokemons.length === 1) return <button className="go-back-btn" onClick={getPokemons}>go back</button>

	return (
		<nav className='navbar'>
			{buttons.map(({ name, logic, disabled, className }) => (
				<button disabled={disabled} onClick={logic} key={name} className={`navbar__btn highlight ${className}`}>
					{name}
				</button>
			))}
		</nav>
	);
};
