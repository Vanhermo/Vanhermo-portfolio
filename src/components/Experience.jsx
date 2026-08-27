function Experience() {
  const experience = [
    {
  role: 'Robot Programmer (2022–2024); Inspector, Referee & Team Leader (2022–2026)',
  org: 'FIRST Robotics Competition (FRC) & Tech Challenge (FTC)',
  period: '2022 – 2026',
  description:
    'Built an autonomous scoring routine using RoadRunner for odometry-based path following, prototyping trajectories in MeepMeep before deployment. Trained a custom TensorFlow Lite object-detection model to identify scoring elements in real time, and implemented PID/feedforward control for smooth autonomous mechanisms. Later inspected electromechanical hardware and Java control software against competition rules, enforced regulations during live matches, and mentored new members in control systems programming.',
  repos: [
    { name: 'FRC-Swerve', url: 'https://github.com/frc6606/FRC-Swerve' },
    { name: 'ftc-2025', url: 'https://github.com/frc6606/ftc-2025' },
    { name: 'ftc-2024', url: 'https://github.com/frc6606/ftc-2024' },
    { name: 'FRC-2023', url: 'https://github.com/frc6606/FRC-2023' },
  ],
},
    {
    role: 'Estudiante Embajadora de Google 2026',
    org: 'Estudiantes Embajadores de Google 2026',
    period: '2026',
    description:
        'Selected for the inaugural cohort of Google\'s student ambassador program in Mexico, representing the university community and supporting outreach initiatives.',
    },
    {
      role: 'ILO Mentor',
      org: 'Eugenio Garza Sada Global Leadership Program — 6th Generation',
      period: '2026 – present',
      description:
        'Mentoring incoming students in the Individual Leadership Opportunity track, guiding their development within the program.',
    },
    {
      role: 'Dandelion',
      org: 'Eugenio Garza Sada Global Leadership Program (5th Gen)',
      period: '2025 – 2026',
      description:
        'Managed cross-functional initiatives aligning technical software features with global strategic frameworks (UN SDGs 5, 11, 16).',
    },
    {
      role: 'Backend Developer',
      org: 'CESVI Web App',
      period: 'School Project Feb-Jun 2026',
      description:
        'Built the backend using Laravel — data models, business logic, and server-side functionality for the application.',
    },
    
    
  ]

  return (
    <section id="experience" className="px-6 md:px-20 py-24 bg-cream">
      <p className="font-body text-sage text-sm uppercase tracking-widest mb-3">
        Where I've Worked
      </p>
      <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal mb-12">
        Experience & Leadership
      </h2>

      <div className="flex flex-col gap-10">
        {experience.map((item) => (
          <div
            key={item.role + item.org}
            className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 border-b border-charcoal/10 pb-8"
          >
            <p className="font-body text-sm text-charcoal/50 md:w-40 shrink-0">
              {item.period}
            </p>
            <div>
              <h3 className="font-heading text-xl text-charcoal">
                {item.role}
              </h3>
              <p className="font-body text-rose-dark text-sm mb-2">
                {item.org}
              </p>
              <p className="font-body text-charcoal/70 leading-relaxed">
                {item.description}
              </p>

              {item.repos && (
                <div className="flex flex-wrap gap-3 mt-4">
                  {item.repos.map((repo) => (
                    <a
                      key={repo.name}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-xs text-rose-dark border border-rose-dark/30 px-3 py-1.5 rounded-full hover:bg-rose-dark/10 transition-colors"
                    >
                      {repo.name} →
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience