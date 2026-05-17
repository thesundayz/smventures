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
        <button style={{
          background: '#0E8F6A', color: '#E1F5EE', padding: '14px 28px',
          borderRadius: 9, fontSize: 14, fontWeight: 500, border: 'none', cursor: 'pointer',
          fontFamily: 'inherit', whiteSpace: 'nowrap' as const,
          display: 'flex', alignItems: 'center', gap: 7, flexShrink: 0,
        }}>
          Get in touch <i className="ti ti-arrow-right" />
        </button>
      </div>
    </div>
  )
}
