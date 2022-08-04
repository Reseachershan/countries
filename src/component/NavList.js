import React,{useEffect} from 'react'

function NavList({handleSearch, handleFilterRegion}) {
  const [searchInput, setSearchInput] = React.useState('')
  const [showDropdown, setShowDropdown] = React.useState(false)
  const [region, setRegion] = React.useState('')

  React.useEffect(()=>{
    if (searchInput){
      handleSearch(searchInput)
    }
  },[searchInput])

  useEffect(() => {
     if (region) {
      handleFilterRegion(region)
     }
  }, [region]);

  return (
    <div  className='dark:bg-slate-800 w-full h-[50px] bg-[white] py-[70px] px-[20px] sm:px-[50px] flex justify-between items-center relative'>
      <form className="outline-0 flex items-center md:w-[400px] w-full">
        <div className="relative w-full">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
          </div>
          <input value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} type="text" className="border bg-white text-sm rounded-lg block w-full pl-20 p-2.5  dark:bg-gray-700 dark:text-gray-400 capitalize dark:placeholder-gray-400" placeholder="Search for a country..." />
        </div>
      </form>
      <div className='absolute right-[20px] md:right-10 top-[120px] md:top-[48px]'>
        <button onClick={() => setShowDropdown(!showDropdown)} className="border text-black border-black-1 bg-white-700 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-gray-700 dark:text-gray-400" type="button">{region ? region : 'Filter by Region'}<svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
        <div className={`${showDropdown ? 'show' : 'hidden'}  absolute right-0 top-[38px] z-10 w-44 mt-3 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700`}>
          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
            <li onClick={()=>setRegion('Africa')}>
              <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Africa</a>
            </li>
            <li onClick={()=>setRegion('America')}>
              <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">America</a>
            </li>
            <li onClick={()=>setRegion('Asia')}>
              <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Asia</a>
            </li>
            <li onClick={()=>setRegion('Europe')}>
              <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Europe</a>
            </li>
            <li onClick={()=>setRegion('Oceania')}>
              <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Oceania</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavList