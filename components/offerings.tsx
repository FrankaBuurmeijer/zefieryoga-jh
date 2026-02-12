import Image from "next/image"
import { Feather, Leaf, Sun } from "lucide-react"

const offerings = [
  {
    icon: Feather,
    title: "Aerial Restorative Yoga",
    description:
      "Experience the unique sensation of being cradled in a silk hammock while your body releases tension through supported, gravity-assisted postures. Perfect for decompressing the spine, opening the hips, and calming the nervous system.",
    features: [
      "Spinal decompression",
      "Deep hip opening",
      "Nervous system regulation",
      "Full body support",
    ],
  },
  {
    icon: Leaf,
    title: "Restorative Yoga",
    description:
      "Settle into deeply supported floor-based postures using bolsters, blankets, and blocks. Each pose is held for extended periods, allowing your body to soften and your mind to quieten. Includes guided meditation to close each session.",
    features: [
      "Extended supported holds",
      "Prop-supported comfort",
      "Guided meditation",
      "Stress release",
    ],
  },
  {
    icon: Sun,
    title: "Private Sessions & Workshops",
    description:
      "Tailored one-on-one sessions or small group workshops designed around your specific needs. Whether you are recovering from injury, managing stress, or deepening your practice, these sessions offer personalised attention and care.",
    features: [
      "Personalised approach",
      "Injury-sensitive options",
      "Small group workshops",
      "Corporate wellness",
    ],
  },
]

export function Offerings() {
  return (
    <section id="offerings" className="py-24 md:py-32 px-6 bg-card">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            What We Offer
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-foreground text-balance">
            Our Offerings
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {offerings.map((offering) => (
            <div
              key={offering.title}
              className="rounded-sm border border-border bg-background p-8 flex flex-col"
            >
              <offering.icon className="h-8 w-8 text-primary mb-6" />
              <h3 className="font-serif text-2xl text-foreground">
                {offering.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                {offering.description}
              </p>
              <ul className="mt-6 space-y-2">
                {offering.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 relative aspect-[21/9] rounded-sm overflow-hidden">
          <Image
            src="/images/restorative.jpg"
            alt="Restorative yoga class in a peaceful candlelit studio"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
