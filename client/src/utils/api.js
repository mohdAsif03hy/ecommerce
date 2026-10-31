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
        const params = {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
                "Content-Type": "application/json",
            },
        }
        const data = await axios.get(apiUrl + url,params);

        return data.data;
    } catch (error) {
        console.error("Error in fetchDataFromApi:", error);
        throw error;    
    }
};


export const uploadImage = async (url, updatedData) => {
     const params = {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
                "Content-Type": "application/json",
            },
        }
    const { data } = await axios.put(
        apiUrl + url,
        updatedData,
        params
    );
    return data;
};


export const editData = async (url, updatedData) => {
    const params = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
    };
    const { data } = await axios.put(
        apiUrl + url,
        updatedData,
        params
    );
    return data;
};