function Highlights() {
  const stats = [
    { value: '60+', label: 'Students mentored in STEM outreach' },
    { value: '300+', label: 'Dandelions mentored — ILO, EGS 6th Gen' },
    { value: 'Silver Dandelion', label: 'EGS Leadership, top 20% of generation' },
    { value: '1st Generation', label: 'Estudiante Embajadora de Google 2026, México' },
  ]

  return (
    <section className="px-6 md:px-20 py-16 bg-cream">
      <div className="flex flex-wrap md:flex-nowrap justify-center gap-8 max-w-6xl mx-auto text-center">
        {stats.map((stat) => (
          <div key={stat.label} className="flex-1 min-w-[200px]">
            <p className="font-heading text-xl md:text-2xl text-rose-dark mb-2 leading-tight">
              {stat.value}
            </p>
            <p className="font-body text-sm text-charcoal/60 leading-snug">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Highlights