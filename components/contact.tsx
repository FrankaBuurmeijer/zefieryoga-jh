"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Instagram } from "lucide-react"

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-card">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Get in Touch
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-foreground text-balance">
            Ready to Begin?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Whether you would like to book a class, enquire about a private
            session, or simply have a question, I would love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          {/* Contact details */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="font-serif text-xl text-foreground mb-4">
                Contact Details
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href="mailto:hello@serenityyoga.com"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      hello@serenityyoga.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a
                      href="tel:+441234567890"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      +44 1234 567 890
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Studio</p>
                    <p className="text-foreground">
                      12 Willow Lane
                      <br />
                      Wellness Quarter
                      <br />
                      Bristol, BS1 4AH
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Instagram className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Instagram</p>
                    <a
                      href="https://instagram.com/serenityyoga"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      @serenityyoga
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-xl text-foreground mb-2">
                Studio Hours
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-foreground">09:00 - 21:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-foreground">08:00 - 14:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-foreground">Closed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="rounded-full bg-primary/10 p-4 mb-6">
                  <Send className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-2">
                  Message Sent
                </h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. I will get back to you within 24
                  hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setFormState({ name: "", email: "", subject: "", message: "" })
                  }}
                  className="mt-6 text-sm text-primary hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-muted-foreground mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full rounded-sm border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-muted-foreground mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full rounded-sm border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm text-muted-foreground mb-1.5"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    required
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                    className="w-full rounded-sm border border-border bg-background px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="book-class">Book a Public Class</option>
                    <option value="private-session">
                      Private Session Enquiry
                    </option>
                    <option value="workshop">Workshop Information</option>
                    <option value="corporate">Corporate Wellness</option>
                    <option value="general">General Enquiry</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-muted-foreground mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full rounded-sm border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="Tell me about what you are looking for..."
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-sm bg-primary px-8 py-3 text-sm uppercase tracking-widest text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
