import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

import { orpc } from "@/services/orpc/client"

export function useTodos() {
	return useQuery(orpc.todo.getAll.queryOptions())
}

export function useCreateTodo() {
	const queryClient = useQueryClient()

	return useMutation(
		orpc.todo.create.mutationOptions({
			onSuccess: () => {
				queryClient.invalidateQueries({ queryKey: ["todo", "getAll"] })
			}
		})
	)
}

export function useToggleTodo() {
	const queryClient = useQueryClient()

	return useMutation(
		orpc.todo.toggle.mutationOptions({
			onSuccess: () => {
				queryClient.invalidateQueries({ queryKey: ["todo", "getAll"] })
			}
		})
	)
}

export function useDeleteTodo() {
	const queryClient = useQueryClient()

	return useMutation(
		orpc.todo.delete.mutationOptions({
			onSuccess: () => {
				queryClient.invalidateQueries({ queryKey: ["todo", "getAll"] })
			}
		})
	)
}
