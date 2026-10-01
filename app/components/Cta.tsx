// "Have an idea? Let's talk." on Hutan, with the button that opens the contact form.
import type { Dictionary } from '@/app/i18n'
import { ContactButton } from './ContactForm'
import { ArrowRightIcon } from './icons'
import { Container, buttonClass } from './ui'

export default function Cta({ t }: { t: Dictionary['about']['cta'] }) {
  return (
    <section id="contact" aria-labelledby="contact-cta-title" className="scroll-mt-20 bg-brand-900">
      <Container className="flex flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between md:py-16">
        <div>
          <h2 id="contact-cta-title" className="text-[28px] leading-tight font-extrabold tracking-[-0.02em] text-brand-200 md:text-[34px]">
            {t.title}
          </h2>
          <p className="mt-3 max-w-[52ch] text-brand-100">{t.text}</p>
        </div>
        <ContactButton className={`${buttonClass.onDarkPrimary} shrink-0`}>
          {t.button} <ArrowRightIcon size={16} />
        </ContactButton>
      </Container>
    </section>
  )
}
