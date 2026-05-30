import { useState, useEffect, useCallback, useRef } from "react";
import { UseFetchOptions, UseFetchResult } from "../useFetch/types";

const API_BASE_URL = "https://ieee-alazhar-api.vercel.app";

/**
 * Generic data-fetching hook.
 *
 * @param endpoint  Path after API_BASE_URL, e.g. "/api/v1/board"
 * @param options   Optional params + enabled flag
 *
 * @example
 * const { data, isLoading, error } = useFetch<BoardResponse>("/api/v1/board", {
 *   queryParams: { yearFrom: "2023", memberType: "officer", position: "Chair" },
 * });
 */
const useFetch = <T, TBody = Record<string, unknown>>(
	endpoint: string,
	{
		queryParams,
		enabled = true,
		method = "GET",
		body,
	}: UseFetchOptions<TBody> = {},
): UseFetchResult<T, TBody> => {
	const [data, setData] = useState<T | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	// Used to ignore responses from stale requests (e.g. params changed mid-flight)
	const abortControllerRef = useRef<AbortController | null>(null);

	// Stable serialisation of params so useEffect dependency works correctly
	const serialisedParams = queryParams
		? new URLSearchParams(queryParams).toString()
		: "";
	// Serialise body so it's stable as a dependency
	const serialisedBody = body ? JSON.stringify(body) : null;

	const isMutation = method !== "GET";

	const execute = useCallback(
		async (overrideBody?: TBody) => {
			if (!enabled) return;

			abortControllerRef.current?.abort();
			const controller = new AbortController();
			abortControllerRef.current = controller;

			setIsLoading(true);
			setError(null);

			try {
				const url = serialisedParams
					? `${API_BASE_URL}${endpoint}?${serialisedParams}`
					: `${API_BASE_URL}${endpoint}`;

				const resolvedBody =
					overrideBody ??
					(serialisedBody ? JSON.parse(serialisedBody) : undefined);
				const hasBody = resolvedBody !== undefined && method !== "GET";

				const response = await fetch(url, {
					signal: controller.signal,
					method,
					headers: hasBody ? { "Content-Type": "application/json" } : undefined,
					body: hasBody ? JSON.stringify(resolvedBody) : undefined,
				});

				if (!response.ok) {
					throw new Error(`HTTP ${response.status}: ${response.statusText}`);
				}

				const json = await response.json();
				setData((json.data as T) ?? json.message ?? null);
			} catch (e) {
				if ((e as Error).name === "AbortError") return;
				const message =
					e instanceof Error ? e.message : "An unexpected error occurred";
				console.error(`[useFetch] ${method} ${endpoint}:`, e);
				setError(message);
			} finally {
				setIsLoading(false);
			}
		},
		[endpoint, serialisedParams, serialisedBody, method, enabled],
	);

	// Only auto-fire for GET requests
	useEffect(() => {
		if (isMutation) return;
		execute();

		return () => {
			// Cleanup: abort if component unmounts mid-request
			abortControllerRef.current?.abort();
		};
	}, [execute, isMutation]);

	return {
		data,
		isLoading,
		error,
		refetch: execute,
		mutate: execute,
	};
};

export default useFetch;
