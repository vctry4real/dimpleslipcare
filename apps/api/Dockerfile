# ── Build & run in one stage (simpler; optimise later if image size matters) ──
FROM node:22-alpine
WORKDIR /app

# Install pnpm + openssl (required by Prisma on Alpine)
RUN corepack enable && corepack prepare pnpm@10 --activate && \
    apk add --no-cache openssl

# Install deps (layer-cached until manifests change)
COPY pnpm-workspace.yaml pnpm-lock.yaml package.json ./
COPY packages/types/package.json packages/types/package.json
COPY apps/api/package.json apps/api/package.json
RUN pnpm install --frozen-lockfile

# Copy source
COPY packages/types packages/types
COPY apps/api apps/api

# Build @dimples/types (pure declarations → JS; needed at runtime via symlink)
RUN node apps/api/node_modules/typescript/bin/tsc -p packages/types/tsconfig.json

# Generate Prisma client
RUN cd apps/api && node_modules/.bin/prisma generate

# Compile NestJS
RUN pnpm --filter api build

ENV NODE_ENV=production
EXPOSE 4000

# Run migrations then start the server
CMD ["sh", "-c", "cd apps/api && node_modules/.bin/prisma migrate deploy && cd /app && exec node apps/api/dist/apps/api/src/main"]
