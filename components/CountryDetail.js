import { useEffect, useState } from "react"
import { Link, useLocation, useParams } from "react-router"
import { useThemeContext } from "../hooks/useThemeContext"
import { ArrowLeftIcon } from "lucide-react"
import ShimmerCountryDetail from "./ShimmerCountryDetail"

export default function CountryDetail() {
  const { country } = useParams()
  const { state } = useLocation()
  const [countryDetails, setCountryDetails] = useState(null)
  const [isDark] = useThemeContext()
  function updateCountryDetails(data) {
    setCountryDetails({
      flag: data.flags.svg,
      name: data.name.common,
      population: data.population.toLocaleString('en-IN'),
      region: data.region,
      subregion: data.subregion,
      capital: data.capital.join(', '),
      tld: data.tld.join(', '),
      currencies: Object.values(Object.values(data.currencies)[0]).join(' '),
      languages: Object.values(data.languages).join(', '),
      borders: []
    })
    if (!data.borders) {
      data.borders = []
    }
    const countryBordersPromise = data.borders.map((countryCode) => {
      return fetch(`https://restcountries.com/v3.1/alpha?codes=${countryCode}`)
        .then((res) => res.json())
        .then(([data]) => {
          return data.name.common
        })
    })
    Promise.all(countryBordersPromise).then((borders) => { setCountryDetails((prev) => ({ ...prev, borders })) })

  }
  useEffect(() => {

    if (state) {
      updateCountryDetails(state)
      return
    }
    fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        updateCountryDetails(data)
      }).catch((err) => {
        console.log(err);
        console.log('Something went wrong');
      })

  }, [country])
  return (
    <main className={`${isDark && "dark"} country-detail-container`}>

      <button className="back-btn" onClick={() => history.back()}><ArrowLeftIcon /> Back</button>
      {countryDetails === null ? <ShimmerCountryDetail /> : <>

        <div className="country-details-container">
          <div className="flag"><img src={countryDetails.flag} alt="flag" /></div><div className="countryDetails">
            <div>
              <h1>{countryDetails.name}</h1>
              <p>Population : {countryDetails.population}</p>
              <p>Region : {countryDetails.region}</p>
              <p>Sub Region : {countryDetails.subregion}</p>
              {countryDetails.capital && <p>Capital : {countryDetails.capital}</p>}
              {countryDetails.borders.length !== 0 && <div className="borders">Borders : {countryDetails.borders.map((border) => <Link key={border} to={`/${border}`} className="border-link"  >{border}</Link>)}</div>}
            </div>
            <div>
              <p>Top Level Domains : {countryDetails.tld}</p>
              <p>Currencies : {countryDetails.currencies}</p>
              <p>Languages : {countryDetails.languages}</p></div>
          </div>

        </div></>}</main>
  )
}
