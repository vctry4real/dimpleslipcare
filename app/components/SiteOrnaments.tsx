import Image from 'next/image'
import type { CSSProperties } from 'react'

interface OrnamentProps {
  size?: number
  style?: CSSProperties
  className?: string
  delay?: number
}

export function Sparkle({ size = 32, style = {}, className = '', delay = 0 }: OrnamentProps) {
  return (
    <Image
      src="/assets/motif-sparkle.svg"
      width={size}
      height={size}
      className={`spark ${className}`}
      style={{ animationDelay: `${delay}s`, ...style }}
      alt=""
    />
  )
}

export function Heart({ size = 32, style = {}, className = '', delay = 0 }: OrnamentProps) {
  return (
    <Image
      src="/assets/motif-heart.svg"
      width={size}
      height={Math.round(size * (44 / 48))}
      className={`heart ${className}`}
      style={{ animationDelay: `${delay}s`, ...style }}
      alt=""
    />
  )
}

export function Droplet({ size = 28, style = {} }: Omit<OrnamentProps, 'delay' | 'className'>) {
  return (
    <Image
      src="/assets/motif-droplet.svg"
      width={size}
      height={Math.round(size * (48 / 36))}
      style={style}
      alt=""
    />
  )
}
