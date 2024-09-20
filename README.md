# GateKeeper
[gatekeeper.maxiparis.com](http://gatekeeper.maxiparis.com)
## Specification Deliverable

### Elevator pitch

GateKeeper, the ultimate logbook replacement for security teams! Designed to make logging incidents easier and more
accurate, GateKeeper allows guards to quickly record and track events in real-time. No more messy paperwork or
hard-to-read entries — this app streamlines the process with powerful search and filtering features, so finding
logs by category or keyword is faster than ever. Plus, with live data updates, your entire team stays in sync,
receiving the latest information on the go, ensuring that everyone is always up to date.

### Design

![Mock](doc/images/mock.png)

### Key features

- Secure login to account and to logbooks (companies would have different logbooks)
- Tailored for security guards, law and parking enforcement officers, custodians, building and facility managers, and more.
- Ability to enter logs for any kind of need, whether it is for patrols, simple and complex bookkeeping tasks, incident reporting, equipment checks, maintenance requests, or any other operational activity.
- Logs, users, and logbooks are persistently stored.
- Log templates with required and optional fields, lists, and event categories, make the logging process faster and more accurate.
- Advanced filters and search bars eliminate the need to sift through endless pages of physical logbooks.

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Uses correct HTML structure for application. Three HTML pages. One for login and one for seeing the logs, one for entering a new log. Hyperlinks to choice artifact.
- **CSS** - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast.
- **React** - Provides login, choice display, applying votes, display other logs from other users, and use of React for routing and components.
- **Service** - Backend service with endpoints for:
    - login
    - retrieving logs
    - submitting logs
    - retrieving logbooks
- **DB/Login** - Store users, logbooks, and logs in database. Register and login users. Credentials securely stored in database. Can't see logs unless authenticated.
- **WebSocket** - As each user adds logs, their logs are sent to all other users.