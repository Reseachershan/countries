import React from 'react';
import Countries from './component/Countries';
import Navbar from './component/Navbar';
import './App.css';
import NavList from './component/NavList';
import CountryRoutes from './route/CountryRoutes';

function App() {
 
    return (
    <div className='flex flex-col w-full justify-center'>
      <CountryRoutes />
    </div>
  );
}

export default App;
