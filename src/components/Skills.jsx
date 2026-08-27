function Skills() {
  const skillGroups = [
    {
      category: 'Cybersecurity & Networking',
      items: [
        'Technical Compliance Auditing',
        'System Risk Assessment',
        'Secure Routing Protocols',
        'Routing & Switching (CCNA 1)',
      ],
    },
    {
      category: 'Programming',
      items: ['Java', 'Python', 'C++', 'CUDA', 'Swift'],
    },
    {
      category: 'Tools & Platforms',
      items: ['Linux (Ubuntu/Jetson)', 'Git', 'TensorFlow Lite', 'Jetson SDK'],
    },
    {
      category: 'Robotics & Controls',
      items: ['RoadRunner', 'MeepMeep', 'PID/Feedforward Control', 'Odometry-Based Path Planning'],
    },
    {
      category: 'Applied AI',
      items: ['Google Gemini', 'MediaPipe', 'LSTM (TensorFlow)'],
    },
  ]

  const certifications = [
    'Cisco — CCNA 1: Introduction to Networks',
    'Cisco — Introduction to Cybersecurity',
    'Cisco — Cybersecurity Fundamentals (In Progress)',
    'Oracle — Java Fundamentals & Java Programming',
  ]

  return (
    <section className="px-6 md:px-20 py-24 bg-cream">
      <p className="font-body text-sage text-sm uppercase tracking-widest mb-3">
        What I Work With
      </p>
      <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal mb-12">
        Skills & Certifications
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-8">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="font-heading text-lg text-rose-dark mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-body text-sm text-charcoal/70 dark:text-charcoal/90 bg-surface/60 border border-charcoal/10 dark:border-charcoal/25 px-4 py-2 rounded-full"
                    >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="font-heading text-lg text-rose-dark mb-3">
            Certifications
          </h3>
          <ul className="flex flex-col gap-3">
            {certifications.map((cert) => (
              <li
                key={cert}
                className="font-body text-charcoal/70 text-sm border-l-2 border-sage/40 pl-4"
              >
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills