import React, {useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import Countries from '../component/Countries'
import CountryDetail from '../component/CountryDetail'
import Navbar from '../component/Navbar'
import useDarkMode from '../hook/useDarkMode'

function CountryRoutes() {
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  const handleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode){
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [isDarkMode]);

  return (
    <>
    <Navbar handleTheme={handleTheme} isDarkMode={isDarkMode}/>
    <Routes>
      <Route path="/countries" element={<Countries />} />
      <Route path="/" element={<Countries />} />
      <Route path="/country/:name" element={<CountryDetail  />} />
    </Routes>
    </>
  )
}

export default CountryRoutes