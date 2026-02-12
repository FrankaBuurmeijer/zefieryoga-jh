import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Intro } from "@/components/intro"
import { About } from "@/components/about"
import { Classes } from "@/components/classes"
import { Offerings } from "@/components/offerings"
import { Reviews } from "@/components/reviews"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <About />
        <Classes />
        <Offerings />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
