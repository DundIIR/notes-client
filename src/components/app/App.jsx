import { useEffect, useState } from 'react'
import UpdateNoteForm from '../noteForm/UpdateNoteForm'
import CreateNoteForm from '../noteForm/CreateNoteForm'
import Filters from '../filters/Filters'
import ListNotes from '../listNotes/ListNotes'
import { fetchNotes, createNote, updateNote, deleteNote } from '../../services/notes'
import '../../style/main.scss'
import ListGroups from '../listGroups/listGroup'

const App = () => {
	const [notes, setNotes] = useState([])
	const [filter, setFilter] = useState({
		search: '',
		searchAll: false,
		sortItem: 'date',
		sortOrder: 'desc',
	})
	const [isEditing, setIsEditing] = useState(false)
	const [editNote, setEditNote] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			let notes = await fetchNotes(filter)
			setNotes(notes)
		}

		fetchData()
	}, [filter])

	const onCreate = async note => {
		await createNote(note)
		let notes = await fetchNotes(filter)
		setNotes(notes)
	}

	const onDelete = async id => {
		await deleteNote(id)
		let notes = await fetchNotes(filter)
		setNotes(notes)
		if (editNote && editNote.id == id) {
			setIsEditing(false)
			setEditNote(null)
		}
	}

	const onUpdate = async (id, updatedNote) => {
		await updateNote(id, updatedNote)
		let notes = await fetchNotes(filter)
		setNotes(notes)
		setIsEditing(false)
		setEditNote(null)
	}

	const onEdit = note => {
		setIsEditing(true)
		setEditNote(note)
	}

	return (
		<section className="main">
			<div className="main__form">
				{!isEditing ? (
					<CreateNoteForm onCreate={onCreate} />
				) : (
					<UpdateNoteForm
						note={editNote}
						onUpdate={onUpdate}
						onCancelEdit={() => {
							setIsEditing(false)
							setEditNote(null)
						}}
					/>
				)}
			</div>
			<div className="main__search">
				<Filters filter={filter} setFilter={setFilter} />
			</div>
			<div className="main__group">
				<ListGroups />
			</div>
			<div className="main__notes">
				<ListNotes notes={notes} onEdit={onEdit} onDelete={onDelete} />
			</div>
		</section>
	)
}

export default App
