import axios from "axios";

    const URL = "https://pixabay.com/api/";
    const API_KEY = "45320623-f265cdcadbbe2c6a410e5ea22";
    
export async function searchGalleryQuery(query, page = 1) {
    try {
        const response = await axios.get(URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                page: page,
                per_page: 15,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching images:", error);
        throw error;
    }
}