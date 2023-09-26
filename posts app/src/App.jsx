import { useState } from 'react'
import PostsList from './features/posts/PostsList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <div className="app">
      <h1> React on Rails</h1>
      <p>lorem ipsum dolor sit amet, consectetur adip</p>

      <PostsList />


    </div>
    </>
  )
}

export default App
