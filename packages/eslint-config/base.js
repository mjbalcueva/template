import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"
import js from "@eslint/js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended
})

const config = [
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
			es2022: true
		},
		parserOptions: {
			ecmaVersion: "latest",
			sourceType: "module"
		},
		rules: {
			// Style rules equivalent to Biome configuration
			"no-param-reassign": "error",
			"no-unused-vars": "error",
			"no-var": "error",
			"prefer-const": "error",
			"no-unreachable": "error",
			"no-template-curly-in-string": "error",
			"no-useless-else": "error",
			"prefer-template": "error"
		}
	})
]

export default config
