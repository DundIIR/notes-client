import tippy from 'tippy.js'
import '../../style/main.scss'

function Filters({ filter, setFilter }) {
	tippy('#SA', {
		allowHTML: true,
		content: '<div class="tippy">Поиск по всем папкам</div>',
		delay: [800, 50],
	})

	tippy('#SD', {
		allowHTML: true,
		content: '<div class="tippy style={}">Поиск в описании</div>',
		delay: [800, 50],
	})

	return (
		<div className="filters">
			<input
				className="filters__search-input"
				type="text"
				placeholder="Поиск"
				onChange={e => setFilter({ ...filter, search: e.target.value })}
			/>
			<input
				className="filters__checkbox"
				type="checkbox"
				id="searchDescription"
				checked={filter.searchAll}
				onChange={e => setFilter({ ...filter, searchAll: e.target.checked })}
			/>
			<label className="filters__label" htmlFor="searchDescription" id="SD">
				О
			</label>
			<input className="filters__checkbox" type="checkbox" id="searchAll" />
			<label className="filters__label" htmlFor="searchAll" id="SA">
				A
			</label>
			<select className="filters__select" onChange={e => setFilter({ ...filter, sortOrder: e.target.value })}>
				<option value="null">По своему</option>
				<option value="desc">Сначала новые</option>
				<option value="asc">Сначала старые</option>
			</select>
		</div>
	)
}

export default Filters
