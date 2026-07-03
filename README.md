# SSG Attendance System

A web application for a student government (SSG) organization to manage student attendance, events, and dashboards, with role-based access for Students, Teachers/Moderators, and Administrators.

## Features

- User registration and login with role selection (Student, Teacher, Admin)
- Attendance roster with add, edit, remove, and status toggling (Admin/Teacher only)
- Dynamic event calendar with add/delete event support
- Dashboard stats: total students, attendance rate, and monthly events
- Editable user profiles

## Tech Stack

- HTML5, CSS3, JavaScript (vanilla, no frameworks)
- Data is stored in the browser's `localStorage` — no backend or database required

## How to Run

No installation or build step is needed.

1. Clone or download this repository.
2. Open `index.html` directly in a web browser.
3. Register a new account via the **Register** link, choosing a role:
   - **Student** — view your own attendance record
   - **Teacher / Moderator** or **System Administrator** — manage the full student roster and event calendar
4. Log in with the account you created.

Since data is stored per-browser, it will persist across visits on the same browser but won't sync across devices.
