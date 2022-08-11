import React, { useEffect } from 'react'

function useDarkMode({isDarkMode}) {
  console.log(isDarkMode);
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode){
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, []);
}

export default useDarkMode