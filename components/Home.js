import FilterBar from './FilterBar'
import SearchBar from './SearchBar'
import CountryContainer from './CountryContainer'
import { useState } from 'react'
import { useThemeContext } from '../hooks/useThemeContext'
export default function Home() {
    const [search, setSearch] = useState("")
    const [filter,setFilter] = useState("")
    const [ isDark ] = useThemeContext()
    return (
        <main className={`${isDark && "dark"}`}>
            <div className='filter-search-container '>
                <SearchBar setSearch={setSearch} search={search}  />
                <FilterBar setFilter={setFilter}/>
            </div>
            <CountryContainer search={search} filter={filter}/>
        </main>
    )
}
