
import './styles/index.css'
import { useState } from "react"
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { SearchContext, TypeContext, SearchStatusContext } from './components/context'

import { Display } from "./components/Display"
import { Controls } from './components/Controls'
import NoMatch from './routes/NoMatch';
import { Layout } from './components/Layout';

function App() {

  const [currentType, setCurrentType] = useState('movie'), [searchStatus, setSearchStatus] = useState(false), [currentSearch, setCurrentSearch] = useState('')

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