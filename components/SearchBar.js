import { Search } from "lucide-react";

export default function SearchBar({search ,setSearch}) {
  return (
    <div className="search-container">
        <Search className="icon" width={15}/>
        <input type="text" placeholder="Search for a country..." value={search} onChange={(e)=>setSearch(e.target.value)} />
    </div>
  )
}
