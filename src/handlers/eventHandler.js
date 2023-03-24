import { eventService } from "../services/eventService"

export const eventHandler = {
    loadEvents(){
        return eventService.getEvents();
    },
    loadEvent(id){
        return eventService.getEvent(id);
    }
}