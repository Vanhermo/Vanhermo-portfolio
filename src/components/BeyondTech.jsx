import paintingPhoto from '../assets/beyond/painting.jpg'
import mentoringPhoto from '../assets/beyond/mentoring.jpg'
import roboticsPhoto from '../assets/beyond/robotics.jpg'
import languagesFoto from '../assets/beyond/languages.jpg'

function BeyondTech() {
  const items = [
    {
      title: 'Realism Painting',
      description:
        "There's a strange overlap between debugging code and painting realism — both demand patience, close observation, and the willingness to redo something a dozen times until it actually looks right. It's where I go to slow down.",
      photo: paintingPhoto,
    },
    {
      title: 'Language Learning',
      description:
        "Spanish natively, English fluently, and currently building German and French. I like languages for the same reason I like systems work — there's an underlying structure to learn, and then a lifetime of nuance on top of it.",
      photo: languagesFoto,
    },
    {
      title: 'Mentoring & Leadership',
      description:
        "Mentoring 320 incoming students through EGS has taught me as much as any technical project — how to explain something clearly, how to notice when someone's stuck before they say so, and how leadership is mostly just consistent showing up.",
      photo: mentoringPhoto,
    },
    {
      title: 'Robotics Competitions',
      description:
        "Competition floors are chaos in the best way — something breaks ten minutes before your match, and the whole team problem-solves under pressure together. It's where I first learned that good engineering is mostly good teamwork under a deadline.",
      photo: roboticsPhoto,
    },
  ]

  return (
    <section className="px-6 md:px-20 py-24 bg-cream">
      <p className="font-body text-sage text-sm uppercase tracking-widest mb-3">
        Beyond the Screen
      </p>
      <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal mb-12">
        When I'm Not Coding
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-surface/60 border border-charcoal/10 dark:border-charcoal/25 rounded-3xl overflow-hidden"
          >
            {item.photo && (
              <img
                src={item.photo}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-8">
              <h3 className="font-heading text-2xl text-rose-dark mb-3">
                {item.title}
              </h3>
              <p className="font-body text-charcoal/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BeyondTech