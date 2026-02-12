import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-card">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
          <Image
            src="/images/instructor.jpg"
            alt="Yoga instructor in a peaceful studio"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Meet Your Teacher
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground leading-tight">
            A Journey Rooted in Rest & Renewal
          </h2>
          <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              With over a decade of practice and teaching, I discovered that the
              most transformative moments in yoga happen not in striving, but in
              surrendering. That insight led me to specialise in aerial
              restorative yoga and meditation.
            </p>
            <p>
              After training in Bali, India, and across Europe, I developed a
              unique approach that combines the decompressive benefits of aerial
              hammocks with the deep stillness of restorative postures and
              mindful meditation.
            </p>
            <p>
              My mission is simple: to create a space where you feel safe enough
              to truly let go. Every class is an invitation to rest, restore,
              and remember what it feels like to be at peace.
            </p>
          </div>
          <div className="mt-8 flex gap-8">
            <div>
              <p className="font-serif text-3xl text-foreground">10+</p>
              <p className="text-sm text-muted-foreground mt-1">Years Teaching</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-foreground">500+</p>
              <p className="text-sm text-muted-foreground mt-1">Hours Certified</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-foreground">2000+</p>
              <p className="text-sm text-muted-foreground mt-1">Students Guided</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
