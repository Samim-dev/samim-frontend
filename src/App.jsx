// components
import Navbar from './components/Navbar'
import Showcase from './components/Showcase/Showcase'
import Stats from './components/Stats'
import Cli from './components/Cli'
import Cloud from './components/Cloud'
import Languages from './components/Languages'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Showcase />
      <Stats />
      <Cli />
      <Cloud />
      <Languages />
      <Footer />
    </div>
  )
}

export default App
