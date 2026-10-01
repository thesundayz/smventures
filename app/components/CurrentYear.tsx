'use client'

import { useSyncExternalStore } from 'react'

const subscribe = () => () => {}

/** The prerendered HTML carries the build year; after hydration the browser shows the current year. */
export default function CurrentYear({ buildYear }: { buildYear: number }) {
  return useSyncExternalStore(subscribe, () => new Date().getFullYear(), () => buildYear)
}
