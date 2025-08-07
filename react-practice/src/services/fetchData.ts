const baseUrl = "http://localhost:5000/api/";

export async function fetchData<T>(endpoint: string): Promise<T> {
    const response = await fetch(baseUrl + endpoint);
    if(!response.ok) throw response;
    return await response.json();
    
}