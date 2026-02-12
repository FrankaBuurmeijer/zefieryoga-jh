"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const reviews = [
  {
    name: "Sarah M.",
    text: "The aerial restorative class has completely changed my relationship with rest. I came in with chronic back pain and after just a few sessions, I felt a relief I hadn't experienced in years. The hammock support makes all the difference.",
    rating: 5,
  },
  {
    name: "James T.",
    text: "I was skeptical about meditation, but the way it is woven into the restorative practice makes it feel natural and effortless. I leave every class feeling like I have had a full night of sleep. Absolutely transformative.",
    rating: 5,
  },
  {
    name: "Elena K.",
    text: "As someone who struggles to slow down, these classes have been a revelation. The environment is so calm, the guidance is gentle yet clear, and I always feel held and safe. It is the highlight of my week.",
    rating: 5,
  },
  {
    name: "Michael R.",
    text: "I started coming after my physiotherapist recommended aerial restorative yoga for my posture issues. Not only has my posture improved, but I have also found a sense of inner peace I did not expect. Truly grateful.",
    rating: 5,
  },
  {
    name: "Priya D.",
    text: "The Saturday morning class is everything. Restorative postures, breathwork, and a beautiful meditation to close. It sets the tone for my entire weekend. I recommend it to everyone I know.",
    rating: 5,
  },
]

export function Reviews() {
  const [current, setCurrent] = useState(0)

  const prev = () =>
    setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1))
  const next = () =>
    setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1))

  return (
    <section id="reviews" className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Testimonials
        </p>
        <h2 className="font-serif text-3xl md:text-5xl font-light text-foreground text-balance">
          What Our Students Say
        </h2>

        <div className="mt-16 relative">
          <div className="flex items-center justify-center gap-1 mb-6">
            {Array.from({ length: reviews[current].rating }).map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-accent text-accent"
              />
            ))}
          </div>

          <blockquote className="font-serif text-xl md:text-2xl font-light text-foreground leading-relaxed italic">
            {`"${reviews[current].text}"`}
          </blockquote>

          <p className="mt-6 text-sm uppercase tracking-widest text-muted-foreground">
            {reviews[current].name}
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="rounded-full border border-border p-3 text-muted-foreground hover:border-primary hover:text-primary transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current
                      ? "w-8 bg-primary"
                      : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="rounded-full border border-border p-3 text-muted-foreground hover:border-primary hover:text-primary transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
