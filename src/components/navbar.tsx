import { Button, Input, Link, TextField } from '@heroui/react'
import clsx from 'clsx'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const searchInput = (
    <TextField className="relative w-full md:max-w-xs" name="email" type="email">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-default-400">
        <SearchIcon className="text-base" />
      </div>
      <Input className="pl-9.5" variant="secondary" placeholder="user@example.com" />
    </TextField>
  )

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <Link className="flex items-center gap-1 no-underline hover:underline" href="/">
            <Logo />
          </Link>
          <ul className="ml-2 hidden items-center gap-4 lg:flex">
            {siteConfig.navItems.map(item => (
              <li key={item.href}>
                <NavLink
                  className={({ isActive }) =>
                    clsx(
                      'text-sm transition-colors hover:text-foreground',
                      isActive
                        ? 'text-primary font-medium'
                        : 'text-default-600',
                    )}
                  to={item.href}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden items-center gap-4 sm:flex">
          <div className="hidden items-center gap-2 sm:flex">
            <Link
              className="inline-flex items-center"
              href={siteConfig.links.twitter}
              rel="noopener noreferrer"
              target="_blank"
            >
              <TwitterIcon className="text-default-500" />
            </Link>
            <Link
              className="inline-flex items-center"
              href={siteConfig.links.discord}
              rel="noopener noreferrer"
              target="_blank"
            >
              <DiscordIcon className="text-default-500" />
            </Link>
            <Link
              className="inline-flex items-center"
              href={siteConfig.links.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              <GithubIcon className="text-default-500" />
            </Link>
            <ThemeSwitch />
          </div>
          <div className="hidden lg:flex">{searchInput}</div>
          <NavLink
            className="hidden md:inline-flex"
            to={siteConfig.links.sponsor}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button variant="tertiary">
              <HeartFilledIcon className="text-danger" />
              Sponsor
            </Button>
          </NavLink>
        </div>

        <div className="flex items-center gap-3 sm:hidden">
          <Link
            className="inline-flex items-center"
            href={siteConfig.links.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
          <button
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
            className="inline-flex items-center rounded-lg px-2 py-2 text-default-600 hover:bg-default-100"
            onClick={() => setIsMenuOpen(v => !v)}
            type="button"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen
                ? (
                    <path
                      d="M6 18L18 6M6 6l12 12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  )
                : (
                    <path
                      d="M4 6h16M4 12h16M4 18h16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  )}
            </svg>
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="border-t border-separator sm:hidden">
          <div className="mx-auto max-w-7xl px-6 py-4">
            {searchInput}
            <ul className="mt-4 flex flex-col gap-2">
              {siteConfig.navMenuItems.map(item => (
                <li key={item.href}>
                  <NavLink
                    className={({ isActive }) =>
                      clsx(
                        'block rounded-lg px-2 py-2 text-lg transition-colors hover:bg-default-100',
                        isActive
                          ? 'text-primary font-medium'
                          : 'text-foreground',
                      )}
                    onClick={() => setIsMenuOpen(false)}
                    to={item.href}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  )
}
