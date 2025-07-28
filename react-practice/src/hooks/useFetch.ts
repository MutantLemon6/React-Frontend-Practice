import { useEffect, useState } from "react";

const baseUrl = "http://localhost:5000/api/";

export default function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Response | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function init() {
            try {
                const response = await fetch(baseUrl + url);
                if (response.ok) {
                    const json = await response.json();
                    setData(json);
                } else {
                    throw response;
                }
            } catch (e) {
                setError(e as Response);
            }
            finally {
                setLoading(false);
            }
        }
        init();
    }, [url])

    return { data, error, loading }
}