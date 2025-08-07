import { useEffect, useState } from "react";
import { fetchData } from "../services/fetchData";



export default function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Response | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        fetchData<T>(url).then(json => {
            if (isMounted) setData(json);
        }).catch(e => {
            if (isMounted) setError(e as Response);
        }).finally(() => {
            if (isMounted) setLoading(false);
        });
        return () => { isMounted = false; };
    }, [url])
    return { data, error, loading }
}