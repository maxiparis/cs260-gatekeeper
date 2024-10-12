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

## HTML Deliverable

For this deliverable I built out the structure of my application using HTML.

- [x] **HTML pages** - 5 HTML pages: index, login, signup, logbook, add new logbook. 
- [x] **Links** - Each page contains a navigation menu that links to all the pages. Sign up and Log in link to each other in the case user has already created an account and vice versa.
- [x] **Text** - Each of the logbooks entries is represented in a table. Examples have been included to simulate data.
- [x] **Images** - Included one image that adds style and context to the index page.
- [x] **DB** - Input box and submit button for login and signup, as well as a new log will be saved to the database. Logs will be retrieved from the database as well as users. Other things to be retrieved from database are categories and maybe names of authors (each company would have a set of authorized users).  
- [x] **WebSocket** - The records or rows in the logbook will all be populated directly from the WebSocket connection, allowing users to add, remove or edit logs and allowing everyone else in that company to see those changes without having to reload the page.

## CSS Deliverable

For this deliverable I properly styled the application into its final appearance using the Bootstrap framework.

- [x] **Header, footer, and main content body**
- [x] **Navigation elements** - I dropped the underlines and changed the color for anchor elements.
- [x] **Responsive to window resizing** - My app looks great on all window sizes and devices. I made sure to let the user know that they need to rotate their phone in order to see the table in the Logbook page. 
- [x] **Phone optimization** - I made sure every element of the app looks good on a big screen or in a small one. 
- [x] **Application elements** - Used good contrast and whitespace.
- [x] **Application text content** - Consistent and responsive fonts. 
- [x] **Application images** - Styled my image in the home page and added rounded corners.