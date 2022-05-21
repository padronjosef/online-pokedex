import React from 'react'
import { ContextProvider } from './useContext'
import { Pokedex } from './components'
import './assets/style.sass'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

export function App () {
	return (
		<ContextProvider>
			<Pokedex />
		</ContextProvider>
	)
}

// serviceWorkerRegistration.register()