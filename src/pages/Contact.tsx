import { useState } from 'react'
import { Check, CheckCircle } from '@phosphor-icons/react'
import { contactPage, footer } from '../lib/content'

const label = 'mb-1.5 block text-[0.8rem] font-medium text-ink-soft'
const field =
  'w-full rounded-xl border border-hairline bg-paper px-3.5 py-2.5 text-[0.95rem] text-ink placeholder:text-ink-faint focus:border-gold focus:outline-none focus:ring-2 focus:ring-[color-mix(in_srgb,var(--color-gold)_35%,transparent)]'

const WEBHOOK = 'https://samuraisolutions.app.n8n.cloud/webhook/ouro-praxis-contact'

export function Contact() {
  const c = contactPage
  const [focus, setFocus] = useState('reactivation')
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const payload = {
      first: data.get('first'), last: data.get('last'), company: data.get('company'),
      mobile: data.get('mobile'), email: data.get('email'), metro: data.get('metro'),
      crm: data.get('crm'), revenue: data.get('revenue'), spend: data.get('spend'),
      focus, notes: data.get('notes'),
    }
    setSending(true)
    setError(false)
    try {
      const res = await fetch(WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error(String(res.status))
      setSent(true)
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <header className="mx-auto max-w-[1240px] px-6 pt-32 pb-10 lg:pt-40">
        <span className="eyebrow">{c.kicker}</span>
        <h1 className="reveal mt-4 text-[clamp(2.3rem,5vw,3.7rem)]" style={{ lineHeight: 1.04, letterSpacing: '-0.03em' }}>{c.headline}</h1>
        <p className="reveal mt-6 max-w-[60ch] text-[1.1rem] text-ink-soft">{c.sub}</p>
      </header>

      <section className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 px-6 pb-[clamp(4rem,9vw,7rem)] lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* rails */}
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink-faint">{c.whatHappens.title}</h2>
            <ul className="mt-6 flex flex-col gap-6">
              {c.whatHappens.items.map((it) => (
                <li key={it.h} className="flex gap-3">
                  <Check size={18} weight="bold" className="mt-0.5 flex-none text-gold" />
                  <div>
                    <h3 className="text-[0.98rem] font-semibold text-ink">{it.h}</h3>
                    <p className="mt-1 text-[0.9rem] leading-relaxed text-ink-soft">{it.b}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[var(--radius-card)] border border-hairline bg-sunken p-6">
            <h2 className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink-faint">{c.beforeYouSend.title}</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {c.beforeYouSend.items.map((it) => (
                <li key={it} className="flex gap-2.5 text-[0.9rem] text-ink-soft">
                  <Check size={15} weight="bold" className="mt-1 flex-none text-gold" />{it}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* form */}
        <div className="rounded-[var(--radius-card)] border border-hairline bg-raised p-7 shadow-[var(--shadow-soft)] sm:p-9">
          {sent ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
              <CheckCircle size={52} weight="duotone" className="text-gold" />
              <h2 className="mt-5 text-[1.6rem] font-semibold tracking-tight text-ink">Request on its way.</h2>
              <p className="mt-3 max-w-[38ch] text-[0.98rem] text-ink-soft">
                Your email app should have opened with the details. Send it over and we will confirm your metro is open, then send calendar options within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <h2 className="text-[1.4rem] font-semibold tracking-tight text-ink">{c.form.title}</h2>
              <p className="mt-2 text-[0.92rem] text-ink-soft">{c.form.sub}</p>

              <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div><label className={label} htmlFor="first">First name</label><input className={field} id="first" name="first" required autoComplete="given-name" /></div>
                <div><label className={label} htmlFor="last">Last name</label><input className={field} id="last" name="last" required autoComplete="family-name" /></div>
                <div className="sm:col-span-2"><label className={label} htmlFor="company">Company name</label><input className={field} id="company" name="company" required autoComplete="organization" /></div>
                <div><label className={label} htmlFor="mobile">Mobile number</label><input className={field} id="mobile" name="mobile" type="tel" autoComplete="tel" /></div>
                <div><label className={label} htmlFor="email">Email</label><input className={field} id="email" name="email" type="email" required autoComplete="email" /></div>
                <div><label className={label} htmlFor="metro">Metro / city</label><input className={field} id="metro" name="metro" placeholder="e.g. Columbus, OH" /></div>
                <div>
                  <label className={label} htmlFor="crm">CRM you run</label>
                  <select className={field} id="crm" name="crm" defaultValue="">
                    <option value="" disabled>Select one</option>
                    {c.form.crmOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label className={label} htmlFor="revenue">Approximate annual revenue</label>
                  <select className={field} id="revenue" name="revenue" defaultValue="">
                    <option value="" disabled>Select range</option>
                    {c.form.revenueRanges.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label className={label} htmlFor="spend">Monthly lead / ad spend</label>
                  <select className={field} id="spend" name="spend" defaultValue="">
                    <option value="" disabled>Select range</option>
                    {c.form.spendRanges.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              </div>

              <fieldset className="mt-6">
                <legend className={label}>{c.form.focusLabel}</legend>
                <div className="mt-1 flex flex-col gap-2.5">
                  {c.form.focusOptions.map((o) => {
                    const active = focus === o.v
                    return (
                      <label
                        key={o.v}
                        className="flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 transition-colors"
                        style={{
                          borderColor: active ? 'color-mix(in srgb, var(--color-gold) 55%, var(--color-hairline))' : 'var(--color-hairline)',
                          background: active ? 'var(--color-gold-tint)' : 'transparent',
                        }}
                      >
                        <input type="radio" name="focus" value={o.v} checked={active} onChange={() => setFocus(o.v)} className="mt-1 accent-[var(--color-gold)]" />
                        <span>
                          <span className="text-[0.95rem] font-semibold text-ink">{o.label}</span>
                          <span className="ml-1.5 text-[0.85rem] text-ink-soft">{o.note}</span>
                        </span>
                      </label>
                    )
                  })}
                </div>
              </fieldset>

              <div className="mt-6">
                <label className={label} htmlFor="notes">Anything else we should know? (optional)</label>
                <textarea className={`${field} min-h-[92px] resize-y`} id="notes" name="notes" placeholder="e.g. about 3,000 old demo-no-sales in MarketSharp nobody has touched in two years" />
              </div>

              <button type="submit" disabled={sending} className="btn-gold mt-7 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-[0.98rem] font-medium disabled:opacity-70">
                {sending ? 'Sending...' : c.form.submit}
              </button>
              {error && (
                <p className="mt-4 text-center text-[0.82rem] text-ink" role="alert">
                  Something went wrong sending that. Email us directly at{' '}
                  <a href={`mailto:${footer.email}`} className="text-gold-link underline underline-offset-2">{footer.email}</a>.
                </p>
              )}
              <p className="mt-4 text-center text-[0.78rem] text-ink-faint">{c.form.footnote}</p>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
