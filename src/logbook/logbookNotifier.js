import {v4 as uuidv4} from "uuid";
import {LOGBOOK_ENTRIES_KEY} from "../constants";

const LogbookEvent = {
    Add: 'add',
    Remove: 'remove',
};

class EventMessage {
    constructor(from, type) {
        this.from = from;
        this.type = type;
    }
}

class LogbookNotifier {
    events = [];
    handlers = [];

    constructor() {
        // Simulate WebSocket

        setInterval(() => {
            //create a new entry and push it to local storage
            const newEntry = {
                id: uuidv4(),
                date: "2024-11-09",
                time: "16:00",
                location: "Main Door",
                type: "Lost/Found",
                notes: "Found a backpack in the main door. Police was informed.",
                createdBy: "Jake Websocket"
            }

            let entries = localStorage.getItem(LOGBOOK_ENTRIES_KEY)
            if (entries) {
                entries = JSON.parse(entries)
            }
            entries.push(newEntry)
            localStorage.setItem(LOGBOOK_ENTRIES_KEY, JSON.stringify(entries))

            this.broadcastEvent(newEntry.createdBy, LogbookEvent.Add);
        }, 5000);
    }

    broadcastEvent(from, type) {
        //this simulates sending a messag
        const event = new EventMessage(from, type);
        this.receiveEvent(event);
    }

    addHandler(handler) {
        this.handlers.push(handler);
    }

    removeHandler(handler) {
        this.handlers.filter((h) => h !== handler);
    }

    receiveEvent(event) {
        //TEST TODO

        // this.events.push(event);
        //
        // this.events.forEach((e) => {
        //     this.handlers.forEach((handler) => {
        //         handler(e);
        //     });
        // });

        this.handlers.forEach((handler) => handler(event));
    }
}

const logbookNotifier = new LogbookNotifier();
export { LogbookEvent, logbookNotifier };
