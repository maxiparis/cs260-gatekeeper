import React from 'react';

export function Logbook() {
    return (
        <main className="container-fluid flex-grow-1 d-flex flex-column flex-wrap align-items-center justify-content-top">
            <div className="container d-flex flex-column flex-wrap align-items-center justify-content-top">
                <h1>Logbook</h1>
                <div className="d-flex flex-1 flex-column flex-md-row align-items-center justify-content-between w-100 my-3">
                    <h5>Welcome, user name</h5>

                    <h5>Thursday, September 12, 2024 - 11:52 am</h5>

                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
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

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add a new log</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="d-flex flex-column gap-3">
                                <div className="form-group">
                                    <label className="form-label" for="date">When did this happen? </label>
                                    <input className="form-control" type="date" id="date"></input>
                                </div>

                                <div className="form-group">
                                    <label className="form-label" for="time">At what time? </label>
                                    <input className="form-control" type="time" id="time"></input>
                                </div>

                                <div className="form-group">
                                    <label className="form-label" for="location">Where did it happen? </label>
                                    <select className="form-select" name="location" id="location">
                                        <option selected>Select an option</option>
                                        <option value="library">Library</option>
                                        <option value="main-door">Main Door</option>
                                        <option value="west-offices">West Offices</option>
                                        <option value="parking-lot">Parking Lot</option>
                                        <option value="cafeteria">Cafeteria</option>
                                        <option value="gym">Gym</option>
                                        <option value="front-desk">Front Desk</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="form-label" for="type">Select a type </label>
                                    <select className="form-select" name="type" id="type">
                                        <option selected>Select an option</option>
                                        <option value="guest">Guest</option>
                                        <option value="lost-found">Lost/Found</option>
                                        <option value="incident">Incident</option>
                                        <option value="damage">Damage</option>
                                        <option value="maintenance">Maintenance</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="form-label" for="description">Describe the event </label>
                                    <textarea className="form-control" id="description"></textarea>
                                </div>

                                <div className="form-group">
                                    <label className="form-label" for="author">Enter the author </label>
                                    <select className="form-control" name="author" id="author">
                                        <option selected>Select an option</option>
                                        <option value="allan-b">Allan B.</option>
                                        <option value="john-c">John C.</option>
                                        <option value="alicia-p">Alicia P.</option>
                                        <option value="marco-l">Marco L.</option>
                                        <option value="jessica-m">Jessica M.</option>
                                        <option value="sarah-k">Sarah K.</option>
                                        <option value="tom-g">Tom G.</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save log</button>
                        </div>
                    </div>
                </div>
            </div>

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

            <div className="custom-table justify-content-left w-100">
                <button className="btn btn-outline-primary" type="button" data-bs-toggle="collapse" data-bs-target="#filterCollapse"
                        aria-expanded="false" aria-controls="collapseExample">
                    Filter log entries
                </button>
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
                        <tr>
                            <td>9/11/2024</td>
                            <td>10:15 AM</td>
                            <td>Library</td>
                            <td>Guest</td>
                            <td>John Doe entered without card id.</td>
                            <td>Allan B.</td>
                        </tr>
                        <tr>
                            <td>9/9/2024</td>
                            <td>3:45 PM</td>
                            <td>Main Door</td>
                            <td>Lost/Found</td>
                            <td>Jenny R. found a black leather wallet in the bathroom</td>
                            <td>John C.</td>
                        </tr>
                        <tr>
                            <td>8/2/2024</td>
                            <td>2:30 PM</td>
                            <td>West Offices</td>
                            <td>Incident</td>
                            <td>Someone was seen through the cameras stealing. Reported to police.</td>
                            <td>Alicia P.</td>
                        </tr>
                        <tr>
                            <td>7/19/2024</td>
                            <td>8:20 AM</td>
                            <td>Parking Lot</td>
                            <td>Damage</td>
                            <td>A car was hit in the lot with no note left behind.</td>
                            <td>Marco L.</td>
                        </tr>
                        <tr>
                            <td>6/25/2024</td>
                            <td>1:00 PM</td>
                            <td>Cafeteria</td>
                            <td>Maintenance</td>
                            <td>A broken chair was reported near table 5.</td>
                            <td>Jessica M.</td>
                        </tr>
                        <tr>
                            <td>5/10/2024</td>
                            <td>4:45 PM</td>
                            <td>Gym</td>
                            <td>Incident</td>
                            <td>A gym member reported a malfunctioning treadmill.</td>
                            <td>Sarah K.</td>
                        </tr>
                        <tr>
                            <td>4/1/2024</td>
                            <td>9:30 AM</td>
                            <td>Front Desk</td>
                            <td>Guest</td>
                            <td>A visitor arrived without prior registration.</td>
                            <td>Tom G.</td>
                        </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </main>
    );
}