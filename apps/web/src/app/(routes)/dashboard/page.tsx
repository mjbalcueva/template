"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"

import { orpc } from "@/services/orpc/client"

import { authClient } from "@/features/auth/lib/auth-client"

export default function Dashboard() {
	const router = useRouter()
	const { data: session, isPending } = authClient.useSession()

	const privateData = useQuery(orpc.privateData.queryOptions())

	useEffect(() => {
		if (!session && !isPending) {
			router.push("/login")
		}
	}, [session, isPending])

	if (isPending) {
		return <div>Loading...</div>
	}

	return (
		<div>
			<h1>Dashboard</h1>
			<p>Welcome {session?.user.name}</p>
			<p>privateData: {JSON.stringify(privateData.data)}</p>
		</div>
	)
}
