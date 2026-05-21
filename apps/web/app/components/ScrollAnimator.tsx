'use client'

import { useEffect } from 'react'

export default function ScrollAnimator() {
  useEffect(() => {
    document.documentElement.classList.add('js-loaded')

    const check = () => {
      const vh = window.innerHeight
      document.querySelectorAll<HTMLElement>('[data-reveal]:not(.visible)').forEach(el => {
        const { top, bottom } = el.getBoundingClientRect()
        if (top < vh * 0.94) {
          const delay = el.dataset.revealDelay
          if (delay) el.style.animationDelay = delay + 'ms'
          el.classList.add('visible')
          el.addEventListener('animationend', () => el.classList.add('revealed'), { once: true })
        }
      })
    }

    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check, { passive: true })

    // Run once on mount for any already-visible elements
    setTimeout(check, 80)

    return () => {
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
    }
  }, [])

  return null
}
