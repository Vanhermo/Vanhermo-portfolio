function BeyondTech() {
  return (
    <section className="bg-surface/60 border border-charcoal/10 dark:border-charcoal/25 rounded-3xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <p className="font-body text-sage text-sm uppercase tracking-widest mb-3">
        Beyond the Screen
      </p>
      <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal mb-12">
        When I'm Not Coding
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-cream border border-charcoal/10 rounded-3xl p-8">
          <h3 className="font-heading text-2xl text-rose-dark mb-3">
            Realism Painting
          </h3>
          <p className="font-body text-charcoal/70 leading-relaxed">
            There's a strange overlap between debugging code and painting
            realism — both demand patience, close observation, and the
            willingness to redo something a dozen times until it actually
            looks right. It's where I go to slow down.
          </p>
        </div>

        <div className="bg-cream border border-charcoal/10 rounded-3xl p-8">
          <h3 className="font-heading text-2xl text-rose-dark mb-3">
            Language Learning
          </h3>
          <p className="font-body text-charcoal/70 leading-relaxed">
            Spanish natively, English fluently, and currently building German
            and French. I like languages for the same reason I like systems
            work — there's an underlying structure to learn, and then a
            lifetime of nuance on top of it.
          </p>
        </div>
      </div>
    </section>
  )
}

export default BeyondTech