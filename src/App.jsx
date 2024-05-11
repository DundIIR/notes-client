import { useEffect, useState } from 'react'
import UpdateNoteForm from './components/UpdateNoteForm'
import CreateNoteForm from './components/CreateNoteForm'
import Filters from './components/Filters'
import Note from './components/Note'
import { fetchNotes, createNote, updateNote, deleteNote } from './services/notes'

function App() {
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
		<section className="p-8 flex flex-row justify-start">
			<div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 border border-gray-300 mr-4">
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
				<Filters filter={filter} setFilter={setFilter} />
			</div>
			<div className="flex-1 bg-white shadow-md rounded border border-gray-300">
				<ul className=" divide-gray-300 ">
					{notes.map(note => (
						<li className="py-4 px-6 border-b-2" key={note.id}>
							<Note
								title={note.title}
								description={note.description}
								creationDate={note.creationDate}
								onDelete={() => onDelete(note.id)}
								onEdit={() => onEdit(note)}
							/>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default App
