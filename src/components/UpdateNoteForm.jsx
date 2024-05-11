import React, { useState, useEffect } from 'react'

function UpdateNoteForm({ note, onUpdate, onCancelEdit }) {
	const [updatedNote, setUpdatedNote] = useState({
		title: note.title,
		description: note.description,
	})

	useEffect(() => {
		if (note) {
			setUpdatedNote({ ...note })
		}
	}, [note])

	const onSubmit = e => {
		e.preventDefault()
		console.log(note.id, updatedNote)
		onUpdate(note.id, updatedNote)
	}

	return (
		<form onSubmit={onSubmit}>
			<h3 className="text-xl mb-4 font-bold text-gray-800">Редактирование заметки</h3>
			<input
				className="shadow border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight"
				type="text"
				name="title"
				placeholder="Название"
				value={updatedNote.title}
				onChange={e => setUpdatedNote({ ...updatedNote, title: e.target.value })}
			/>
			<textarea
				className="shadow border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight"
				name="description"
				placeholder="Описание"
				value={updatedNote.description}
				onChange={e => setUpdatedNote({ ...updatedNote, description: e.target.value })}
			/>
			<div className="flex justify-between">
				<button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" type="submit">
					Сохранить
				</button>
				<button
					className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
					type="button"
					onClick={onCancelEdit}>
					Отменить
				</button>
			</div>
		</form>
	)
}

export default UpdateNoteForm
