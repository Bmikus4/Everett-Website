import { CalendarCheck, Clock, MapPin, ShieldCheck } from '@phosphor-icons/react'
import { hero } from '../lib/content'

const ICONS: Record<string, typeof MapPin> = {
  sit: CalendarCheck,
  metro: MapPin,
  consent: ShieldCheck,
  hours: Clock,
}

// Sits directly under the hero. Plain, checkable promises with quiet gold icons.
export function TrustStrip() {
  return (
    <div className="border-y border-hairline bg-sunken">
      <div className="mx-auto grid max-w-[1240px] grid-cols-2 divide-x divide-y divide-hairline px-0 sm:grid-cols-4 sm:divide-y-0">
        {hero.trust.map((t) => {
          const Icon = ICONS[t.icon] ?? ShieldCheck
          return (
            <div key={t.label} className="flex items-center justify-center gap-3 px-4 py-6 sm:py-7">
              <Icon size={20} weight="duotone" className="flex-none text-gold" />
              <span className="text-[0.9rem] font-medium tracking-tight text-ink">{t.label}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
