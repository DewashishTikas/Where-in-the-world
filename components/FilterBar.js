
export default function FilterBar({setFilter}) {
  
  return (
    <div className="filter-container">
        <select name="country" id="country" onChange={(e)=>setFilter(e.target.value)}>
            <option value='' hidden defaultChecked>Filter By Region</option>
            <option value="">All</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    </div>
  )
}
