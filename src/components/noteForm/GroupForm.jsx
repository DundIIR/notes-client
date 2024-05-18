import '../../style/main.scss'

const CreateGroupForm = () => {
	return (
		<form className="form">
			<h3 className="form__title">Создание группы</h3>
			<input className="form__input" type="text" placeholder="Название группы" />
			<button className="form__button" type="submit">
				Создать
			</button>
		</form>
	)
}

export default CreateGroupForm
