import { Link } from 'react-router'

export default function CountryCard({ image, countryName, population, region, capital,data }) {

    return (
        <Link to={`/${countryName}` }  style={{ textDecoration: "none", color: "inherit" }} state={data}>
            <div className="country-card">
                <div><img src={image} alt={countryName} /></div>
                <div className="country-information">
                    <strong className="country-name">{countryName}</strong>
                    <p> <strong>Population : </strong> {population}</p>
                    <p> <strong>Region : </strong> {region}</p>
                    <p> <strong>Capital : </strong> {capital}</p>
                </div>
            </div></Link>
    )
}
