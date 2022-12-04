import { useState } from 'react'
import MovieCard from './components/MovieCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MovieCard text='huh'/>
    </div>
  )
}

export default App
