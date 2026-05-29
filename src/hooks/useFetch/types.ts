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

export interface UseFetchResult<T, TBody> {
	data: T | null;
	isLoading: boolean;
	error: string | null;
	refetch: () => void;
	/** For mutations (POST/PUT/PATCH/DELETE): call this with an optional body override */
	mutate: (overrideBody?: TBody) => void;
}
