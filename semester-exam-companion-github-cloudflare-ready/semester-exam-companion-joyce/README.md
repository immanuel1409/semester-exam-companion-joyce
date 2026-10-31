# Semester Exam Companion — Complete Source Project

A standalone, mobile-friendly exam planner built from the supplied handwritten timetable. This bundle contains the full working app and its assets, not just the HTML page.

## Start here

1. Extract the ZIP archive.
2. Open `index.html` in a modern browser. The app uses local CSS and JavaScript files and does not require a build step or third-party runtime library.
3. For a more realistic hosted preview, serve this folder through any static web server (for example `python -m http.server 8000`) and visit `http://localhost:8000`.

## Included files

- `index.html` — page structure and application interface.
- `assets/css/styles.css` — full visual system, responsive layout, print styles and celebration card styling.
- `assets/js/app.js` — countdowns, schedule logic, search/filters, briefings, checklists, saved notes, calendar export and the timed Joyce messages.
- `data/exams.json` — complete machine-readable transcription of the 11 timetable entries.
- `data/timetable.csv` — spreadsheet-friendly schedule.
- `data/daily-wishes.json` — reference catalogue of the subject-themed daily wishes and prayers.
- `docs/PROJECT_SPEC.md` — complete feature and behavior specification.
- `docs/CONTENT_CATALOG.md` — daily encouragement content and the after-exam message/prayer/blessings.
- `docs/INSTALLATION_AND_LIMITATIONS.md` — setup, local data, calendar alert and hosting notes.
- `docs/CHANGELOG.md` — change history from the initial timetable app through the daily-wish update.
- `reference/handwritten-exam-timetable.jpg` — the user-provided timetable image used as the source reference.
- `scripts/validate-project.mjs` — basic content and integrity checks.
- `package.json` — dependency-free check scripts.

## App features

- Dashboard with live Nigeria-local clock, next exam, countdown, course/venue details and progress.
- All eleven exams grouped by week, with status labels and course/date/venue search.
- Full exam briefings, preparation checklist, suggested day-before and two-hour-before routine, and arrival recommendation.
- Reusable packing checklist, per-exam notes and global study notes saved in the browser's local storage on that device.
- Single-exam and all-remaining calendar (`.ics`) export, containing one-day and two-hour alarms. The last paper also has a neutral end-time reminder which does not reveal the hidden celebration text.
- Search/filter controls, print support, narrow-screen layout and keyboard dismissible briefing modal.
- A subject-based wish and Christian prayer shown for the currently upcoming exam, a different final-paper-day encouragement before the last paper ends, and a separate congratulations/wish/prayer/blessings message displayed only after MTH121's scheduled end.

## Calendar/notification note

This is a standalone static project, not a live hosted website. Import the downloaded `.ics` calendar file into a compatible calendar application to use its reminders. Actual alert delivery depends on that calendar app and device notification settings. Browser-local notes and checklist state are not synchronized across devices and may be removed if browser site data is cleared.

The full surprise text exists in the local JavaScript source because this is a static client-side app; the normal visible interface does not preview it before the scheduled end time. Keep the source ZIP private if you do not want Joyce to read the message early.

## Important accuracy note

The schedule is a transcription of the provided handwritten timetable, not an independently verified university notice. Past dates are labelled as past dates; this does not imply the app knows whether a paper was attended or completed. The app displays WAT (Africa/Lagos, UTC+1). Generic equipment guidance is not an official syllabus or permission to bring an item; use official instructions and lecturer guidance.


## Build and publish

- Run checks: `npm run check && npm run validate`
- Build a minimal deployment bundle: `npm run build` (output goes to `dist/`)
- For deployment from a private GitHub repo to a public URL, follow [`docs/DEPLOYMENT_CLOUDFLARE.md`](docs/DEPLOYMENT_CLOUDFLARE.md).
