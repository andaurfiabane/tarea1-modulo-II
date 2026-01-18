import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ProductList from './components/ProductList/ProductList'

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
  }, []);


  return (
    <>
    <div className={`app-layout ${isDarkMode ? 'dark' : ''}`}>
      <Header 
        searchValue={searchTerm} 
        onSearchChange={setSearchTerm}
      />
      <main className='container'>
        <ProductList searchTerm={searchTerm}/>
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App
