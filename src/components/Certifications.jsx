function Certifications() {
  const certifications = [
    {
      name: 'Introduction to Cybersecurity',
      issuer: 'Cisco',
      badgeImage:
        'https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/linkedin_thumb_I2CS__1_.png',
      verifyUrl:
        'https://www.credly.com/badges/765f3596-47ea-417a-a3dc-46f4602883f0/public_url',
    },
    {
      name: 'CCNA: Introduction to Networks',
      issuer: 'Cisco',
      badgeImage:
        'https://images.credly.com/images/70d71df5-f3dc-4380-9b9d-f22513a70417/linkedin_thumb_CCNAITN__1_.png',
      verifyUrl:
        'https://www.credly.com/badges/33f48604-3015-4195-88c4-f232a070089c/public_url',
    },
  ]

  return (
    <section className="px-6 md:px-20 py-24 bg-cream">
      <p className="font-body text-sage text-sm uppercase tracking-widest mb-3">
        Verified Credentials
      </p>
      <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal mb-8">
        Certifications
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-6">
        {certifications.map((cert) => (
          <a
            key={cert.name}
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 bg-surface/60 border border-charcoal/10 dark:border-charcoal/25 rounded-2xl p-5 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
          >
            <img
              src={cert.badgeImage}
              alt={`${cert.name} badge`}
              className="w-20 h-20 object-contain"
            />
            <div className="text-center">
              <p className="font-body text-xs font-medium text-charcoal">
                {cert.name}
              </p>
              <p className="font-body text-xs text-charcoal/50">
                {cert.issuer}
              </p>
            </div>
          </a>
        ))}
      </div>

      <p className="font-body text-sm text-charcoal/50 italic">
        Also completed: Cisco Cybersecurity Fundamentals (in progress), CCNA 2 (in progress),
        Oracle Java Fundamentals & Programming, and Google Init.g — Software Engineering Foundations.
      </p>
    </section>
  )
}

export default Certifications