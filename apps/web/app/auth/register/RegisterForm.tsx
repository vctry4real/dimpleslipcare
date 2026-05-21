'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useAuth } from '../../context/AuthContext'

export default function RegisterForm() {
  const router = useRouter()
  const params = useSearchParams()
  const returnTo = params.get('returnTo') ?? '/account'
  const { register } = useAuth()

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirm: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function set(k: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((prev) => ({ ...prev, [k]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')

    if (form.password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }
    if (form.password !== form.confirm) {
      setError('Passwords do not match.')
      return
    }

    setLoading(true)
    try {
      await register({
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        password: form.password,
        phone: form.phone || undefined,
      })
      router.push(returnTo)
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Something went wrong.'
      setError(msg.includes('already registered') ? 'An account with that email already exists.' : msg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      className="surface"
      style={{
        background: 'var(--blush-50)',
        paddingTop: 'var(--s-16)',
        paddingBottom: 'var(--s-20)',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'flex-start',
      }}
    >
      <div className="wrap" style={{ maxWidth: 480, marginInline: 'auto', width: '100%' }}>
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
            Join the ritual
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(22px, 3vw, 30px)',
              fontWeight: 400,
              margin: 0,
            }}
          >
            Create your account
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
            <div className="co-grid-2">
              <div className="co-field">
                <label>First name</label>
                <input
                  type="text"
                  required
                  autoComplete="given-name"
                  value={form.firstName}
                  onChange={set('firstName')}
                />
              </div>
              <div className="co-field">
                <label>Last name</label>
                <input
                  type="text"
                  required
                  autoComplete="family-name"
                  value={form.lastName}
                  onChange={set('lastName')}
                />
              </div>
            </div>

            <div className="co-field">
              <label>Email address</label>
              <input
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={set('email')}
                placeholder="you@example.com"
              />
            </div>

            <div className="co-field">
              <label>
                Phone{' '}
                <span style={{ color: 'var(--fg-3)', fontWeight: 400 }}>(optional)</span>
              </label>
              <input
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={set('phone')}
                placeholder="0803 000 0000"
              />
            </div>

            <div className="co-field">
              <label>Password</label>
              <input
                type="password"
                required
                autoComplete="new-password"
                value={form.password}
                onChange={set('password')}
                placeholder="At least 8 characters"
              />
            </div>

            <div className="co-field">
              <label>Confirm password</label>
              <input
                type="password"
                required
                autoComplete="new-password"
                value={form.confirm}
                onChange={set('confirm')}
                placeholder="Repeat password"
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

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 12,
                color: 'var(--fg-3)',
                margin: 0,
              }}
            >
              By creating an account you agree to our{' '}
              <Link href="/legal/privacy" style={{ color: 'var(--fg-2)' }}>
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link href="/legal/terms" style={{ color: 'var(--fg-2)' }}>
                Terms of Service
              </Link>
              .
            </p>

            <button
              type="submit"
              className="btn-primary"
              disabled={loading}
              style={{ width: '100%', justifyContent: 'center', marginTop: 'var(--s-2)' }}
            >
              {loading ? 'Creating account…' : 'Create account'}
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
            Already have an account?{' '}
            <Link
              href={`/auth/login?returnTo=${encodeURIComponent(returnTo)}`}
              style={{ color: 'var(--accent)', textDecoration: 'underline' }}
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
