import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-aerial.jpg"
        alt="Aerial restorative yoga in a sunlit studio"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-foreground/40" />
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-background/80 mb-4">
          Aerial Restorative & Meditation
        </p>
        <h1 className="font-serif text-5xl md:text-7xl font-light leading-tight text-background text-balance">
          Restore Your Body, Elevate Your Spirit
        </h1>
        <p className="mt-6 text-lg text-background/80 leading-relaxed max-w-xl mx-auto">
          Discover the art of supported surrender through aerial restorative yoga and guided meditation. A practice where gravity does the work and you simply let go.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#classes"
            className="rounded-sm bg-primary px-8 py-3 text-sm uppercase tracking-widest text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            View Schedule
          </a>
          <a
            href="#about"
            className="rounded-sm border border-background/40 px-8 py-3 text-sm uppercase tracking-widest text-background hover:bg-background/10 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
