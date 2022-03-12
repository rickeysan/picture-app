import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import db from './firebase/index'
import { Posts } from './components/Posts'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Posts />
    </div>
  )
}

export default App
