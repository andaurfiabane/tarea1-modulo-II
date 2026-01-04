import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductCard from './components/ProductCard'
import ProductList from './components/ProductList';

import perfume1 from './assets/images/perfume1.webp'
import perfume2 from './assets/images/perfume2.webp'
import perfume3 from './assets/images/perfume3.webp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <ProductList/>
      <Footer />
    </>
  )
}

export default App
