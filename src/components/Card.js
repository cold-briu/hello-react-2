import React, { useState } from 'react'

const Card = ({ message }) => {
	const [newMessage, setNewMessage] = useState("")

	const handleChange = (e) => setNewMessage(e.target.value)


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

		</div>
	)
}

export default Card