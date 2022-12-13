
import './styles/index.css'
import { useState } from "react"
import { Outlet } from "react-router-dom";
import { SearchContext, TypeContext, SearchStatusContext } from './components/context'

function App() {

  const [currentType, setCurrentType] = useState('tv'), [searchStatus, setSearchStatus] = useState(false), [currentSearch, setCurrentSearch] = useState('')

  return (
    <div className="App">
      <TypeContext.Provider value={{ contentType: currentType, setContentType: setCurrentType }}>
        <SearchContext.Provider value={{ searchPhrase: currentSearch, setSearchPhrase: setCurrentSearch }}>
          <SearchStatusContext.Provider value={{ searchStatus, setSearchStatus }}>
            <Outlet />
          </SearchStatusContext.Provider>
        </SearchContext.Provider>
      </TypeContext.Provider>
    </div>
  )
}

export default App