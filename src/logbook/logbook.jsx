import React, {useEffect} from 'react';
import {FIRSTNAME_KEY, LASTNAME_KEY, testLogbookEntries, TOKEN_KEY} from "../constants";
import {Button, Modal, OverlayTrigger, Toast, ToastContainer, Tooltip} from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import {v4 as uuidv4} from 'uuid';
import {logbookNotifier} from "./logbookNotifier";
import {ApiService} from "../ApiService";
import {AuthState} from "../login/authState";
import {useNavigate} from "react-router-dom";


export function Logbook({username, authState}) {

    const navigateTo = useNavigate()

    const [entries, setEntries] = React.useState([]);
    const [showAddModal, setShowAddModal] = React.useState(false);
    const [filterRows, setFilterRows] = React.useState(false);

    //Fields for new entry modal
    const [date, setDate] = React.useState("");
    const [time, setTime] = React.useState("");
    const [location, setLocation] = React.useState("");
    const [type, setType] = React.useState("");
    const [notes, setNotes] = React.useState("");
    const [author, setAuthor] = React.useState(`${localStorage.getItem(FIRSTNAME_KEY)} ${localStorage.getItem(LASTNAME_KEY)}`)

    //Fields for filter
    const [filterNote, setFilterNote] = React.useState("");
    const [filterDate, setFilterDate] = React.useState("");
    const [filterLocation, setFilterLocation] = React.useState("");
    const [filterType, setFilterType] = React.useState("");
    const [filterAuthor, setFilterAuthor] = React.useState("");

    const [showToast, setShowToast] = React.useState(false);
    const [toastName, setToastName] = React.useState("");
    const [testingWebsocket, setTestingWebsocket] = React.useState(false);

    const [weatherMessage, setWeatherMessge] = React.useState("");
    const [timeMessage, setTimeMessage] = React.useState(getTime());

    const apiService = new ApiService()

    // Will run everytime this is rendered when loaded
    useEffect(() => {
        if (authState === AuthState.Authenticated) {
            const intervalId = setInterval(() => {
                console.log("🟠Getting the time")
                setTimeMessage(getTime());
            }, 60000)

            loadEntries()
            getTime()
            getWeather()
            logbookNotifier.addHandler(handleNotification)
            return () => {
                logbookNotifier.removeHandler(handleNotification);
                clearInterval(intervalId)
            }
        }
    }, [])

    useEffect(() => {
        if (authState !== AuthState.Authenticated) {
            navigateTo("/")
        }
    }, [authState])

    // Watch for changes to any of the states
    useEffect(() => {
        if (filterDate || filterNote || filterLocation || filterType || filterAuthor) {
            setFilterRows(true)
        } else {
            setFilterRows(false)
        }


    }, [filterDate, filterNote, filterLocation, filterType, filterAuthor]); // Dependency array that listens for updates to any of these states


    const emptyRow = (
        <tr>
            <td
                colSpan={7}
                className="text-center text-secondary"
            >
                There are no log entries.
            </td>
        </tr>
    )

    const emptyFilteredRow = (
        <tr>
            <td
                colSpan={7}
                className="text-center text-secondary"
            >
                No log matches the filter options.
            </td>
        </tr>
    )

    function stopWebsocketTesting() {
        logbookNotifier.cancelTimer()
    }

    async function testWebsocket() {
        await logbookNotifier.startTimer()
    }

    // When we get notified of an event we will re load all the entries.
    async function handleNotification(event) {
        await loadEntries()
        if (event.from) {
            // if there's no name we won't trigger the notification
            setToastName(event.from)
            setShowToast(true)
        }
    }

    async function loadEntries() {
        try {
            const token = localStorage.getItem(TOKEN_KEY)
            if (token) {
                const response = await apiService.getLogbookEntries();
                setEntries(response.data.entries)
            } else {
                alert("The Entries could not be loaded.")
            }
        } catch (error) {
            console.error(error)
        }
    }


    async function loadTestEntries() {
        try {
            await clearEntries()
            for (const entry of testLogbookEntries) {
                const response = await apiService.createLogbookEntry({data: entry})
                setEntries(response.data.entries)
            }
        } catch (e) {
            alert("Error importing test logbook entries")
        }
    }

    function isDateInRange(dateToCheck, startDate, endDate) {
        const dateTime = dateToCheck.getTime();
        const startTime = startDate.getTime();
        const endTime = endDate.getTime();


        console.log(`\n Today = ${dateToCheck}`);
        console.log(`dateToCheck = ${dateTime}`);
        console.log(`startTime = ${startTime}`);
        console.log(`endTime = ${endTime}`);

        return dateTime >= startTime && dateTime <= endTime;
    }

    function filteredRows() {
        let filteredEntries = entries.slice()

        if (filterNote) {
            filteredEntries = filteredEntries.filter((entry) => {
                return entry.notes.toLowerCase().includes(filterNote.toLowerCase())
            })
        }

        //TODO: dates
        if (filterDate) {
            const todayAtMidnight = new Date();
            todayAtMidnight.setHours(23, 59, 59, 0);

            const daysToSubtract = +filterDate

            console.log(`daysToSubtract: ${daysToSubtract}`)
            let pastDate = new Date(todayAtMidnight)
            pastDate.setDate(todayAtMidnight.getDate() - daysToSubtract);
            pastDate.setHours(0, 0, 0);

            filteredEntries = filteredEntries.filter((entry) => {
                // const entryDate = new Date(entry.date)
                const entryDate = new Date(entry.date + "T00:00:00"); // Treats the date as local time

                return isDateInRange(entryDate, pastDate, todayAtMidnight)
            })
        }

        if (filterLocation) {
            filteredEntries = filteredEntries.filter((entry) => {
                return entry.location.toLowerCase().includes(filterLocation.toLowerCase())
            })
        }

        if (filterType) {
            filteredEntries = filteredEntries.filter((entry) => {
                return entry.type.toLowerCase().includes(filterType.toLowerCase())
            })
        }

        if (filterAuthor) {
            filteredEntries = filteredEntries.filter((entry) => {
                return entry.author.toLowerCase().includes(filterAuthor.toLowerCase())
            })
        }

        return filteredEntries.length > 0 ? formattedRows(filteredEntries) : emptyFilteredRow
    }

    function unfilteredRows() {
        let rows = formattedRows(entries)
        return rows.length > 0 ? rows : emptyRow;
    }

    function formattedRows(arrayEntries) {
        const formattedRows = []
        if (arrayEntries.length > 0) {
            arrayEntries.forEach((entry) => {
                const hasRequiredFields =
                    "date" in entry &&
                    "time" in entry &&
                    "location" in entry &&
                    "type" in entry &&
                    "notes" in entry &&
                    "author" in entry

                if (hasRequiredFields) {
                    formattedRows.push(
                        <tr key={`${entry.date}-${entry.time}`}>
                            <td>{entry.date}</td>
                            <td>{entry.time}</td>
                            <td>{entry.location}</td>
                            <td>{entry.type}</td>
                            <td>{entry.notes}</td>
                            <td>{entry.author}</td>
                            <td className={"text-center"}>
                                <Button variant={"outline-danger"} size={"sm"} onClick={() => deleteEntry(entry)}>
                                    <i className="bi bi-trash"></i>
                                </Button>
                            </td>
                        </tr>
                    );
                } else {
                    console.warn("Entry is missing required fields:", entry);
                }
            })
        }
        return formattedRows
    }

    function clearAddLogFields() {
        setDate("")
        setTime("")
        setLocation("")
        setType("")
        setNotes("")
    }

    function clearFilterLogFields() {
        setFilterDate("")
        setFilterLocation("")
        setFilterType("")
        setFilterNote("")
        setFilterAuthor("")

        setFilterRows(false)
    }

    async function addNewLog() {
        const entry = {
            id: uuidv4(),
            date: date,
            time: time,
            location: location,
            type: type,
            notes: notes,
            author: author,
        }

        try {
            const response = await apiService.createLogbookEntry({data: entry})
            setEntries(response.data.entries)
            clearAddLogFields()
        } catch (error) {
            alert("There was an error adding the new log.")
        } finally {
            setShowAddModal(false)
        }

    }

    function handlingOpeningModal() {
        clearAddLogFields()
        setShowAddModal(true)
    }


    async function deleteEntry(entryToRemove) {
        // setEntries(prevEntries => prevEntries.filter((entry) => entry.id !== entryToRemove.id))
        try {
            const response = await apiService.removeLogbookEntry({id: entryToRemove.id})
            setEntries(response.data.entries)
        } catch (error) {
            alert("There was an error deleting the log.")
        }
    }

    function capitalizeString(str) {
        return str
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    /**
     * This function calls my backend, which also calls a 3rd party API service called OpenWeather.
     * I decided to have my backend call the api because in order to get a response I had to include my
     * api id or key in the url, which I thought it was not very safe (anyone could have copied by api key.)
     * So now my backend contains the api key on a .env file and it is in charge of calling and return a response from
     * OpenWeather API.
     */
    async function getWeather() {
        try {
            const response = await apiService.getWeatherFromBackend()
            const weatherDescription = response.data.weather[0].description
            const feelsLike = response.data.main.feels_like
            setWeatherMessge(`${feelsLike}°F - ${capitalizeString(weatherDescription)}`)
        } catch (error) {
            alert("Weather could not be loaded.")
        }
    }

    function getTime() {
        const now = new Date();
        const dateOptions = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        };

        const timeOptions = {
            hour: "numeric",
            minute: "numeric",
            hour12: true
        };

        const formattedDate = new Intl.DateTimeFormat("en-US", dateOptions).format(now);
        const formattedTime = new Intl.DateTimeFormat("en-US", timeOptions).format(now);

        return `${formattedDate} - ${formattedTime}`
    }

    async function clearEntries() {
        try {
            for (const entry of entries) {
                const response = await apiService.removeLogbookEntry({id: entry.id})
                setEntries(response.data.entries)
            }
        } catch (error) {
            alert("There was an error deleting the log.")
        }
    }

    return (
        <>
            {authState === AuthState.Authenticated ? (
                <main
                    className="container-fluid flex-grow-1 d-flex flex-column flex-wrap align-items-center justify-content-top">
                    <div className="container d-flex flex-column flex-wrap align-items-center justify-content-top">

                        <ToastContainer
                            position="top-end"
                            className={"mt-3 mx-3"}
                            style={{zIndex: 9999, position: 'fixed'}}
                        >
                            <Toast
                                onClose={() => {
                                    setShowToast(false)
                                }}
                                show={showToast}
                                autohide
                                delay={3000}
                            >
                                <Toast.Header>
                                    <strong className="me-auto">GateKeeper</strong>
                                    <small>Just now</small>
                                </Toast.Header>

                                {toastName ? (
                                    <Toast.Body>
                                        {toastName} has created a new entry in the Logbook.
                                    </Toast.Body>
                                ) : (
                                    <Toast.Body>
                                        Someone has created a new entry in the Logbook.
                                    </Toast.Body>
                                )}

                            </Toast>
                        </ToastContainer>

                        <h1>Logbook</h1>
                        <div
                            className="d-flex flex-1 flex-column flex-lg-row align-items-center justify-content-between w-100 my-3">
                            <h5>Welcome {username}</h5>

                            <h5>{ timeMessage } | { weatherMessage }</h5>

                            <button type="button" className="btn btn-primary" onClick={() => handlingOpeningModal()}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="m-1 bi bi-plus-circle"
                                     viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                    <path
                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                                </svg>
                                Add new log
                            </button>
                        </div>
                    </div>

                    <Modal
                        className="fade"
                        show={showAddModal}
                    >

                        <Modal.Header>
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add a new log</h1>
                            <button type="button" className="btn-close" onClick={() => setShowAddModal(false)}></button>
                        </Modal.Header>

                        <Modal.Body>
                            <form className="d-flex flex-column gap-3">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="date">When did this happen? </label>
                                    <input
                                        className="form-control"
                                        type="date"
                                        id="date"
                                        onChange={(e) => setDate(e.target.value)}
                                    ></input>
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="time">At what time? </label>
                                    <input
                                        className="form-control"
                                        type="time"
                                        id="time"
                                        onChange={(e) => setTime(e.target.value)}
                                    ></input>
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="location">Where did it happen? </label>
                                    <select
                                        className="form-select"
                                        name="location"
                                        id="location"
                                        onChange={(e) => setLocation(e.target.value)}
                                    >
                                        <option selected>Select an option</option>
                                        <option>Library</option>
                                        <option>Main Door</option>
                                        <option>West Offices</option>
                                        <option>Parking Lot</option>
                                        <option>Cafeteria</option>
                                        <option>Gym</option>
                                        <option>Front Desk</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="type">Select a type </label>
                                    <select
                                        className="form-select"
                                        name="type"
                                        id="type"
                                        onChange={(e) => setType(e.target.value)}
                                    >
                                        <option selected>Select an option</option>
                                        <option>Guest</option>
                                        <option>Lost/Found</option>
                                        <option>Incident</option>
                                        <option>Damage</option>
                                        <option>Maintenance</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="description">Describe the event </label>
                                    <textarea
                                        className="form-control"
                                        id="description"
                                        onChange={(e) => setNotes(e.target.value)}
                                    ></textarea>
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="author">Enter the author </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="author"
                                        value={author}
                                        onChange={(e) => setAuthor(e.target.value)}
                                    />
                                </div>
                            </form>
                        </Modal.Body>

                        <Modal.Footer>
                            <button type="button" className="btn btn-secondary" onClick={() => setShowAddModal(false)}>
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                disabled={!date || !time || !location || !type || !notes || !author}
                                onClick={() => addNewLog()}
                            >
                                Save log
                            </button>
                        </Modal.Footer>
                    </Modal>


                    <div className="rotate-message">
                        <div className="rotate-message card mt-5">
                            <div className="card-body text-bg-warning p-3">
                                <div className="d-flex flex-column align-items-center justify-content-center"></div>
                                <span>Please rotate your phone to see the logs</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/>
                                    <path
                                        d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="custom-table justify-content-between align-content-between w-100 gap-3">
                        <button className="btn btn-outline-primary" type="button" data-bs-toggle="collapse"
                                data-bs-target="#filterCollapse"
                                aria-expanded="false" aria-controls="collapseExample">
                            Filter log entries
                        </button>

                        {/* These buttons below are merely for development and testing purposes. */}
                        <div className={"d-flex gap-2"}>
                            <Button
                                variant="outline-secondary"
                                onClick={async () => {
                                    await loadTestEntries()
                                }}
                            >
                                Test entries
                            </Button>

                            <Button
                                variant="outline-danger"
                                onClick={async () => {
                                    await clearEntries()
                                }}
                            >
                                Clear entries
                            </Button>

                            <Button
                                variant="outline-secondary"
                                onClick={() => {
                                    testingWebsocket ? stopWebsocketTesting() : testWebsocket()
                                    setTestingWebsocket(!testingWebsocket)
                                }}
                            >
                                {testingWebsocket ? "Pause websocket" : "Test Websocket"}
                            </Button>
                        </div>


                    </div>

                    <div className="custom-table flex-row justify-content-between gap-5 w-100">
                        <div className="collapse collapse-horizontal justify-content-left" id="filterCollapse">
                            <div className="card my-3">
                                <div className="card-body d-flex flex-column gap-3">
                                    <form>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="filter-notes">Notes</label>
                                            <textarea
                                                className="form-control"
                                                value={filterNote}
                                                id="filter-notes"
                                                placeholder="Search log notes"
                                                onChange={(e) => setFilterNote(e.target.value)}
                                            ></textarea>
                                        </div>

                                        <div className="form-group mt-3">
                                            <label className="form-label" htmlFor="filter-date">Filter by Date: </label>
                                            <select
                                                className="form-select"
                                                name="date"
                                                id="filter-date"
                                                value={filterDate}
                                                onChange={(e) => setFilterDate(e.target.value)}
                                            >
                                                <option selected value="">All the time</option>
                                                <option value="0">Today</option>
                                                <option value="7">In the last 7 days</option>
                                                <option value="30">In the last 30 days</option>
                                                <option value="90">In the last 90 days</option>
                                                <option value="180">In the last 6 months</option>
                                            </select>
                                        </div>

                                        <div className="form-group mt-3">
                                            <label className="form-label" htmlFor="filter-location">Filter by
                                                Location: </label>
                                            <select
                                                className="form-select"
                                                name="location"
                                                id="filter-location"
                                                value={filterLocation}
                                                onChange={(e) => setFilterLocation(e.target.value)}
                                            >
                                                <option selected value="">All locations</option>
                                                <option>Library</option>
                                                <option>Main Door</option>
                                                <option>West Offices</option>
                                                <option>Parking Lot</option>
                                                <option>Cafeteria</option>
                                                <option>Gym</option>
                                                <option>Front Desk</option>
                                            </select>
                                        </div>

                                        <div className="form-group mt-3">
                                            <label className="form-label" htmlFor="filter-type">Filter by Type: </label>
                                            <select
                                                className="form-select"
                                                name="type"
                                                id="filter-type"
                                                value={filterType}
                                                onChange={(e) => setFilterType(e.target.value)}
                                            >
                                                <option selected value="">All</option>
                                                <option>Guest</option>
                                                <option>Lost/Found</option>
                                                <option>Incident</option>
                                                <option>Damage</option>
                                                <option>Maintenance</option>
                                            </select>
                                        </div>

                                        <div className="form-group mt-3">
                                            <label className="form-label" htmlFor="filter-author">Created by: </label>
                                            <input
                                                className="form-control"
                                                name="author"
                                                id="filter-author"
                                                value={filterAuthor}
                                                onChange={(e) => setFilterAuthor(e.target.value)}
                                            ></input>
                                        </div>


                                    </form>

                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={
                                            <Tooltip
                                                id="tooltip-disabled"
                                                hidden={filterRows}
                                            >
                                                Filters can only be cleared if they have been applied.
                                            </Tooltip>
                                        }
                                    >
                                    <span className="d-inline-block">
                                        <Button
                                            variant="danger"
                                            disabled={!filterRows}
                                            onClick={() => clearFilterLogFields()}
                                        >
                                            Clear filters
                                        </Button>
                                    </span>
                                    </OverlayTrigger>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-column justify-content-left w-100 mt-4 flex-grow-1">

                            <h2>Log entries</h2>

                            <div className={"my-2 text-secondary"}>
                                <h6>Total entries: {entries.length}</h6>
                                {filterRows && (
                                    <h6>Filter results: {filteredRows().length ? filteredRows().length : 0} </h6>
                                )
                                }
                            </div>

                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Time</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Notes</th>
                                    <th scope="col">Created by</th>
                                    <th scope="col">Remove</th>
                                </tr>
                                </thead>

                                <tbody>
                                {filterRows ? filteredRows() : unfilteredRows()}
                                </tbody>

                            </table>
                        </div>
                    </div>
                </main>
            ) : (
                <main
                    className="container-fluid flex-grow-1 d-flex flex-column flex-wrap align-items-center justify-content-top">
                    <h2 className={"mt-5"}>You are not authorized to see this page</h2>
                </main>
            )
            }
        </>
    )
        ;
}