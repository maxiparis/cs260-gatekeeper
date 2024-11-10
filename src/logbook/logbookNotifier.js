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
    handlers = [];
    names = [
        "Aiden Q.",
        "Lily S.",
        "Maximus F.",
        "Aurora S.",
        "Zara P.",
        "Leo N.",
        "Celeste O.",
        "Finn E.",
        "Nova C.",
        "Ivy L."
    ];

    situations = [
        "A lost item is found",
        "A suspicious person is spotted",
        "A fire alarm goes off",
        "A package is delivered",
        "A noise disturbance occurs",
        "A medical emergency arises",
        "A vehicle is parked illegally",
        "A door is found unlocked",
        "A power outage happens",
        "A visitor arrives unexpectedly"
    ];

    types = [
        "Guest",
        "Lost/Found",
        "Incident",
        "Damage",
        "Maintenance"
    ]

    locations = [
        "Library",
        "Main Door",
        "West Offices",
        "Parking Lot",
        "Cafeteria",
        "Gym",
        "Front Desk"
    ]

    times = [
        "02:00",
        "03:00",
        "11:30",
        "14:35",
        "15:50",
        "21:15"
    ]

    dates = [
        "2024-11-09",
        "2024-05-14",
        "2024-08-22",
        "2024-02-17",
        "2024-11-30",
        "2024-09-11",
        "2024-06-05",
        "2024-12-25",
        "2024-01-19",
        "2024-07-28"
    ];

    constructor() {
        // Simulate WebSocket

        const timer = setInterval(() => {


            //create a new entry and push it to local storage
            const newEntry = {
                id: uuidv4(),
                date: this.getRandomFrom(this.dates),
                time: this.getRandomFrom(this.times),
                location: this.getRandomFrom(this.locations),
                type: this.getRandomFrom(this.types),
                notes: this.getRandomFrom(this.situations),
                createdBy: this.getRandomFrom(this.names)
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

    getRandomFrom(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }

    broadcastEvent(from, type) {
        //this simulates sending a message
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
