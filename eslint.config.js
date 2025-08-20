import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
	baseDirectory: __dirname
})

const eslintConfig = [
	{
		ignores: [
			"**/node_modules/**",
			"**/dist/**",
			"**/build/**",
			"**/.next/**",
			"**/coverage/**",
			"**/.turbo/**",
			"**/dev-dist/**",
			"**/.zed/**",
			"**/.vscode/**",
			"**/routeTree.gen.ts",
			"**/src-tauri/**",
			"**/.nuxt/**",
			"**/.expo/**",
			"**/.wrangler/**",
			"**/wrangler.jsonc",
			"**/.source/**"
		]
	},
	...compat.config({
		extends: ["eslint:recommended"],
		env: {
			node: true,
			es2022: true
		},
		parserOptions: {
			ecmaVersion: "latest",
			sourceType: "module"
		}
	})
]

export default eslintConfig
