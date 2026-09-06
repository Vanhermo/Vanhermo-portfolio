import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi'

function Footer() {
  return (
    <footer className="px-6 md:px-20 py-10 border-t border-charcoal/10 flex flex-col sm:flex-row justify-between items-center gap-4">
      <p className="font-body text-sm text-charcoal/50">
        © {new Date().getFullYear()} Claudia Vanessa Hermosillo Diaz
      </p>

      <div className="flex gap-4">
        <a
          href="mailto:vanessahermosillod@gmail.com"
          aria-label="Email"
          className="text-charcoal/50 hover:text-rose-dark transition-colors"
        >
          <FiMail />
        </a>

        <a
          href="https://linkedin.com/in/claudia-vanessa-hermosillo-diaz-779957334"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-charcoal/50 hover:text-rose-dark transition-colors"
        >
          <FiLinkedin />
        </a>

        <a
          href="https://github.com/Vanhermo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-charcoal/50 hover:text-rose-dark transition-colors"
        >
          <FiGithub />
        </a>
      </div>
    </footer>
  )
}

export default Footer