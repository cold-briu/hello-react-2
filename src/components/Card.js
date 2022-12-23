import React, { useState } from 'react'

const Card = ({ message, position, update }) => {
	const [newMessage, setNewMessage] = useState("")

	const handleChange = (e) => setNewMessage(e.target.value)

	const handleClick = () => update(newMessage, position)


	return (
		<div className='card'>
			<p>
				<strong>Card!</strong>
				<br />
				<em>{message}</em>
				<br />
				<span>
					new message: {newMessage}
				</span>
			</p>
			<input onChange={handleChange} placeholder='change name' />

			<button onClick={handleClick}>
				Change Message
			</button>

		</div >
	)
}

export default Card