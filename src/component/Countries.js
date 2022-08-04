import React, { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import NavList from './NavList';
import Loading from './Loading';

function Countries() {
  const [countries, setGetCountries] = useState([])
  const [IscountriesLoading, setIsCountriesLoading] = useState(true)
  const [searchValue, setSearchValue] = useState('');
  const [filterRegion, setFilterRegion] = useState('')
  const API = 'https://restcountries.com/v3.1/all';

  useEffect(() => {
    setIsCountriesLoading(true)
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        setGetCountries(res)
        setIsCountriesLoading(false)
      }).catch(() => {
        setIsCountriesLoading(false)
      })
  }, [])

  const searchQuery = useMemo(() => {
    if (countries && !filterRegion) return countries
    if (countries && filterRegion) {
      return countries.filter((reg) => (reg.region.toLowerCase().includes(filterRegion.toLowerCase())))
    }
  }, [searchValue, countries, filterRegion])

  const regionWithSearch = useMemo(() => {
    if (searchQuery && !searchValue) return searchQuery
    if (searchQuery && searchValue) {
      return searchQuery.filter((nam) => (nam.name.common.toLowerCase().includes(searchValue.toLowerCase())))
    }
  }, [searchQuery, searchValue])

  const handleSearch = (value) => {
    setSearchValue(value)
  }

  const handleFilterRegion = (value) => {
    setFilterRegion(value)
  }

  if (IscountriesLoading) {
    return (
      <Loading />
    )
  }

  if (!countries || !searchQuery.length) {
    return (
      <>
        <NavList handleSearch={handleSearch} handleFilterRegion={handleFilterRegion} />
        <div style={{ backgroundColor: 'hsl(0, 0%, 98%)' }} className='w-full flex justify-center items-center h-[69vh]'>
          <h1>No Country found</h1>
        </div>
      </>
    )
  }

  return (
    <>
      <NavList handleSearch={handleSearch} handleFilterRegion={handleFilterRegion} />
      <div className='dark:bg-slate-800 dark:text-gray-600 min-h-[69vh] grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-10 px-[20px] sm:px-[50px] mb-10 md:pt-0 pt-[40px]'>
        {regionWithSearch?.map((countries) => {
          return (
            <div style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} className='rounded-md mb-5 w-full'>
              <Link to={`/country/${countries?.name?.common}`}>
                <img className="object-cover rounded-t-lg h-[200px] w-full" src={countries.flags.png} alt="" />
              </Link>
              <div className="p-5 m-h-[150px]">
                <h5 className="mb-2 text-[18px] font-bold dark:text-white">{countries.altSpellings[1]}</h5>
                <h5 className="text-[14px] font-bold dark:text-slate-500">Population: <span className='font-normal'>{countries.population}</span></h5>
                <h5 className="text-[14px] font-bold dark:text-slate-500">Region: <span className='font-normal'>{countries.region}</span></h5>
                <h5 className="text-[14px] font-bold dark:text-slate-500">Capital: <span className='font-normal'>{countries.capital}</span></h5>
              </div>
            </div>
          )
        })
        }
      </div>
    </>
  )
}

export default Countries