export default function Loading() {
  return (
    <div className="site" style={{ minHeight: '100vh' }}>
      {/* Header skeleton */}
      <div style={{
        height: 64,
        background: 'var(--pearl)',
        borderBottom: '1px solid var(--line)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 var(--s-8)',
        gap: 'var(--s-4)',
      }}>
        <div className="skel" style={{ width: 40, height: 40, borderRadius: '50%' }} />
        <div className="skel" style={{ width: 80, height: 16, borderRadius: 4 }} />
        <div style={{ flex: 1 }} />
        <div className="skel" style={{ width: 160, height: 12, borderRadius: 4 }} />
        <div className="skel" style={{ width: 32, height: 32, borderRadius: '50%' }} />
      </div>

      {/* Hero skeleton */}
      <div style={{
        background: 'var(--blush-100)',
        padding: 'var(--s-16) var(--s-8)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--s-4)',
        alignItems: 'flex-start',
      }}>
        <div className="skel" style={{ width: 120, height: 12, borderRadius: 4 }} />
        <div className="skel" style={{ width: '55%', height: 48, borderRadius: 8 }} />
        <div className="skel" style={{ width: '40%', height: 48, borderRadius: 8 }} />
        <div className="skel" style={{ width: '60%', height: 20, borderRadius: 4, marginTop: 'var(--s-2)' }} />
        <div className="skel" style={{ width: '45%', height: 20, borderRadius: 4 }} />
        <div style={{ display: 'flex', gap: 'var(--s-3)', marginTop: 'var(--s-4)' }}>
          <div className="skel" style={{ width: 160, height: 44, borderRadius: 100 }} />
          <div className="skel" style={{ width: 120, height: 44, borderRadius: 100 }} />
        </div>
      </div>

      {/* Products skeleton */}
      <div style={{ padding: 'var(--s-16) var(--s-8)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--s-6)' }}>
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-3)' }}>
              <div className="skel" style={{ height: 240, borderRadius: 'var(--r-xl)' }} />
              <div className="skel" style={{ width: '60%', height: 16, borderRadius: 4 }} />
              <div className="skel" style={{ width: '80%', height: 12, borderRadius: 4 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
