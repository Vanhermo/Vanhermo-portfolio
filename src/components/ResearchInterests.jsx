function ResearchInterests() {
  const interests = [
  {
    title: 'Computational Biophysics & GPU Computing',
    description:
      'Translating physics-based simulation methods (Brownian dynamics, force-field calculations) into GPU-accelerated CUDA implementations.',
  },
  {
    title: 'Autonomous Systems & Robotics',
    description:
      'Navigation, hardware-level optimization, and control systems for autonomous platforms — from competition robotics to research-grade edge devices.',
  },
  {
    title: 'Applied Computer Vision & AI',
    description:
      'Vision-based models for real-world accessibility problems, from object detection to real-time sign language translation.',
  },
  ]

  return (
    <section className="px-6 md:px-20 pt-24 pb-8 bg-cream">
      <p className="font-body text-sage text-sm uppercase tracking-widest mb-3">
        What I'm Exploring
      </p>
      <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal mb-12">
        Research Interests
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {interests.map((item) => (
          <div key={item.title} className="border-t border-charcoal/15 pt-6">
            <h3 className="font-heading text-xl text-rose-dark mb-2">
              {item.title}
            </h3>
            <p className="font-body text-charcoal/70 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ResearchInterests