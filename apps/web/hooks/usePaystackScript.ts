import { useEffect, useState } from 'react'

/**
 * Dynamically injects the Paystack inline.js script and returns true once
 * `window.PaystackPop` is available. Safe to call multiple times — the
 * script is only appended once.
 */
export function usePaystackScript(): boolean {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // Already loaded (e.g. navigation back to the page)
    if (typeof window !== 'undefined' && (window as Window & { PaystackPop?: unknown }).PaystackPop) {
      setReady(true)
      return
    }

    // Avoid duplicate script tags
    if (document.querySelector('script[src*="paystack"]')) {
      // Script tag exists but onload hasn't fired yet — poll briefly
      const id = setInterval(() => {
        if ((window as Window & { PaystackPop?: unknown }).PaystackPop) {
          setReady(true)
          clearInterval(id)
        }
      }, 100)
      return () => clearInterval(id)
    }

    const script = document.createElement('script')
    script.src = 'https://js.paystack.co/v1/inline.js'
    script.async = true
    script.onload = () => setReady(true)
    document.head.appendChild(script)
    // Do not remove — other components may depend on it
  }, [])

  return ready
}
