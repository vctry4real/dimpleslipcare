import { notFound } from 'next/navigation'
import Link from 'next/link'
import SiteHeader from '../../components/SiteHeader'
import SiteFooter from '../../components/SiteFooter'
import { Sparkle, Heart } from '../../components/SiteOrnaments'
import { POSTS, getPost } from '../../data/posts'
import JsonLd from '../../components/JsonLd'

export async function generateStaticParams() {
  return POSTS.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} — Dimples Journal`,
      description: post.excerpt,
      url: `https://dimplesbeauty.vctry4real.dev/journal/${post.slug}`,
    },
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const related = POSTS.filter(p => p.slug !== slug).slice(0, 3)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.isoDate,
    author: { '@type': 'Organization', name: 'Dimples Lipcare' },
    publisher: { '@type': 'Organization', name: 'Dimples Lipcare', url: 'https://dimplesbeauty.vctry4real.dev' },
    url: `https://dimplesbeauty.vctry4real.dev/journal/${post.slug}`,
  }

  return (
    <div className="site">
      <JsonLd data={articleSchema} />
      <SiteHeader />

      {/* ── Post hero ── */}
      <section className={`post-hero post-hero--${post.variant}`}>
        <div className="wrap">
          <nav style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'rgba(255,255,255,.7)', display: 'flex', gap: 6, alignItems: 'center', marginBottom: 'var(--s-8)', paddingTop: 'var(--s-5)' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,.7)' }}>Home</Link>
            <span>›</span>
            <Link href="/journal" style={{ color: 'rgba(255,255,255,.7)' }}>Journal</Link>
            <span>›</span>
            <span style={{ color: 'rgba(255,255,255,.9)' }}>{post.tag}</span>
          </nav>

          <span className="post-tag">{post.tag}</span>
          <h1 className="post-title">{post.title}</h1>

          <div className="post-byline">
            <div className="post-avatar">D</div>
            <div>
              <div className="post-author">By Dimples · Founder</div>
              <div className="post-meta">{post.readTime} · Published {post.date}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cover art ── */}
      <div className="wrap" style={{ paddingTop: 'var(--s-8)', paddingBottom: 0 }}>
        <div className={`post-cover post-cover--${post.variant}`}>
          <Sparkle size={48} style={{ position: 'absolute', top: '30%', left: '20%' }} delay={0.2} />
          <Sparkle size={32} style={{ position: 'absolute', top: '60%', right: '20%' }} delay={1.2} />
          <Heart size={40} style={{ position: 'absolute', top: '40%', right: '30%' }} delay={0.6} />
        </div>
      </div>

      {/* ── Article body ── */}
      <section className="surface" style={{ background: 'var(--bg)', paddingTop: 'var(--s-12)', paddingBottom: 'var(--s-20)' }}>
        <div className="wrap">
          <div className="post-body">
            {post.body}
          </div>
        </div>
      </section>

      {/* ── More from the journal ── */}
      <section className="surface" style={{ background: 'var(--blush-100)', paddingTop: 'var(--s-16)', paddingBottom: 'var(--s-16)' }}>
        <div className="wrap">
          <div className="section-heading" style={{ marginBottom: 'var(--s-10)' }}>
            <div>
              <div className="eyebrow">Keep reading</div>
              <h2>More from<br />the journal.</h2>
            </div>
          </div>
          <div className="journal-grid">
            {related.map((p, i) => (
              <Link
                key={p.slug}
                className={`journal-card journal-card--${p.variant}`}
                href={`/journal/${p.slug}`}
              >
                <div className="journal-card-art">
                  <Sparkle size={24} style={{ position: 'absolute', top: 24, right: 28 }} delay={i * 0.4} />
                </div>
                <div className="journal-card-body">
                  <span className="journal-tag">{p.tag}</span>
                  <h3 className="journal-card-title">{p.title}</h3>
                  <p className="journal-meta">{p.readTime} · {p.date}</p>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--s-10)' }}>
            <Link className="btn-ghost" href="/journal">← All posts</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
