import React, { useContext } from 'react';
import { contextApi } from '/src/useContext';
import { actualPage, totalPages, getLast } from '/src/helpers';

export const Pagination = () => {
	const { totalOfPokemon, filters: { page }, isMobile, effects } = useContext(contextApi);
	const { handleFilters, setPageNumbers, } = effects
  console.log("🚀 ~ file: pagination.js ~ line 9 ~ Pagination ~ getLast(totalOfPokemon)", getLast(totalOfPokemon))

	const buttons = [
		{
			name: isMobile ? 1 :'First',
			logic: () => handleFilters("page", 0),
			disabled: !page
		},
		{
			name: isMobile ? '<' : 'Previous',
			logic: () => handleFilters("page", page - 10),
			disabled: !page
		},
		{
			name: actualPage(page) + " / " + totalPages(totalOfPokemon),
			className: "counter",
		},
		{
			name: isMobile ? '>' : 'Next',
			logic: () => handleFilters("page", page + 10),
			disabled: page >= totalOfPokemon,
		},
		{
			name: isMobile ?  totalPages(totalOfPokemon) : 'Last',
			logic: () => handleFilters("page", getLast(totalOfPokemon)),
			disabled: page >= totalOfPokemon,
		},
	]


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
