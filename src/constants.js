
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
        date: "12 November 2024",
        time: "1:05 pm",
        location: "Library",
        type: "Maintenance",
        notes: "Completed routine patrol of the library; no incidents noted.",
        createdBy: "Maximiliano"
    },
    {
        date: "13 November 2024",
        time: "10:30 am",
        location: "Main Entrance",
        type: "Guest",
        notes: "Assisted a visitor with building entry; verified ID and provided guest pass.",
        createdBy: "Maximiliano"
    },
    {
        date: "14 November 2024",
        time: "3:45 pm",
        location: "Parking Garage",
        type: "Incident",
        notes: "Reported a minor incident involving an unauthorized vehicle in the garage.",
        createdBy: "Maximiliano"
    },
    {
        date: "15 November 2024",
        time: "9:00 am",
        location: "Conference Room",
        type: "Maintenance",
        notes: "Conducted security check before executive meeting; all clear.",
        createdBy: "Maximiliano"
    }
];
