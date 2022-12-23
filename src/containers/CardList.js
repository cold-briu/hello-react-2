import React from 'react'
import Card from "../components/Card"

const CardList = ({ namesList }) => {
	return (
		<div>
			<h3>
				CardList
			</h3>
			{
				namesList.map(n => <Card message={n} />)
			}
		</div>
	)
}

export default CardList