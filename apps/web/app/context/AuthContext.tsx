'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react'
import * as api from '../../lib/api'

// ─── Types ─────────────────────────────────────────────────────────────────

export interface AuthUser {
  id: string
  email: string
  firstName: string
  lastName: string
  role: string
}

interface AuthCtx {
  user: AuthUser | null
  /** true while the initial session-restore request is in flight */
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (d: {
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string
  }) => Promise<void>
  logout: () => Promise<void>
}

// ─── Context ───────────────────────────────────────────────────────────────

const AuthContext = createContext<AuthCtx>({
  user: null,
  loading: true,
  login: async () => {},
  register: async () => {},
  logout: async () => {},
})

// ─── Provider ──────────────────────────────────────────────────────────────

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)

  /**
   * On mount, attempt a silent token refresh using the httpOnly cookie.
   * If it succeeds we're still logged in; if it fails we're guests.
   */
  useEffect(() => {
    api.auth
      .refresh()
      .then(({ accessToken }) => {
        api.setToken(accessToken)
        return api.users.getProfile()
      })
      .then((profile) =>
        setUser({
          id: profile.id,
          email: profile.email,
          firstName: profile.firstName,
          lastName: profile.lastName,
          role: profile.role,
        }),
      )
      .catch(() => {
        api.setToken(null)
        setUser(null)
      })
      .finally(() => setLoading(false))
  }, [])

  const login = useCallback(async (email: string, password: string) => {
    const { accessToken, user: u } = await api.auth.login({ email, password })
    api.setToken(accessToken)
    setUser(u)
  }, [])

  const register = useCallback(
    async (d: {
      email: string
      password: string
      firstName: string
      lastName: string
      phone?: string
    }) => {
      await api.auth.register(d)
      // Auto-login immediately after registration
      await login(d.email, d.password)
    },
    [login],
  )

  const logout = useCallback(async () => {
    await api.auth.logout().catch(() => {})
    api.setToken(null)
    setUser(null)
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
