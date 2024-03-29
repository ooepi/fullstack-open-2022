import {useState, useEffect} from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import CountryList from './components/CountryList'


const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const filteredCountries = countries.filter(country => country.name.common.toLowerCase().match(filter.toLowerCase()))

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <CountryList listOfCountries={filteredCountries} setFilter={setFilter}/>
    </div>
  )
}

export default App