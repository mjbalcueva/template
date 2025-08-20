# App-Template Project Rules

This is a app-template project created for small-medium applications.

## Project Structure

This is a monorepo with the following structure:

- **`apps/web/`** - Frontend application (Next.js + TailwindCSS + shadcn/ui)
- **`apps/server/`** - Backend server (Express + oRPC)
- **`apps/fumadocs/`** - Documentation site (Fumadocs)
- **`packages/`** - Shared packages (ESLint config, Prettier config)

## Available Scripts

- `pnpm run dev` - Start all apps in development mode
- `pnpm run dev:web` - Start only the web application
- `pnpm run dev:server` - Start only the server
- `pnpm run dev:fumadocs` - Start only the documentation site
- `pnpm run build` - Build all applications
- `pnpm run check-types` - Check TypeScript types across all apps
- `pnpm run format` - Run Prettier formatting across all apps
- `pnpm run lint` - Run ESLint across all apps

## Database Commands

All database operations should be run from the server workspace:

- `pnpm run db:push` - Push schema changes to database
- `pnpm run db:studio` - Open database studio
- `pnpm run db:generate` - Generate Drizzle files
- `pnpm run db:migrate` - Run database migrations

Database schema files are located in `apps/server/src/db/schema/`

## API Structure

- oRPC endpoints are in `apps/server/src/routers/`
- Client-side API utils are in `apps/web/src/services/orpc/client.ts`

## Authentication

Authentication is enabled in this project:

- Server auth logic is in `apps/server/src/lib/auth.ts`

Available addons you can add:

- **Documentation**: Starlight, Fumadocs
- **Linting**: Biome, Oxlint, Ultracite
- **Other**: Ruler, Turborepo, PWA, Tauri, Husky

You can also add web deployment configurations like Cloudflare Workers support.

## Key Points

- This is a Turborepo monorepo using pnpm workspaces
- Each app has its own `package.json` and dependencies
- Run commands from the root to execute across all workspaces
- Run workspace-specific commands with `pnpm run command-name`
- Turborepo handles build caching and parallel execution
- Use `pnpx
