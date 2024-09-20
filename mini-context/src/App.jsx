import React, { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile'
import { ThemeContextProvider } from './context/ThemeContext'
import { THEMES } from './Constants'

const App = () => {
  let [theme  ,setTheme] = useState(THEMES.dark)
  function toggleTheme(){
    console.log(theme);    
    setTheme((preValue)=> (preValue === THEMES.light )? THEMES.dark : THEMES.light )
  }
  return (
    <ThemeContextProvider value={{ theme , toggleTheme}}>
        <UserContextProvider>
          <Profile />
        </UserContextProvider>
    </ThemeContextProvider>
  )
}

export default App