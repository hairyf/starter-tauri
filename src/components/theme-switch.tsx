import type { FC } from 'react'
import { useMounted } from '@hairy/react-lib'
import clsx from 'clsx'
import { useTheme } from 'next-themes'

export interface ThemeSwitchProps {
  className?: string
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
}) => {
  const isMounted = useMounted()

  const { theme, setTheme } = useTheme()
  const isLight = theme === 'light'
  const toggleTheme = () => setTheme(isLight ? 'dark' : 'light')

  // Prevent Hydration Mismatch
  if (!isMounted)
    return <div className="w-6 h-6" />

  return (
    <button
      type="button"
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      onClick={toggleTheme}
      className={clsx(
        'px-px transition-opacity hover:opacity-80 cursor-pointer',
        className,
      )}
    >
      <div
        className={clsx([
          'w-auto h-auto',
          'bg-transparent',
          'rounded-lg',
          'flex items-center justify-center',
          '!text-default-500',
          'pt-px',
          'px-0',
          'mx-0',
        ])}
      >
        {isLight
          ? (
              <MoonFilledIcon size={22} />
            )
          : (
              <SunFilledIcon size={22} />
            )}
      </div>
    </button>
  )
}
