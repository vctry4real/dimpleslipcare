# ── Build stage ────────────────────────────────────────────────────────────────
FROM node:22-alpine AS builder
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@10 --activate

# Install deps (layer-cached until manifests change)
COPY pnpm-workspace.yaml pnpm-lock.yaml package.json ./
COPY packages/types/package.json packages/types/package.json
COPY apps/web/package.json apps/web/package.json
RUN pnpm install --frozen-lockfile

# Copy source
COPY packages/types packages/types
COPY apps/web apps/web

# Build @dimples/types so the workspace symlink resolves at Next.js build time
RUN node apps/web/node_modules/.bin/tsc -p packages/types/tsconfig.json 2>/dev/null || true

# Build args baked into the client bundle (NEXT_PUBLIC_* must be known at build time)
ARG NEXT_PUBLIC_API_URL=http://localhost:4000/api/v1
ARG NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=$NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY

RUN pnpm --filter web build

# ── Runtime stage ──────────────────────────────────────────────────────────────
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs \
 && adduser --system --uid 1001 nextjs

# Standalone output includes only what next.js needs at runtime
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/static     ./apps/web/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/public            ./apps/web/public

USER nextjs
EXPOSE 3000
ENV PORT=3000 HOSTNAME=0.0.0.0

# server.js lives at the monorepo root inside standalone due to outputFileTracingRoot
CMD ["node", "apps/web/server.js"]
