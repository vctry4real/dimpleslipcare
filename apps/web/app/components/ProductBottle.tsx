import type { CSSProperties } from 'react'

interface BottleProps {
  scale?: number
  label?: string
  capColor?: string
  bodyColor?: string
}

export function GlossBottle({ scale = 1, capColor, bodyColor, label = 'Gloss' }: BottleProps) {
  const w = 80 * scale
  const h = 180 * scale
  return (
    <div className="bottle" style={{ width: w, height: h }}>
      <div className="cap" style={{ width: w * 0.55, height: h * 0.18, background: capColor || undefined }} />
      <div className="neck" style={{ top: h * 0.18, width: w * 0.28, height: h * 0.07 }} />
      <div className="body" style={{ top: h * 0.24, width: w * 0.92, height: h * 0.76, background: bodyColor || undefined }} />
      <div className="label" style={{ bottom: h * 0.12, fontSize: 11 * scale, width: w * 0.62 }}>{label}</div>
    </div>
  )
}

export function ScrubJar({ scale = 1, label = 'Sugar' }: BottleProps) {
  const w = 100 * scale
  const h = 110 * scale
  return (
    <div className="jar" style={{ width: w, height: h }}>
      <div className="lid" style={{ width: w * 0.78, height: h * 0.22 }} />
      <div className="vessel" style={{ top: h * 0.22, width: w * 0.92, height: h * 0.78 }} />
      <div style={{
        position: 'absolute', left: '50%', transform: 'translateX(-50%)',
        top: h * 0.52, fontSize: 11 * scale,
        background: 'rgba(255,255,255,.85)', borderRadius: 4, padding: '4px 8px',
        fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--blush-800)', zIndex: 3,
      }}>{label}</div>
    </div>
  )
}

export function OilDropper({ scale = 1, label = 'Petal' }: BottleProps) {
  const w = 64 * scale
  const h = 160 * scale
  return (
    <div className="dropper" style={{ width: w, height: h }}>
      <div className="top" style={{ width: w * 0.45, height: h * 0.08 }} />
      <div className="squeeze" style={{ top: h * 0.08, width: w * 0.6, height: h * 0.11 }} />
      <div className="body" style={{ top: h * 0.19, width: w * 0.78, height: h * 0.81 }} />
      <div style={{
        position: 'absolute', left: '50%', transform: 'translateX(-50%)',
        top: h * 0.5, padding: '4px 6px',
        background: 'rgba(255,255,255,.88)', borderRadius: 4,
        fontFamily: 'var(--font-serif)', fontStyle: 'italic',
        color: 'var(--blush-800)', fontSize: 11 * scale, zIndex: 3,
      }}>{label}</div>
    </div>
  )
}

export function LipIcon({ scale = 1 }: { scale?: number }) {
  return (
    <svg viewBox="0 0 64 40" width={56 * scale} height={36 * scale} aria-hidden="true">
      <defs>
        <linearGradient id="lipG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f0b8c2" />
          <stop offset="50%" stopColor="#d97189" />
          <stop offset="100%" stopColor="#8c2d4a" />
        </linearGradient>
        <linearGradient id="lipSh" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity=".7" />
          <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M2 18 C 10 4, 18 4, 24 12 C 28 16, 32 16, 32 16 C 32 16, 36 16, 40 12 C 46 4, 54 4, 62 18 C 56 26, 50 32, 32 32 C 14 32, 8 26, 2 18 Z" fill="url(#lipG)" />
      <path d="M8 12 C 14 8, 20 10, 22 14 C 18 16, 12 16, 8 12 Z" fill="url(#lipSh)" />
    </svg>
  )
}
