import { useEffect, useState } from "react";

export function useTheme(): [string, () => void] {
   const [theme, setTheme] = useState<'dark' | 'light'>('dark')
   
   const toggleTheme = () => {
      theme === 'dark'
         ? setTheme('light')
         : setTheme('dark')
   }

   useEffect(() => {
      document.querySelector('html')?.classList.toggle('dark', theme === 'dark')
   }, [theme])

   return [theme, toggleTheme]
}