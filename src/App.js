import React from 'react'
import CardList from './containers/CardList'
import "./app.css"

const App = () => {

	const names = [
		"lio",
		"dima",
		"dibu",
		"depa"
	]

	return (
		<>
			<h1>
				Hola!
			</h1>
			<CardList namesList={names} />
		</>
	)
}

export default App