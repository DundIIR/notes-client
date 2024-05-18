import axios from 'axios'

export const createNote = async note => {
	try {
		let response = await axios.post('/notes', note)

		return response.status
	} catch (e) {
		console.log(e)
	}
}

export const fetchNotes = async filter => {
	try {
		let response = await axios.get('/notes', {
			params: {
				search: filter?.search,
				searchAll: filter.searchAll,
				sortItem: filter?.sortItem,
				sortOrder: filter?.sortOrder,
			},
		})

		return response.data.notes
	} catch (e) {
		console.log(e)
	}

	// const data = [
	// 	{
	// 		id: '1',
	// 		title: 'Заголовок 1',
	// 		description:
	// 			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque molestiae, doloribus, repudiandae quod vero modi veniam ab facere, voluptate in tenetur consequuntur aspernatur! Eaque pariatur consequuntur et aliquam quo.',
	// 		creationDate: '01-19-23',
	// 	},
	// 	{
	// 		id: '2',
	// 		title: 'Заголовок 2',
	// 		description:
	// 			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque molestiae, doloribus, repudiandae quod vero modi veniam ab facere, voluptate in tenetur consequuntur aspernatur! Eaque pariatur consequuntur et aliquam quo.',
	// 		creationDate: '01-19-23',
	// 	},
	// 	{
	// 		id: '3',
	// 		title: 'Заголовок 3',
	// 		description:
	// 			'Lorem ipsum d. Autem cumque molestiae, doloribus, repudiandae quod vero modi veniam ab facere, voluptate in tenetur consequuntur aspernatur! Eaque pariatur consequuntur et aliquam quo.',
	// 		creationDate: '01-19-23',
	// 	},
	// 	{
	// 		id: '4',
	// 		title: 'Заголовок 4',
	// 		description:
	// 			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque molestiae, doloribus, repudiandae quod vero modi veniam ab facere, voluptate in tenetur consequuntur aspernatur! Eaque pariatur consequuntur et aliquam quo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque molestiae, doloribus, repudiandae quod vero modi veniam ab facere, voluptate in tenetur consequuntur aspernatur! Eaque pariatur consequuntur et aliquam quo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque molestiae, doloribus, repudiandae quod vero modi veniam ab facere, voluptate in tenetur consequuntur aspernatur! Eaque pariatur consequuntur et aliquam quo.',
	// 		creationDate: '01-19-23',
	// 	},
	// 	{
	// 		id: '5',
	// 		title: 'Заголовок 5',
	// 		description:
	// 			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque molestiae, doloribus, repudiandae quod vero modi veniam ab facere, voluptate in tenetur consequuntur aspernatur! Eaque pariatur consequuntur et aliquam quo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque molestiae, doloribus, repudiandae quod vero modi iquam quo.',
	// 		creationDate: '01-19-23',
	// 	},
	// 	{
	// 		id: '6',
	// 		title: 'Заголовок 6',
	// 		description:
	// 			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque molestiae, doloribus, repudiandae quod vero modi veniam ab facere, voluptate in tenetur consequuntur aspernatur! Eaque pariatur consequuntur et aliquam.',
	// 		creationDate: '01-19-23',
	// 	},
	// ]

	// return data
}

export const updateNote = async (id, updatedNote) => {
	try {
		let response = await axios.put(`/notes/${id}`, updatedNote)
		return response.data
	} catch (e) {
		console.log(e)
	}
}

export const deleteNote = async id => {
	try {
		await axios.delete(`/notes/${id}`)
	} catch (e) {
		console.log(e)
	}
}
