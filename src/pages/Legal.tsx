import { legal, type LegalDoc } from '../lib/legal'

/* Shared long-form legal document layout (Terms, Privacy). Content lives in
   lib/legal.ts as structured sections so both pages share one typographic system. */
function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <article className="mx-auto max-w-[760px] px-6 pt-32 pb-[clamp(4rem,9vw,7rem)] lg:pt-40">
      <header>
        <span className="eyebrow">{doc.kicker}</span>
        <h1 className="reveal mt-4 text-[clamp(2.1rem,4.4vw,3.2rem)]" style={{ lineHeight: 1.06, letterSpacing: '-0.03em' }}>{doc.title}</h1>
        <p className="mt-4 font-mono text-[0.78rem] uppercase tracking-[0.12em] text-ink-faint">Last updated {doc.updated}</p>
        {doc.intro.map((p, i) => (
          <p key={i} className="mt-5 text-[1.02rem] leading-relaxed text-ink-soft">{p}</p>
        ))}
      </header>

      <div className="mt-12 flex flex-col gap-11">
        {doc.sections.map((s, i) => (
          <section key={i}>
            <h2 className="text-[1.28rem] font-semibold tracking-tight text-ink">
              <span className="mr-2 font-mono text-[0.9rem] text-gold">{String(i + 1).padStart(2, '0')}</span>
              {s.h}
            </h2>
            {s.p?.map((p, j) => (
              <p key={j} className="mt-4 text-[0.98rem] leading-relaxed text-ink-soft">{p}</p>
            ))}
            {s.list && (
              <ul className="mt-4 flex flex-col gap-2.5">
                {s.list.map((li, j) => (
                  <li key={j} className="flex gap-2.5 text-[0.96rem] leading-relaxed text-ink-soft">
                    <span className="mt-2 h-1 w-1 flex-none rounded-full bg-gold" />
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      <p className="mt-14 border-t border-hairline pt-8 text-[0.9rem] text-ink-soft">
        Questions about this document? Email{' '}
        <a href={`mailto:${legal.contactEmail}`} className="text-gold-link underline underline-offset-2">{legal.contactEmail}</a>.
      </p>
    </article>
  )
}

export function Terms() { return <LegalPage doc={legal.terms} /> }
export function Privacy() { return <LegalPage doc={legal.privacy} /> }
