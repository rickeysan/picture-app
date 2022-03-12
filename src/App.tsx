import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { db } from './firebase/index'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
    </div>
  )
}

export default App
