import { fromNodeHeaders } from "better-auth/node"

import { auth } from "./auth"

export async function createContext(opts: {
	req: { headers: Record<string, string | string[] | undefined> }
}) {
	const session = await auth.api.getSession({
		headers: fromNodeHeaders(opts.req.headers)
	})
	return {
		session
	}
}

export type Context = Awaited<ReturnType<typeof createContext>>
