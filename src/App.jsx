import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ProductList from './components/ProductList/ProductList'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Header/>
      <main>
        <ProductList/>
      </main>
      <Footer />
    </>
  )
}

export default App
