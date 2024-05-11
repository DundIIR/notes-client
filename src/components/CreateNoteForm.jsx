import { useState } from 'react'

function CreateNoteForm({ onCreate }) {
	const [note, setNote] = useState(null)

	const onSubmit = e => {
		e.preventDefault()
		if (note && note.title && note.description) {
			onCreate(note)
			setNote(null)
		}
	}

	return (
		<form onSubmit={onSubmit}>
			<h3 className="text-xl mb-4 font-bold text-gray-800">Создание заметки</h3>
			<input
				className="shadow border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight"
				type="text"
				placeholder="Название"
				value={note?.title ?? ''}
				onChange={e => setNote({ ...note, title: e.target.value })}
			/>
			<textarea
				className="shadow border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight"
				placeholder="Описание"
				value={note?.description ?? ''}
				onChange={e => setNote({ ...note, description: e.target.value })}></textarea>
			<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
				Создать
			</button>
		</form>
	)
}

export default CreateNoteForm
