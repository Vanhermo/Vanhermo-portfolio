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
    'Cisco — CCNA I: Introduction to Networks',
    'Cisco — CCNA II: Switching, Routing and Wireless Essentials (In Progress)',
    'Cisco — Introduction to Cybersecurity',
    'Cisco — Cybersecurity Fundamentals (In Progress)',
    'Cisco — Ethical Hacker (In progress)',
    'Oracle — Java Fundamentals & Java Programming',
  ]
  
  const verifiedBadges = [
    {
      name: 'Introduction to Cybersecurity',
      badgeImage:
        'https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/linkedin_thumb_I2CS__1_.png',
      verifyUrl:
        'https://www.credly.com/badges/765f3596-47ea-417a-a3dc-46f4602883f0/public_url',
    },
    {
      name: 'CCNA: Introduction to Networks',
      badgeImage:
        'https://images.credly.com/images/70d71df5-f3dc-4380-9b9d-f22513a70417/linkedin_thumb_CCNAITN__1_.png',
      verifyUrl:
        'https://www.credly.com/badges/33f48604-3015-4195-88c4-f232a070089c/public_url',
    },
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
          <ul className="flex flex-col gap-3 mb-8">
            {certifications.map((cert) => (
              <li
                key={cert}
                className="font-body text-charcoal/70 text-sm border-l-2 border-sage/40 pl-4"
              >
                {cert}
              </li>
            ))}
          </ul>

          <h4 className="font-heading text-sm text-sage uppercase tracking-widest mb-4">
            Verified Credentials
          </h4>
          <div className="grid grid-cols-2 gap-4">
            {verifiedBadges.map((badge) => (
              <a
                key={badge.name}
                href={badge.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 bg-surface/60 border border-charcoal/10 dark:border-charcoal/25 rounded-2xl p-4 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <img
                  src={badge.badgeImage}
                  alt={`${badge.name} badge`}
                  className="w-16 h-16 object-contain"
                />
                <p className="font-body text-xs text-charcoal text-center">
                  {badge.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills