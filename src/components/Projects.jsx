import Reveal from './Reveal'
import TiltCard from './TiltCard'

function Projects() {
  const projects = [
    {
      title: 'NAVIA',
      subtitle: 'iOS Personal Safety App',
      description:
        'Building an iOS app to support urban mobility safety using Swift, Combine, and an MVVM architecture. Designing real-time geospatial routing with the Mapbox SDK — including geofencing and safety-state logic — plus user-validation and anti-tamper safeguards to protect account integrity.',
      stack: ['Swift', 'Combine', 'MVVM', 'Mapbox SDK'],
      status: 'In Development',
      repoUrl: null,
    },
    {
      title: 'AI for Mexican Sign Language',
      subtitle: 'Vision-based real-time translation',
      description:
        'Developing a vision-based model for real-time LSM translation using MediaPipe for pose/hand landmark extraction and an LSTM model built with TensorFlow. Built in collaboration with a fellow student.',
      stack: ['Python', 'MediaPipe', 'LSTM', 'TensorFlow'],
      status: 'In Development',
      repoUrl: null,
      collaborator: true,
    },
    {
      title: 'Autonomous Library Robot',
      subtitle: 'Next Gen Scientist — NVIDIA Jetson Orin Nano',
      description:
        'Navigation system with hardware-level optimization on the Jetson platform, plus secure communication protocols to keep edge-device and database data in sync.',
      stack: ['Jetson SDK', 'Python', 'Secure Comms'],
      status: 'In Development',
      repoUrl: null,
    },
    {
      title: 'CESVI Web App',
      subtitle: 'Backend Development — School Project',
      description:
        'Built the backend using Laravel — data models, business logic, and server-side functionality for the application.',
      stack: ['Laravel', 'PHP', 'MySQL'],
      status: 'Completed',
      repoUrl: null,
    },
  ]

  return (
    <section id="projects" className="px-6 md:px-20 py-24 bg-cream">
      <p className="font-body text-sage text-sm uppercase tracking-widest mb-3">
        Selected Work
      </p>
      <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 100}>
            <TiltCard className="bg-surface/60 border border-charcoal/10 dark:border-charcoal/25 rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-heading text-2xl text-charcoal mb-2">
                  {project.title}
                </h3>
                <span className="inline-block font-body text-xs text-sage bg-sage/10 dark:bg-sage/20 px-3 py-1 rounded-full mb-3">
                  {project.status}
                </span>
              </div>

              <p className="font-body text-rose-dark text-sm mb-1">
                {project.subtitle}
              </p>

              {project.collaborator && (
                <p className="font-body text-xs text-charcoal/50 italic mb-3">
                  Collaborative project
                </p>
              )}

              <p className="font-body text-charcoal/70 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-body text-xs text-charcoal/60 dark:text-charcoal/80 border border-charcoal/15 dark:border-charcoal/30 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 font-body text-sm text-rose-dark underline underline-offset-4"
                >
                  View Code →
                </a>
              )}
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Projects