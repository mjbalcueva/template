// Re-export Prettier config from workspace package so local Prettier resolves it.
// Using ESM `import` because this package.json sets "type": "module".
import config from "@workspace/prettier-config/nextjs"

export default config
