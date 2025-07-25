import './App.css'
import About from './components/About'
import Contribute from './components/Contribute'
import Features from './components/Features'
import Hero from './components/Hero/Hero'
import NavBar from './components/NavBar'
import Promovideo from './components/Promovideo'
import Screenshots from './components/Screenshots/Screenshots'

function App() {
 
  return (
    <>
      <NavBar/>
      <Hero/>
      <About/>
      <Promovideo/>
      <Features/>
      <Screenshots/>
      <Contribute/>
    </>
  )
}

export default App
