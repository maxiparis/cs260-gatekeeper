import React from 'react';
import {useEffect} from "react";
import {FIRSTNAME_KEY, LOGBOOK_ENTRIES_KEY, testLogbookEntries} from "../constants";
import {Button, Col, Modal, Row} from "react-bootstrap";
import modal from "bootstrap/js/src/modal";

export function Logbook({ username }) {
    const [entries, setEntries] = React.useState([]);
    const [showAddModal, setShowAddModal] = React.useState(false);


    //Fields for new entry modal
    const [date, setDate] = React.useState("");
    const [time, setTime] = React.useState("");
    const [location, setLocation] = React.useState("");
    const [type, setType] = React.useState("");
    const [notes, setNotes] = React.useState("");
    const [author, setAuthor] = React.useState("");

    // Watch for changes to any of the states
    useEffect(() => {
        console.log("\n Updated values:");
        console.log("Date:", date);
        console.log("Time:", time);
        console.log("Location:", location);
        console.log("Type:", type);
        console.log("Notes:", notes);
        console.log("Author:", author);
    }, [date, time, location, type, notes, author]); // Dependency array that listens for updates to any of these states


    const emptyRow = (
        <tr>
            <td
                colSpan={6}
                className="text-center"
            >
                There are no log entries.
            </td>
        </tr>
    )

    useEffect(() => {
        loadEntries()
    }, []) //will run everytime this is rendered when loaded

    //TODO: useEffect to retrieve as soon as we start
    function loadEntries() {
        const loadedEntries = getEntries()

        //todo: use localStorage?
        setEntries(loadedEntries);
    }

    function getEntries() {
        //this simulates a call to the backend api and receiving as answer an empty array (there are not entries)
        //for now I will only use the localStorage
        const loadedEntries = localStorage.getItem(LOGBOOK_ENTRIES_KEY)
        if (loadedEntries) {
            return JSON.parse(loadedEntries)
        } else {
            return []
        }
    }

    function loadTestEntries() {
        setEntries(testLogbookEntries)
    }

    function formattedRows() {
        const formattedRows = []
        if (entries.length > 0) {
            entries.forEach(entry => {
                const hasRequiredFields =
                    "date" in entry &&
                    "time" in entry &&
                    "location" in entry &&
                    "type" in entry &&
                    "notes" in entry &&
                    "createdBy" in entry

                if (hasRequiredFields) {
                    formattedRows.push(
                        <tr key={`${entry.date}-${entry.time}`}>
                            <td>{entry.date}</td>
                            <td>{entry.time}</td>
                            <td>{entry.location}</td>
                            <td>{entry.type}</td>
                            <td>{entry.notes}</td>
                            <td>{entry.createdBy}</td>
                        </tr>
                    );
                } else {
                    console.warn("Entry is missing required fields:", entry);
                }
            })
        }



        return formattedRows
    }

    function addNewLog() {
        const entry = {
            date: date,
            time: time,
            location: location,
            type: type,
            notes: notes,
            createdBy: author,
        }

        entries.push(entry)
        setEntries(entries)
        setShowAddModal(false)

        // localStorage.setItem(LOGBOOK_ENTRIES_KEY, JSON.stringify(entry))
    }

    return (
        <main className="container-fluid flex-grow-1 d-flex flex-column flex-wrap align-items-center justify-content-top">
            <div className="container d-flex flex-column flex-wrap align-items-center justify-content-top">
                <h1>Logbook</h1>
                <div className="d-flex flex-1 flex-column flex-md-row align-items-center justify-content-between w-100 my-3">
                    <h5>Welcome {username}</h5>

                    <h5>Thursday, September 12, 2024 - 11:52 am</h5>

                    <button type="button" className="btn btn-primary" onClick={ () => setShowAddModal(true) }>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="m-1 bi bi-plus-circle"
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
                        onClick={() => addNewLog()}
                    >
                        Save log
                    </button>
                </Modal.Footer>
            </Modal>

            {/*<div className="modal fade" id="addEntryModal" tabIndex="-1" aria-labelledby="exampleModalLabel"*/}
            {/*     aria-hidden="true">*/}
            {/*    <div className="modal-dialog">*/}
            {/*        <div className="modal-content">*/}
            {/*            <div className="modal-header">*/}
            {/*                <h1 className="modal-title fs-5" id="exampleModalLabel">Add a new log</h1>*/}
            {/*                <button type="button" className="btn-close" data-bs-dismiss="modal"*/}
            {/*                        aria-label="Close"></button>*/}
            {/*            </div>*/}
            {/*            <div className="modal-body">*/}
            {/*                <form className="d-flex flex-column gap-3">*/}
            {/*                    <div className="form-group">*/}
            {/*                        <label className="form-label" htmlFor="date">When did this happen? </label>*/}
            {/*                        <input*/}
            {/*                            className="form-control"*/}
            {/*                            type="date"*/}
            {/*                            id="date"*/}
            {/*                            onChange={(e) => setDate(e.target.value)}*/}
            {/*                        ></input>*/}
            {/*                    </div>*/}

            {/*                    <div className="form-group">*/}
            {/*                        <label className="form-label" htmlFor="time">At what time? </label>*/}
            {/*                        <input*/}
            {/*                            className="form-control"*/}
            {/*                            type="time"*/}
            {/*                            id="time"*/}
            {/*                            onChange={(e) => setTime(e.target.value)}*/}
            {/*                        ></input>*/}
            {/*                    </div>*/}

            {/*                    <div className="form-group">*/}
            {/*                        <label className="form-label" htmlFor="location">Where did it happen? </label>*/}
            {/*                        <select*/}
            {/*                            className="form-select"*/}
            {/*                            name="location"*/}
            {/*                            id="location"*/}
            {/*                            onChange={(e) => setLocation(e.target.value)}*/}
            {/*                        >*/}
            {/*                            <option selected>Select an option</option>*/}
            {/*                            <option>Library</option>*/}
            {/*                            <option>Main Door</option>*/}
            {/*                            <option>West Offices</option>*/}
            {/*                            <option>Parking Lot</option>*/}
            {/*                            <option>Cafeteria</option>*/}
            {/*                            <option>Gym</option>*/}
            {/*                            <option>Front Desk</option>*/}
            {/*                        </select>*/}
            {/*                    </div>*/}

            {/*                    <div className="form-group">*/}
            {/*                        <label className="form-label" htmlFor="type">Select a type </label>*/}
            {/*                        <select*/}
            {/*                            className="form-select"*/}
            {/*                            name="type"*/}
            {/*                            id="type"*/}
            {/*                            onChange={(e) => setType(e.target.value)}*/}
            {/*                        >*/}
            {/*                            <option selected>Select an option</option>*/}
            {/*                            <option>Guest</option>*/}
            {/*                            <option>Lost/Found</option>*/}
            {/*                            <option>Incident</option>*/}
            {/*                            <option>Damage</option>*/}
            {/*                            <option>Maintenance</option>*/}
            {/*                        </select>*/}
            {/*                    </div>*/}

            {/*                    <div className="form-group">*/}
            {/*                        <label className="form-label" htmlFor="description">Describe the event </label>*/}
            {/*                        <textarea*/}
            {/*                            className="form-control"*/}
            {/*                            id="description"*/}
            {/*                            onChange={(e) => setNotes(e.target.value)}*/}
            {/*                        ></textarea>*/}
            {/*                    </div>*/}

            {/*                    <div className="form-group">*/}
            {/*                        <label className="form-label" htmlFor="author">Enter the author </label>*/}
            {/*                        <input*/}
            {/*                            className="form-control"*/}
            {/*                            type="text"*/}
            {/*                            id="author"*/}
            {/*                            onChange={(e) => setAuthor(e.target.value)}*/}
            {/*                        />*/}
            {/*                    </div>*/}
            {/*                </form>*/}
            {/*            </div>*/}
            {/*            <div className="modal-footer">*/}
            {/*                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>*/}
            {/*                <button*/}
            {/*                    type="button"*/}
            {/*                    className="btn btn-primary"*/}
            {/*                    onClick={() => addNewLog()}*/}
            {/*                >*/}
            {/*                Save log*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="rotate-message">
                <div className="rotate-message card mt-5">
                    <div className="card-body text-bg-warning p-3">
                        <div className="d-flex flex-column align-items-center justify-content-center"></div>
                        <span>Please rotate your phone to see the logs</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                            <path d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/>
                            <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div className="custom-table justify-content-left w-100 gap-3">
                <button className="btn btn-outline-primary" type="button" data-bs-toggle="collapse" data-bs-target="#filterCollapse"
                        aria-expanded="false" aria-controls="collapseExample">
                    Filter log entries
                </button>

                {/* These two buttons are merely for development and testing purposes. */}
                <Button
                    variant="outline-secondary"
                    onClick={() => { loadTestEntries() }}
                >
                    Test entries
                </Button>

                <Button
                    variant="outline-danger"
                    onClick={() => {
                        setEntries([])
                        localStorage.setItem(LOGBOOK_ENTRIES_KEY, JSON.stringify([]))
                    }}
                >
                    Clear entries
                </Button>
            </div>

            <div className="custom-table flex-column flex-sm-row justify-content-between gap-5 w-100">
                <div className="collapse collapse-horizontal justify-content-left" id="filterCollapse">
                    <div className="card my-3">
                        <div className="card-body">
                            <form method="get" action="">

                                <div className="form-group">
                                    <label className="form-label" for="filter-notes">Notes</label>
                                    <textarea className="form-control" id="filter-notes" placeholder="Search log notes"></textarea>
                                </div>

                                <div className="form-group mt-3">
                                    <label className="form-label" for="filter-date">Filter by Date: </label>
                                    <select className="form-select" name="date" id="filter-date">
                                        <option selected value="all">All the time</option>
                                        <option value="today">Today</option>
                                        <option value="last7">In the last 7 days</option>
                                        <option value="last30">In the last 30 days</option>
                                        <option value="last90">In the last 90 days</option>
                                        <option value="last6">In the 6 months</option>
                                    </select>
                                </div>

                                <div className="form-group my-4">
                                    <label className="form-label">Filter by Time:</label>
                                    <ul className="list-unstyled">
                                        <li>
                                            <label className="form-label" for="filter-startTime">After</label>
                                            <input className="form-control" type="time" id="filter-startTime" value="00:00"></input>
                                        </li>
                                        <li>
                                            <label className="form-label" for="filter-endTime">Before</label>
                                            <input className="form-control" type="time" id="filter-endTime" value="23:59"></input>
                                        </li>
                                    </ul>
                                </div>

                                <div className="form-group mt-3">
                                    <label className="form-label" for="filter-location">Filter by Location: </label>
                                    <select className="form-select" name="location" id="filter-location">
                                        <option selected value="all">All locations</option>
                                        <option value="">Library</option>
                                        <option value="">Main Door</option>
                                        <option value="">West Offices</option>
                                        <option value="">Parking Lot</option>
                                        <option value="">Cafeteria</option>
                                        <option value="">Gym</option>
                                        <option value="">Front Desk</option>
                                    </select>
                                </div>

                                <div className="form-group mt-3">
                                    <label className="form-label" for="filter-type">Filter by Type: </label>
                                    <select className="form-select" name="type" id="filter-type">
                                        <option selected value="all">All</option>
                                        <option value="guest">Guest</option>
                                        <option value="lost">Lost/Found</option>
                                        <option value="incident">Incident</option>
                                        <option value="damage">Damage</option>
                                        <option value="maintenance">Maintenance</option>
                                    </select>
                                </div>

                                <div className="form-group mt-3">
                                    <label className="form-label" for="filter-author">Created by: </label>
                                    <select className="form-select" name="author" id="filter-author">
                                        <option value="allanb">Allan B.</option>
                                        <option value="johnc">John C.</option>
                                        <option value="aliciap">Alicia P.</option>
                                        <option value="marcol">Marco L.</option>
                                        <option value="jessicam">Jessica M.</option>
                                        <option value="sarahk">Sarah K.</option>
                                        <option value="tomg">Tom G.</option>
                                    </select>
                                </div>

                                <button className="btn btn-success mt-3" type="submit">Filter logs</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-left w-100 mt-4 flex-grow-1">

                    <h2>Log entries</h2>

                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                            <th scope="col">Location</th>
                            <th scope="col">Type</th>
                            <th scope="col">Notes</th>
                            <th scope="col">Created by</th>
                        </tr>
                        </thead>

                        <tbody>
                        {entries.length === 0 ? (
                            emptyRow
                        ) : (
                            formattedRows()
                        )
                        }

                        </tbody>

                    </table>
                </div>
            </div>
        </main>
    );
}