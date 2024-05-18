import React, { useState, useEffect } from 'react'
import '../../style/main.scss'

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
		onUpdate(note.id, updatedNote)
	}

	return (
		<form onSubmit={onSubmit} className="form">
			<h3 className="form__title">Редактирование заметки</h3>
			<input
				className="form__input"
				type="text"
				name="title"
				placeholder="Название"
				value={updatedNote.title}
				onChange={e => setUpdatedNote({ ...updatedNote, title: e.target.value })}
			/>
			<textarea
				className="form__textarea"
				name="description"
				placeholder="Описание"
				value={updatedNote.description}
				onChange={e => setUpdatedNote({ ...updatedNote, description: e.target.value })}
			/>
			<div className="form__container-button">
				<button className="form__button" type="submit">
					Сохранить
				</button>
				<button className="form__button form__button--cancel" type="button" onClick={onCancelEdit}>
					Отменить
				</button>
			</div>
		</form>
	)
}

export default UpdateNoteForm
