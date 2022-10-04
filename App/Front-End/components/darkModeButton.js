import useDarkMode from './UseDarkMode';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';

export default function DarkModeButton() {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <div className='dark:bg-black bg-white fixed bottom-10 right-10'>
      {colorTheme === "light" ? (
        <>
          <SunIcon onClick={() => setTheme("light")} className="h-6 w-6 light" />
        </>
      ) : (
        <>
        <MoonIcon onClick={() => setTheme("dark")} className="h-6 w-6" />
        </>

      )}
    </div>
  )
}