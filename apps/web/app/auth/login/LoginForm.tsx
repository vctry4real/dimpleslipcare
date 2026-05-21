'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useAuth } from '../../context/AuthContext'

export default function LoginForm() {
  const router = useRouter()
  const params = useSearchParams()
  const returnTo = params.get('returnTo') ?? '/account'
  const { login } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await login(email, password)
      router.push(returnTo)
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Something went wrong.'
      setError(msg === 'UNAUTHORIZED' || msg.toLowerCase().includes('invalid')
        ? 'Incorrect email or password.'
        : msg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      className="surface"
      style={{
        background: 'var(--blush-50)',
        paddingTop: 'var(--s-20)',
        paddingBottom: 'var(--s-20)',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="wrap" style={{ maxWidth: 440, marginInline: 'auto', width: '100%' }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--s-8)' }}>
          <p
            className="script"
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: 'clamp(28px, 4vw, 40px)',
              color: 'var(--accent)',
              lineHeight: 1,
              marginBottom: 'var(--s-2)',
            }}
          >
            Welcome back
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(22px, 3vw, 30px)',
              fontWeight: 400,
              margin: 0,
            }}
          >
            Sign in to your account
          </h1>
        </div>

        {/* Card */}
        <div
          style={{
            background: 'var(--cream)',
            borderRadius: 16,
            padding: 'var(--s-8)',
            boxShadow: '0 2px 24px rgba(0,0,0,0.06)',
          }}
        >
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-4)' }}>
            <div className="co-field">
              <label>Email address</label>
              <input
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </div>

            <div className="co-field">
              <label>Password</label>
              <input
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
            </div>

            {error && (
              <p
                role="alert"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 13,
                  color: 'var(--err)',
                  background: 'var(--err-bg)',
                  border: '1px solid var(--err)',
                  borderRadius: 8,
                  padding: '10px 14px',
                  margin: 0,
                }}
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              className="btn-primary"
              disabled={loading}
              style={{ width: '100%', justifyContent: 'center', marginTop: 'var(--s-2)' }}
            >
              {loading ? 'Signing in…' : 'Sign in'}
            </button>
          </form>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              color: 'var(--fg-2)',
              textAlign: 'center',
              marginTop: 'var(--s-5)',
              marginBottom: 0,
            }}
          >
            No account yet?{' '}
            <Link
              href={`/auth/register?returnTo=${encodeURIComponent(returnTo)}`}
              style={{ color: 'var(--accent)', textDecoration: 'underline' }}
            >
              Create one — it&apos;s free
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
