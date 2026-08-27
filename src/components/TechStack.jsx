import {
  SiOpenjdk,
  SiSwift,
  SiPython,
  SiPhp,
  SiCplusplus,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiLaravel,
  SiDjango,
  SiMysql,
  SiGit,
  SiGithub,
  SiXcode,
  SiKalilinux,
  SiLinux,
  SiNvidia,
} from 'react-icons/si'

function TechStack() {
  const languages = [
  { name: 'Java', icon: SiOpenjdk },
  { name: 'Swift', icon: SiSwift },
  { name: 'Python', icon: SiPython },
  { name: 'PHP', icon: SiPhp },
  { name: 'C++ / CUDA', icon: SiCplusplus },
  { name: 'SQL', icon: SiMysql },
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss },
  { name: 'JavaScript', icon: SiJavascript },
]

  const frameworksAndTools = [
    { name: 'Laravel', icon: SiLaravel },
    { name: 'Django', icon: SiDjango },
    { name: 'Xcode', icon: SiXcode },
    { name: 'Git', icon: SiGit },
    { name: 'GitHub', icon: SiGithub },
    { name: 'Linux', icon: SiLinux },
    { name: 'Kali Linux', icon: SiKalilinux },
    { name: 'NVIDIA Jetson', icon: SiNvidia },
  ]

  const specializedSkills = [
    'UIKit', 'Combine', 'MVVM', 'OOP',
    'Mapbox SDK', 'Core Location', 'Geofencing',
    'GPU Computing', 'Brownian Dynamics',
    'REST APIs', 'JSON / Codable',
    'FRC/FTC Control Systems',
    'Network Fundamentals (CCNA 1)',
  ]

  return (
    <section className="px-6 md:px-20 py-24 bg-cream">
      <p className="font-body text-sage text-sm uppercase tracking-widest mb-3">
        My Toolkit
      </p>
      <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal mb-12">
        Tools & Languages
      </h2>

      <div className="mb-10">
        <h3 className="font-heading text-lg text-rose-dark mb-4">Languages</h3>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
          {languages.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-2 bg-surface/60 border border-charcoal/10 dark:border-charcoal/25 rounded-2xl p-5 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
              <Icon className="text-2xl text-rose-dark" />
              <span className="font-body text-xs text-charcoal/70 text-center">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <h3 className="font-heading text-lg text-rose-dark mb-4">
          Frameworks & Tools
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
          {frameworksAndTools.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-2 bg-surface/60 border border-charcoal/10 dark:border-charcoal/25 rounded-2xl p-5 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
              <Icon className="text-2xl text-rose-dark" />
              <span className="font-body text-xs text-charcoal/70 text-center">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-heading text-lg text-rose-dark mb-4">
          Specialized Skills
        </h3>
        <div className="flex flex-wrap gap-2">
          {specializedSkills.map((skill) => (
            <span
              key={skill}
              className="font-body text-sm text-charcoal/70 bg-surface/60 border border-charcoal/10 px-4 py-2 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack