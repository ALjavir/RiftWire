export async function getNewsData(): Promise<any[]> {
  try {
    const res = await fetch("http://localhost:5000/api/news");
    
    if (!res.ok) {
      throw new Error(`Failed to load data: ${res.statusText}`);
    }
    const data = await res.json(); 
    return data.data;
  } catch (error) {
    console.error("Error fetching news data:", error);
    throw error;
  }
}