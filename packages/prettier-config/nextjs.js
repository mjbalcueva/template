/** @type {import('prettier').Config & import('@ianvs/prettier-plugin-sort-imports').PluginConfig & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
	bracketSameLine: false,
	endOfLine: "lf",
	importOrder: [
		"^(next/(.*)$)|^(next$)|^(react/(.*)$)|^(react$)", // Next.js and React.js modules
		"<BUILTIN_MODULES>", // Node.js built-in modules
		"<THIRD_PARTY_MODULES>", // NPM packages
		"",
		"^@workspace/(.*)$", // Workspace packages
		"",
		"^@/core/(.*)$", // Core shared components
		"",
		"^@/services/(.*)$", // External service integrations
		"",
		"^@/features/(.*)$", // Feature-specific modules
		"",
		"^@/(.*)$", // Other internal modules
		"",
		"^(?!.*[.]css$)[./].*$", // Relative imports (non-CSS)
		".css$" // CSS imports
	],
	importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
	plugins: [
		"@ianvs/prettier-plugin-sort-imports",
		"prettier-plugin-tailwindcss"
	],
	printWidth: 80,
	quoteProps: "consistent",
	semi: false,
	singleQuote: false,
	tabWidth: 2,
	trailingComma: "none",
	useTabs: true
}

export default config
