import { createContext, useContext, useState } from "react"
import { Content } from "./components/Content"
import { SearchBar } from "./components/SearchBar"
import { TypeControl } from "./components/TypeControl"

interface Props {
  is: string,
  isNot: string
}

export const TypeContext = createContext<Props | null>(null)
export const SearchContext = createContext<string | null>('')

function App() {

  const [movies, setMovies] = useState(true)
  const [series, setSeries] = useState(false)
  const handleType = () => {
    setMovies(!movies)
    setSeries(!series)
  }

  const [query, setQuery] = useState('')
  const handleQuery = (input: string) => {
    setQuery(input)
  }

  return (
    <TypeContext.Provider value={movies ? { is: 'Movies', isNot: 'TV Series' } : { is: 'TV Series', isNot: 'Movies' }}>
      <div className="App">
        <TypeControl toggleContentType={handleType} />
        <SearchBar searchPhrase={(e) => handleQuery(e.target.value)} />
        <Content payload={query} />
      </div>
    </TypeContext.Provider>
  )
}

export default App