export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-serif text-xl text-foreground">Serenity</p>
          <p className="text-sm text-muted-foreground mt-1">
            Aerial Restorative Yoga & Meditation
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-6">
            {["About", "Classes", "Offerings", "Reviews", "Contact"].map(
              (link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Serenity Yoga. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
