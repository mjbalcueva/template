# 🏗️ Project Structure & House Rules

> **IMPORTANT:** Follow these conventions for consistent codebase

## Directory Rules

```
app/                  # ❌ ONLY Next.js reserved files (pages, layouts, routes)
├── (routes)/         # ✅ Route groups and page.tsx files only
├── api/              # ✅ API routes only
└── globals.css       # ✅ Global styles only

features/             # ✅ ALL your business logic goes here
├── [feature-name]/
│   ├── api/          # ✅ API hooks, client calls
│   ├── components/   # ✅ Feature-specific UI components
│   ├── lib/          # ✅ Feature-specific utilities
│   └── utils/        # ✅ Feature utilities

core/                 # ✅ Shared/reusable code
├── components/       # ✅ Shared UI components
├── context/          # ✅ React context providers
├── hooks/            # ✅ Shared React hooks
└── lib/              # ✅ Shared utilities

services/             # ✅ External service integrations
├── orpc/             # ✅ ORPC client setup
└── [service-name]/   # ✅ Other external services
```

## File Naming Conventions

- **Components**: kebab-case (`user-profile.tsx`)
- **Files**: kebab-case (`user-profile.utils.ts`)
- **Folders**: kebab-case (`user-management/`)

## Current Structure

### Features

- **auth**: Authentication-related components (sign-in, sign-up, user-menu)
- **todos**: Todo management functionality

### Core

- **components**: Shared UI components (header, mode-toggle, theme-provider, ui components)
- **lib**: Shared utilities

### Services

- **orpc**: ORPC client configuration and setup

## Import Conventions

- Use absolute imports with path mapping
- Workspace packages: `@workspace/[package-name]/...`
- Feature imports: `@/features/[feature-name]/...`
- Core imports: `@/core/...`
- Service imports: `@/services/...`
- App imports: `@/app/...` (for app-specific files only)

### Import Order (enforced by Prettier)

1. **Framework modules** - Next.js and React
2. **Node.js built-in modules**
3. **Third-party NPM packages**
4. **Workspace packages** - `@workspace/*`
5. **Core modules** - `@/core/*`
6. **Services** - `@/services/*`
7. **Features** - `@/features/*`
8. **Other internal modules** - `@/*`
9. **Relative imports** - `./` and `../`
10. **CSS imports** - `.css` files
