function ResearchExperience() {
  const research = [
    {
      title: 'Computational Biomolecular Research',
      org: 'Next Gen Scientist Program, Tec de Monterrey',
      role: 'Research Member — Computational/Technical Support',
      period: 'April 2025 – June 2026',
      points: [
        'Contributed to an ongoing project modeling RNA and biomolecular interactions through Brownian dynamics simulation.',
        'Studied and debugged an existing C-based simulation to understand the team\'s computational methodology, then translated selected components to CUDA under the lead researcher\'s guidance to enable GPU acceleration.',
        'Worked directly with force-calculation components, including bonding, flexibility, torsion, and Watson-Crick interaction terms.',
        'Presented project progress at the program\'s inaugural research encounter.',
      ],
    },
    {
      title: 'Autonomous Robotics Research',
      org: 'Next Gen Scientist Program, Tec de Monterrey',
      role: 'Co-Founding Research Member',
      period: 'Ongoing',
      points: [
        'Co-founded this research project with a student team, proposing the initial project focus and scope under faculty supervision.',
        'Contributing to navigation and hardware-level optimization on an NVIDIA Jetson Orin Nano platform.',
      ],
    },
  ]

  return (
    <section id="research" className="px-6 md:px-20 py-24 bg-cream">
      <p className="font-body text-sage text-sm uppercase tracking-widest mb-3">
        Research
      </p>
      <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal mb-12">
        Research Experience
      </h2>

      <div className="flex flex-col gap-10">
        {research.map((item) => (
          <div
            key={item.title}
            className="bg-surface/60 border border-charcoal/10 dark:border-charcoal/25 rounded-3xl p-8"
          >
            <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
              <h3 className="font-heading text-2xl text-charcoal">
                {item.title}
              </h3>
              <span className="font-body text-xs text-charcoal/50">
                {item.period}
              </span>
            </div>
            <p className="font-body text-rose-dark text-sm mb-1">{item.org}</p>
            <p className="font-body text-charcoal/50 text-sm italic mb-4">
              {item.role}
            </p>
            <ul className="flex flex-col gap-2">
              {item.points.map((point) => (
                <li
                  key={point}
                  className="font-body text-charcoal/70 leading-relaxed pl-4 border-l-2 border-sage/40"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ResearchExperience