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
