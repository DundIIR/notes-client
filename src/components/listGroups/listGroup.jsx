import '../../style/main.scss'

function ListGroups() {
	return (
		<div className="group">
			<ul className="group__list">
				<li className="group__item">
					<button>+</button>
				</li>
				<li className="group__item">Общее</li>
				<li className="group__item">Домашнее задание</li>
				<li className="group__item">Машина</li>
			</ul>
		</div>
	)
}

export default ListGroups
