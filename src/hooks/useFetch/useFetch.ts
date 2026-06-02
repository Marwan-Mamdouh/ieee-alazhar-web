import { useState, useEffect, useCallback, useRef } from "react";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface UseFetchOptions<TBody> {
	/**
	 * Query params to append to the URL.
	 * The hook re-fetches whenever this object's values change (shallow compare).
	 */
	queryParams?: Record<string, string>;
	/**
	 * Set to false to skip the fetch entirely (e.g. waiting on a required param).
	 * Defaults to true.
	 */
	enabled?: boolean;
	/**
	 * The HTTP request type (e.g. "GET", "POST").
	 * Defaults to "GET".
	 */
	method?: HttpMethod;
	/**
	 * The HTTP request body (e.g. JSON).
	 * Defaults to null.
	 */
	body?: TBody;
}

interface UseFetchResult<T, TBody> {
	data: T | null;
	isLoading: boolean;
	error: string | null;
	refetch: () => void;
	/** For mutations (POST/PUT/PATCH/DELETE): call this with an optional body override */
	mutate: (overrideBody?: TBody) => void;
}

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
