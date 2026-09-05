export async function getNewsData(): Promise<any[]> {
  try {
    const res = await fetch("https://riftwire.onrender.com/api/news");
    
    if (!res.ok) {
      throw new Error(`Failed to load data: ${res.statusText}`);
    }
    const data = await res.json(); 
    return data;
  } catch (error) {
    console.error("Error fetching news data:", error);
    throw error;
  }
}