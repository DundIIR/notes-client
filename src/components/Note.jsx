import moment from 'moment'

function Note({ title, description, creationDate, onDelete, onEdit }) {
	return (
		<>
			<h2 className="text-lg font-semibold mb-2">{title}</h2>
			<p className="text-gray-700 mb-2">{description}</p>
			<p className="text-gray-600">Дата создания: {moment(creationDate).format('DD.MM.YY H:mm')}</p>
			<button onClick={onEdit} className="mr-2">
				Редактировать
			</button>
			<button onClick={onDelete}>Удалить</button>
		</>
	)
}

export default Note
