import { useState } from 'react'
import Footer from './Components/Footer/Footer'
import Generator from './Components/Generator/Generator'
import './index.scss'

function App() {
  return (
    <div className="App">
      <Generator />
      <Footer />
    </div>
  )
}

export default App
