import React, { useState } from 'react'
import Card from "../components/Card"

const CardList = ({ namesList }) => {

	const [list, setList] = useState(namesList)

	const updateName = (newName, position) => {

		const newList = list
		newList[position] = newName
		setList(newList)
	}

	console.log(list);

	return (
		<div>
			<h3>
				CardList
			</h3>
			{
				list.map(
					(entry, index) =>
						<Card
							message={entry}
							position={index}
							update={updateName}
						/>
				)
			}
		</div>
	)
}

export default CardList