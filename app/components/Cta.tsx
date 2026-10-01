import { ContactButton } from './ContactForm'
import { ArrowRightIcon } from './icons'

export default function Cta() {
  return (
    <div id="contact" style={{ background: '#04342C' }}>
      <div
        className="flex flex-col gap-6 md:flex-row md:justify-between md:items-center px-5 md:px-[48px] py-[60px]"
        style={{ maxWidth: 1100, margin: '0 auto',
      }}>
        <div>
          <h2 style={{ fontSize: 28, fontWeight: 600, color: '#80D4B8', letterSpacing: -0.5, marginBottom: 10 }}>
            Have an idea? Let&#39;s talk.
          </h2>
          <p style={{ fontSize: 14, color: '#45BC97', lineHeight: 1.7, maxWidth: 420 }}>
            We&#39;re open to early conversations — no deck required. What matters is a solid idea and a founder who is serious about building something real in Indonesia.
          </p>
        </div>
        <ContactButton className="inline-flex min-h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-control bg-brand-400 px-7 text-sm font-bold text-brand-900 hover:bg-brand-200">
          Get in touch <ArrowRightIcon size={16} />
        </ContactButton>
      </div>
    </div>
  )
}
