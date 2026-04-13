import { Button, Chip } from '@heroui/react'

function Page() {
  return (
    <layouts.default>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>Make&nbsp;</span>
          <span className={title({ color: 'violet' })}>beautiful&nbsp;</span>
          <br />
          <span className={title()}>
            websites regardless of your design experience.
          </span>
          <div className={subtitle({ class: 'mt-4' })}>
            Beautiful, fast and modern React UI library.
          </div>
        </div>

        <div className="flex gap-3">
          <Link to={siteConfig.links.docs}>
            <Button>
              Documentation
            </Button>
          </Link>

          <Link to={siteConfig.links.github}>
            <Button variant="outline">
              <GithubIcon size={20} />
              GitHub
            </Button>
          </Link>
        </div>

        <div className="mt-8">
          <div className="inline-flex items-center gap-2 rounded-lg border border-default-200 bg-default-50 px-4 py-2 text-sm text-default-700">
            <span>Get started by editing</span>
            <Chip>
              pages/index.tsx
            </Chip>
          </div>
        </div>
      </section>
    </layouts.default>
  )
}

export default Page
