import '../../style/main.scss'
import { useState } from 'react'

const CreateNoteForm = ({ onCreate }) => {
	const [note, setNote] = useState(null)

	const onSubmit = e => {
		e.preventDefault()
		if (note && note.title && note.description) {
			onCreate(note)
			setNote(null)
		}
	}

	return (
		<form onSubmit={onSubmit} className="form">
			<h3 className="form__title">Создание заметки</h3>
			<input
				className="form__input"
				type="text"
				placeholder="Название"
				value={note?.title ?? ''}
				onChange={e => setNote({ ...note, title: e.target.value })}
			/>
			<textarea
				className="form__textarea"
				placeholder="Описание"
				value={note?.description ?? ''}
				onChange={e => setNote({ ...note, description: e.target.value })}></textarea>
			<button className="form__button" type="submit">
				Создать
			</button>
		</form>
	)
}

export default CreateNoteForm
