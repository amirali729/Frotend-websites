import React from 'react'
import { useState,useEffect } from 'react'
import { BiSolidMoon, BiSolidSun, } from 'react-icons/bi'

function DarkMode() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
    const element = document.documentElement;
    useEffect(() => {
       if (theme === "dark") {
    element.classList.remove("light");
    element.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    element.classList.remove("dark");
    element.classList.add("light");
    localStorage.setItem("theme", "light");
  }
    
    
    }, [theme])
    
  return (
<div> {theme === "light" ? (<div><BiSolidSun 
onClick={() => setTheme("dark")} /></div>) : (<div><BiSolidMoon onClick={() => setTheme("light")} /></div>)}
    </div>
    
  )
}

export default DarkMode