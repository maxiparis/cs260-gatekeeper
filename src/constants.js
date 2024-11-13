import { v4 as uuidv4 } from 'uuid';

export const FIRSTNAME_KEY = "firstName"
export const LOGBOOK_ENTRIES_KEY = "entries"
export const TOKEN_KEY = "token"


export const testUser = {
    username: "a",
    password: "a",
    firstName: "Jack",
    lastName: "Harrison",
}

export const testLogbookEntries = [
    {
        id: uuidv4(),
        date: "2024-03-01",
        time: "15:34",
        location: "Main Door",
        type: "Lost/Found",
        notes: "Found a backpack in the main door. Police was informed.",
        createdBy: "Alex"
    },
    {
        id: uuidv4(),
        date: "2024-08-01",
        time: "13:05",
        location: "Library",
        type: "Maintenance",
        notes: "Completed routine patrol of the library; no incidents noted.",
        createdBy: "Maximiliano"
    },
    {
        id: uuidv4(),
        date: "2024-08-11",
        time: "10:30",
        location: "Main Door",
        type: "Guest",
        notes: "Assisted a visitor with building entry; verified ID and provided guest pass.",
        createdBy: "Carlos"
    },
    {
        id: uuidv4(),
        date: "2024-08-21",
        time: "15:45",
        location: "Parking Lot",
        type: "Incident",
        notes: "Reported a minor incident involving an unauthorized vehicle in the parking lot.",
        createdBy: "Patrick"
    },
    {
        id: uuidv4(),
        date: "2024-08-31",
        time: "9:00",
        location: "West Offices",
        type: "Maintenance",
        notes: "Conducted security check before executive meeting; all clear.",
        createdBy: "Robert"
    },
    {
        id: uuidv4(),
        date: "2024-09-10",
        time: "14:30",
        location: "Cafeteria",
        type: "Guest",
        notes: "Assisted a visitor with cafeteria entry; confirmed meal voucher.",
        createdBy: "Sarah"
    },
    {
        id: uuidv4(),
        date: "2024-09-20",
        time: "16:00",
        location: "Gym",
        type: "Maintenance",
        notes: "Checked gym equipment and ensured everything was in working order.",
        createdBy: "John"
    },
    {
        id: uuidv4(),
        date: "2024-09-30",
        time: "11:15",
        location: "Front Desk",
        type: "Lost/Found",
        notes: "Found a lost wallet at the front desk; notified security to secure it.",
        createdBy: "Emily"
    },
    {
        id: uuidv4(),
        date: "2024-10-10",
        time: "8:45",
        location: "Main Door",
        type: "Damage",
        notes: "Noticed a small crack in the main door; reported it to maintenance.",
        createdBy: "James"
    },
    {
        id: uuidv4(),
        date: "2024-10-20",
        time: "12:00",
        location: "Parking Lot",
        type: "Incident",
        notes: "Witnessed a minor collision in the parking lot; informed the authorities.",
        createdBy: "James"
    },
    {
        id: uuidv4(),
        date: "2024-10-30",
        time: "17:20",
        location: "West Offices",
        type: "Guest",
        notes: "Escorted a guest to the executive office area and provided access.",
        createdBy: "Olivia"
    },
    {
        id: uuidv4(),
        date: "2024-11-08",
        time: "17:20",
        location: "Incident",
        type: "Guest",
        notes: "Escorted a guest to the executive office area and provided access.",
        createdBy: "Olivia"
    }
];
