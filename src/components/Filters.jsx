function Filters({ filter, setFilter }) {
	return (
		<div className="mt-4">
			<input
				className="border border-gray-300 rounded px-3 py-2 mr-2"
				type="text"
				placeholder="Поиск"
				onChange={e => setFilter({ ...filter, search: e.target.value })}
			/>
			<input
				type="checkbox"
				id="searchAll"
				checked={filter.searchAll}
				onChange={e => setFilter({ ...filter, searchAll: e.target.checked })}
			/>
			<label htmlFor="searchAll" className="cursor-pointer select-none ml-1">
				искать в описании
			</label>
			<select
				className="border border-gray-300 rounded px-3 py-2 mt-2"
				onChange={e => setFilter({ ...filter, sortOrder: e.target.value })}>
				<option value="desc">Сначала новые</option>
				<option value="asc">Сначала старые</option>
			</select>
		</div>
	)
}

export default Filters
