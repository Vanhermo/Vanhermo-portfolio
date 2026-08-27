import { useForm, ValidationError } from '@formspree/react'

function Contact() {
  const [state, handleSubmit] = useForm('xzepwlkj')

  return (
    <section id="contact" className="px-6 md:px-20 py-24 bg-cream">
      <p className="font-body text-sage text-sm uppercase tracking-widest mb-3">
        Let's Talk
      </p>
      <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal mb-6">
        Get in Touch
      </h2>
      <p className="font-body text-charcoal/70 max-w-lg mb-10 leading-relaxed">
        Whether it's about research collaboration, an opportunity, or just to
        connect — I'd love to hear from you.
      </p>

      {state.succeeded ? (
        <p className="font-body text-sage text-lg">
          Thanks — I'll get back to you soon!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-lg flex flex-col gap-5">
          {/* Honeypot — hidden from real visitors, bots often fill every field */}
          <input
            type="text"
            name="company"
            tabIndex="-1"
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div>
            <label className="font-body text-sm text-charcoal/70 block mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              maxLength={100}
              className="w-full font-body bg-surface/60 border border-charcoal/15 rounded-xl px-4 py-3 focus:outline-none focus:border-rose"
            />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
              className="font-body text-rose-dark text-xs mt-1"
            />
          </div>

          <div>
            <label className="font-body text-sm text-charcoal/70 block mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              maxLength={200}
              className="w-full font-body bg-surface/60 border border-charcoal/15 rounded-xl px-4 py-3 focus:outline-none focus:border-rose"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="font-body text-rose-dark text-xs mt-1"
            />
          </div>

          <div>
            <label className="font-body text-sm text-charcoal/70 block mb-1">
              Message
            </label>
            <textarea
              name="message"
              required
              maxLength={2000}
              rows={5}
              className="w-full font-body bg-surface/60 border border-charcoal/15 rounded-xl px-4 py-3 focus:outline-none focus:border-rose resize-none"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="font-body text-rose-dark text-xs mt-1"
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="bg-rose text-cream px-6 py-3 rounded-full font-body font-medium hover:bg-rose-dark transition-colors disabled:opacity-50"
          >
            {state.submitting ? 'Sending…' : 'Send Message'}
          </button>

          <ValidationError
            errors={state.errors}
            className="font-body text-rose-dark text-sm"
          />
        </form>
      )}
    </section>
  )
}

export default Contact