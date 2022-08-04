import React, { useState, useEffect, useMemo } from 'react'
import { useParams , Link} from "react-router-dom";
import Loading from './Loading';
import Navbar from './Navbar';

function CountryDetail() {
  let { name } = useParams();
  console.log(name);
  const [countries, setGetCountries] = useState([])
  const [IscountriesLoading, setIsCountriesLoading] = useState(true)
  const fetchPost = (name) => {
    const API = `https://restcountries.com/v3.1/name/${name}`;
    setIsCountriesLoading(true)
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        setGetCountries(res)
        setIsCountriesLoading(false)
      }).catch(() => {
        setIsCountriesLoading(false)
      })
  }
  console.log('countries', countries);
  useEffect(() => {
    if (name) {
      fetchPost(name)
    }
  }, [])


  // const totalLang = useMemo(()=>{
  //     if(countries){

  //    }
  //  },[countries])

  //  console.log(totalLang);

  if (IscountriesLoading) {
    return (
    <Loading />
    )
  }

  if (!countries) {
    return (
      <div  className='dark:bg-slate-800 dark:text-slate-200  w-full flex justify-center items-center h-[100vh]'>
        <h1>No Country found</h1>
      </div>
    )
  }

  return (
    <div className='w-full h-[100vh] dark:bg-slate-800 dark:text-slate-200'>
      <div className='px-[20px] sm:px-[50px] py-5 dark:bg-slate-800 dark:text-slate-200  dark:border-indigo-600'>
        <Link to='/'> <button style={{boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}} className='flex justify-center items-center gap-2 px-5 py-1 dark:bg-slate-600 rounded-md'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
        </svg>Back</button></Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 h-[70vh] mt-10 dark:bg-slate-800 dark:text-slate-200'>
        <div className='px-5 sm:px-[100px] py-5 w-full h-full'>
          <img className='object-contain w-full' src={countries[0].flags.png} />
        </div>
        <div className='px-5 sm:px-0 sm:py-5 dark:bg-slate-800 dark:text-slate-200'>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <p className="col-span-1 sm:col-span-2 mb-2 text-[30px] font-bold dark:text-white">{countries[0].name.common}</p>
            <p className="text-[14px] font-bold">Native Name: {Object.keys(countries[0].name.nativeName).map((nativename) => {
              return (
                <span className='font-normal'>{countries[0].name.nativeName[nativename].official},</span>
              )
            })}</p>
            <p className="text-[14px] font-bold">Currency: {Object.keys(countries[0].currencies).map((symol) => (<span className='font-normal'>{countries[0].currencies[symol].symbol}</span>))}</p>
            <p className="text-[14px] font-bold">Population: <span className='font-normal'>{countries[0].population}</span></p>
            <p className="text-[14px] font-bold">Region: <span className='font-normal'>{countries[0].region}</span></p>
            <p className="text-[14px] font-bold">Language:
              {Object.keys(countries[0].languages).map((language, index) => {
                return (
                  <>
                    <span className='font-normal'>{countries[0].languages[language]},</span>
                  </>
                )
              })}
            </p>
            <p className="text-[14px] font-bold">sub region: <span className='font-normal'>{countries[0].subregion}</span></p>
            <p className="text-[14px] font-bold">capital: <span className='font-normal'>{countries[0].capital[0]}</span></p>
            <div className='col-span-1 sm:col-span-2 sm:mt-[50px]'>
              <span className="text-[14px] font-bold gap-4">Border countries:
                {countries[0]?.borders?.map((border) => {
                  return (
                    <span className='font-normal border dark:bg-slate-600 border-indigo-600 p-1 sm:px-5'>{border}</span>
                  )
                })
                }
              </span>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryDetail
