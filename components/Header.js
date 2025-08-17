import { Moon, SunIcon } from 'lucide-react'
import { useThemeContext } from '../hooks/useThemeContext'

export default function Header() {
  const [ isDark, setIsDark ] = useThemeContext()
  return (
    <header className={`${isDark && "dark"}`}>
      <h1>Where in the World?</h1>
      <div className='dark-light-mode' onClick={()=>{setIsDark(!isDark)
        localStorage.setItem("isDark",!isDark)
      }}>
        {isDark ? <><SunIcon />
          <p>Light Mode</p> </> : <><Moon />
          <p>Dark Mode</p></>}

      </div>
    </header>
  )
}
