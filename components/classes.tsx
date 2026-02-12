import { Clock, Users, MapPin } from "lucide-react"

const classes = [
  {
    day: "Monday",
    time: "18:30 - 20:00",
    title: "Aerial Restorative Flow",
    description:
      "Gentle supported postures using the aerial hammock, designed to decompress the spine and release deep tension.",
    spots: "8 spots",
    location: "Main Studio",
    level: "All Levels",
  },
  {
    day: "Wednesday",
    time: "10:00 - 11:30",
    title: "Restorative Yoga & Meditation",
    description:
      "A floor-based practice with bolsters, blankets, and guided meditation to calm the nervous system and restore balance.",
    spots: "12 spots",
    location: "Main Studio",
    level: "All Levels",
  },
  {
    day: "Thursday",
    time: "19:00 - 20:30",
    title: "Aerial Restorative Deep Rest",
    description:
      "An extended aerial session focused on longer holds and deep surrender, finishing with a guided yoga nidra meditation.",
    spots: "8 spots",
    location: "Main Studio",
    level: "All Levels",
  },
  {
    day: "Saturday",
    time: "09:30 - 11:00",
    title: "Weekend Restorative & Breath",
    description:
      "Start your weekend with gentle restorative postures, breathwork, and a soothing guided meditation.",
    spots: "12 spots",
    location: "Main Studio",
    level: "All Levels",
  },
]

export function Classes() {
  return (
    <section id="classes" className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Weekly Schedule
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-foreground text-balance">
            Upcoming Public Classes
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            All classes are open for public booking. Reserve your spot to
            guarantee your place and your hammock.
          </p>
        </div>

        <div className="grid gap-4">
          {classes.map((cls) => (
            <div
              key={cls.title}
              className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 rounded-sm border border-border bg-card p-6 md:p-8 hover:border-primary/30 transition-colors"
            >
              <div className="md:w-32 shrink-0">
                <p className="font-serif text-xl text-foreground">{cls.day}</p>
                <p className="text-sm text-muted-foreground">{cls.time}</p>
              </div>

              <div className="flex-1">
                <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">
                  {cls.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {cls.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground md:shrink-0">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  90 min
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="h-4 w-4" />
                  {cls.spots}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  {cls.location}
                </span>
              </div>

              <a
                href="#contact"
                className="shrink-0 rounded-sm border border-primary px-5 py-2.5 text-sm uppercase tracking-widest text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-center"
              >
                Reserve
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
