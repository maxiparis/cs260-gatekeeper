
export const FIRSTNAME_KEY = "firstName"
export const LOGBOOK_ENTRIES_KEY = "entries"

export const testUser = {
    username: "a",
    password: "a",
    firstName: "Jack",
    lastName: "Harrison",
}

export const testLogbookEntries = [
    {
        date: "2024-11-12",
        time: "13:05",
        location: "Library",
        type: "Maintenance",
        notes: "Completed routine patrol of the library; no incidents noted.",
        createdBy: "Maximiliano"
    },
    {
        date: "2024-11-13",
        time: "10:30",
        location: "Main Entrance",
        type: "Guest",
        notes: "Assisted a visitor with building entry; verified ID and provided guest pass.",
        createdBy: "Maximiliano"
    },
    {
        date: "2024-11-14",
        time: "15:45",
        location: "Parking Garage",
        type: "Incident",
        notes: "Reported a minor incident involving an unauthorized vehicle in the garage.",
        createdBy: "Maximiliano"
    },
    {
        date: "2024-11-15",
        time: "9:00",
        location: "Conference Room",
        type: "Maintenance",
        notes: "Conducted security check before executive meeting; all clear.",
        createdBy: "Maximiliano"
    }
];
