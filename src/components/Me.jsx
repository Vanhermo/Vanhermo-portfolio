import heroPhoto from '../assets/googleEmbajador.JPG'

function Me() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-20 bg-cream">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-6xl mx-auto">
        <div>
          <p className="font-body text-sage text-sm md:text-base uppercase tracking-widest mb-4">
            Computer Science & Computational Research
          </p>

          <h1 className="font-heading text-4xl md:text-5xl font-semibold leading-tight text-rose-dark">
            Claudia Vanessa
            <br />
            Hermosillo Diaz
          </h1>

          <p className="font-body text-charcoal/70 text-lg md:text-xl mt-6 max-w-xl leading-relaxed">
            I work inside existing research codebases — translating computational
            methods in physics-based simulation and autonomous systems into working,
            GPU-accelerated implementations. Currently exploring computational
            biophysics, autonomous systems, and applied AI.
          </p>  

          
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-80 h-80 md:w-[420px] md:h-[420px]">
            <div className="absolute inset-0 bg-rose/20 rounded-[40%_60%_60%_40%/60%_30%_70%_40%]" />
            <img
              src={heroPhoto}
              alt="Claudia Vanessa Hermosillo Diaz"
              className="relative w-full h-full object-cover rounded-[40%_60%_60%_40%/60%_30%_70%_40%] border-4 border-white shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Me