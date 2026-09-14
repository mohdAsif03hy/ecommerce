const apiUrl = import.meta.env.VITE_API_URL;
import axios from "axios";



export const postData = async (url, formData) => {
    try {
        const response = await fetch(apiUrl + url, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        // Response ko pehle read karo
        const data = await response.json();

        // Backend ka actual error message
        if (!response.ok) {
            throw new Error(
                data.message || data.error || `HTTP error! status: ${response.status}`
            );
        }

        return data;

    } catch (error) {
        console.error("Error in postData:", error);
        throw error;
    }
};


export const fetchDataFromApi = async (url) => {
    try {
        const data = await axios.get(apiUrl + url, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
                "Content-Type": "application/json",
            },
        });
        return data.data;
    } catch (error) {
        console.error("Error in fetchDataFromApi:", error);
        throw error;    
    }
};