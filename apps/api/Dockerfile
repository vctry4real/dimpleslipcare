# ── Build stage ───────────────────────────────────────────────────────────────
FROM node:20-alpine AS builder
WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy workspace manifests
COPY pnpm-workspace.yaml package.json ./
COPY packages/types/package.json ./packages/types/
COPY apps/api/package.json ./apps/api/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source
COPY packages/types ./packages/types
COPY apps/api ./apps/api

# Generate Prisma client
RUN pnpm --filter api prisma:generate

# Build NestJS
RUN pnpm --filter api build

# ── Production stage ──────────────────────────────────────────────────────────
FROM node:20-alpine AS runner
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

# Only production deps
COPY pnpm-workspace.yaml package.json ./
COPY packages/types/package.json ./packages/types/
COPY apps/api/package.json ./apps/api/
RUN pnpm install --frozen-lockfile --prod

# Copy built output and Prisma client
COPY --from=builder /app/apps/api/dist ./apps/api/dist
COPY --from=builder /app/node_modules/.pnpm ./node_modules/.pnpm
COPY apps/api/prisma ./apps/api/prisma

ENV NODE_ENV=production
EXPOSE 4000

CMD ["sh", "-c", "node apps/api/dist/main"]
