import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://localhost:7227',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export const eventService = {

    async getEvents() {
        let response = await apiClient.get("/Events/GetAll");
        let allevents = response.data;
        return allevents;
    },

    async getEvent(id) {
        let response = await apiClient.get("/events" + id);
        let event = response.data;
        return event;
    }
}

