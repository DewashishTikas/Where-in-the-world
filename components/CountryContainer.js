import { useEffect, useState } from "react"
import CountryCard from "./CountryCard";
import ShimmerCountryContainer from "./ShimmerCountryContainer";

export default function CountryContainer({ search, filter }) {
    const [countriesData, setCountriesData] = useState([])
    useEffect(() => {
        getCountriesData()
    }, [])

    async function getCountriesData() {
        const response = await fetch("https://restcountries.com/v3.1/independent")
        const data = await response.json()
        setCountriesData(data)
    }
    return (
        <div className="country-card-container ">
            {countriesData.length === 0 ? [...Array(12)].map((_, i) => <ShimmerCountryContainer key={i} />) : countriesData.filter((country) => (country.name.common.toLowerCase().includes(search.toLowerCase()) || country.region.toLowerCase().includes(search.toLowerCase())) && country.region.toLowerCase().includes(filter.toLowerCase())).map((country) => {
                return <CountryCard key={country.name.common} image={country.flags.svg} countryName={country.name.common} population={country.population.toLocaleString('en-IN')} region={country.region} capital={country.capital[0]} data={country} />
            })}
        </div>
    )
}
