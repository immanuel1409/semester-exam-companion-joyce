# Complete Project Specification

## 1. Purpose and ownership context

**Product:** Semester Exam Companion — Joyce Edition.

**Purpose:** Convert the handwritten semester examination timetable into a personal, mobile-friendly planner with countdowns, practical briefings, preparation checklists, editable notes, downloadable calendar events, and a subject-themed encouragement system for Joyce Ayenajeh.

**Project separation:** This is a standalone project. It is not a modification, replacement or merge of Birthday Moments or any birthday-surprise project.

**Primary time zone:** `Africa/Lagos`, displayed as West Africa Time (WAT, UTC+1). Scheduled timestamps are interpreted in Nigeria local time.

## 2. Timetable source and exact data

The reference photo is included at `reference/handwritten-exam-timetable.jpg`. The 11 schedule entries are reproduced in `data/exams.json` and `data/timetable.csv` and are implemented in the app logic.

| SN | Course | Date | Time (WAT) | Week | Venue |
|---:|---|---|---|---:|---|
| 1 | GLT121 | Friday, 23 October 2026 | 11:30 AM–2:30 PM | 1 | ICT |
| 2 | CHM121 | Tuesday, 27 October 2026 | 8:00 AM–11:00 AM | 2 | ICT |
| 3 | BIO122 | Wednesday, 28 October 2026 | 8:00 AM–11:00 AM | 2 | ICT |
| 4 | CHM102 | Friday, 30 October 2026 | 3:00 PM–6:00 PM | 2 | ICT |
| 5 | GST121 | Monday, 2 November 2026 | 8:00 AM–11:00 AM | 3 | ICT |
| 6 | GST124 | Tuesday, 3 November 2026 | 8:00 AM–11:00 AM | 3 | ICT |
| 7 | GLT122 | Friday, 6 November 2026 | 8:00 AM–11:00 AM | 3 | ICT |
| 8 | BIO125 | Friday, 6 November 2026 | 3:00 PM–6:00 PM | 3 | ICT |
| 9 | PHY127 | Saturday, 7 November 2026 | 11:30 AM–2:30 PM | 3 | ICT |
| 10 | PHY121 | Tuesday, 10 November 2026 | 8:00 AM–11:00 AM | 4 | ICT |
| 11 | MTH121 | Friday, 13 November 2026 | 8:00 AM–11:00 AM | 4 | ICT |

All listed papers are shown as three hours, based on the times in the photo. All venues are ICT as written. The schedule should be cross-checked against the official department or university notice in case it changes.

## 3. Main interface and design

- Calm purple/indigo visual identity with clear contrast, soft gradients, cards and responsive spacing.
- Desktop sidebar navigation; compact mobile navigation.
- Dashboard hero, current local date, live WAT clock, number of scheduled papers, past dates and remaining papers.
- Next-exam panel with course, date, time, venue, live countdown, briefing action and single-event calendar export.
- Quick logistics briefing, progress bar, upcoming papers and calendar reminder note.
- Separate views for Exam timetable, Exam briefings and Preparation kit.
- Search for course code/date/day/venue and filter by status or week.
- Accessible button labels, visible keyboard focus, modal backdrop, Escape-key close, semantic headings, and live notification/toast status where implemented.
- Print-friendly styling.

## 4. Status logic

The app computes status from current runtime time in `Africa/Lagos`, not a fixed hard-coded current date. Statuses include past date, in progress, today, tomorrow and upcoming. The timetable itself is not rewritten when a date becomes past. A past-date label does not imply the app knows whether the paper was attended or completed.

Countdowns point to the next paper whose scheduled end is still in the future. When no remaining paper exists, the app shows an all-scheduled-papers-ended state.

## 5. Exam briefing content

Each course's detail view contains:
- Date, start/end time, three-hour schedule duration and venue.
- Saved checklist with official-instructions confirmation, student ID/exam slip, approved stationery, permitted equipment, travel plan and revision materials.
- Suggested preparation timeline: day before; two hours before; aim to arrive 30 minutes before start; follow invigilator instructions.
- A course-code-based general equipment note (e.g., calculator for CHM/PHY/MTH only if permitted/required, drawing tools for BIO only if required). These suggestions are not official rules or syllabus guidance.
- User-editable personal notes for each course.

The reusable preparation kit includes an overall checklist and personal study notes. The app saves these in browser local storage on the current device/browser. A reset control clears reusable checklist items after confirmation; clear-notes clears personal notes after confirmation.

## 6. Calendar export and reminder handling

- Export one exam event or all future/remaining events as `.ics`.
- Calendar events carry timezone `Africa/Lagos`, venue, start/end times and a short logistics description.
- Each exported exam event includes alarms one day before and two hours before the scheduled start.
- MTH121 has a neutral end-relative alarm that says its scheduled time has ended and invites the user to open the companion. It does not place the concealed congratulatory content in the calendar file.
- Some calendar clients ignore end-relative alarms or interpret them differently. Actual alert delivery requires a compatible calendar application and enabled notifications.
- The app itself does not claim reliable push notification delivery while closed.

## 7. Daily subject-themed messages for Joyce

The app chooses the next paper whose scheduled end is still in the future, and renders the paired wish and Christian prayer in `data/daily-wishes.json` and the corresponding in-app logic. When there are multiple exams on a single day, the message can change after the earlier paper's scheduled end to match the next paper. The wishes are motivational and based on subject themes; they do not claim knowledge of the course syllabus.

| Course | Theme |
|---|---|
| GLT121 | Understanding, confidence and focus |
| CHM121 | Chemistry, accuracy and clear thinking |
| BIO122 | Growth, understanding and recall |
| CHM102 | Careful reasoning and a balanced approach |
| GST121 | Knowledge, wisdom and thoughtful answers |
| GST124 | Clear expression and understanding |
| GLT122 | Confidence, perseverance and progress |
| BIO125 | Connecting concepts and remembering details |
| PHY127 | Problem-solving, precision and patience |
| PHY121 | Clear reasoning and accurate calculations |
| MTH121 | Mathematical reasoning, confidence and a steady mind |

## 8. Final-paper-day and after-exam content logic

The final scheduled paper is MTH121 on Friday, 13 November 2026, 8:00 AM–11:00 AM WAT.

1. **Before the final-paper date:** ordinary subject-based encouragement for the next scheduled paper is displayed. The initial visible card does not mention that another message is waiting or reveal the final content.
2. **On the final-paper date until 11:00 AM WAT:** the app shows normal exam-day encouragement and a prayer for the MTH121 paper, not the final celebration.
3. **After 11:00 AM WAT on 13 November 2026:** the app changes to a separate message with congratulations addressed to Joyce Ayenajeh, a heartfelt wish, a Christian prayer while awaiting results and blessings for the next chapter. The blessing includes Numbers 6:24–26 (KJV).
4. The phase is computed again while the app is open and when the page is opened, so a user returning after the scheduled end sees the after-exam state.
5. The schedule cannot verify when Joyce physically finishes. Reveal timing follows the timetable's programmed end time.
6. Static client-side source text can be inspected by anyone with access to the source files; the surprise is hidden in the ordinary visible interface, not encrypted against a developer inspecting the project.

## 9. Final message intent

The final moment congratulates Joyce on reaching the end of her scheduled timetable; wishes her peace, good results and opportunities; prays for calm while awaiting results, health, strength, wise direction and future opportunities; and closes with blessings including Numbers 6:24–26 (KJV). The content remains in the client source for the timed in-app reveal and is not duplicated in a visible calendar-event description.

## 10. Technical architecture

- No framework, build pipeline, database or paid service dependency is required.
- `index.html` contains the interface markup.
- `assets/css/styles.css` contains styling and responsive rules.
- `assets/js/app.js` contains the runtime logic and content.
- `data/` contains exportable schedule and message reference data, plus CSV for spreadsheet software.
- `scripts/validate-project.mjs` checks the static package's core integrity.
- Browser local storage stores notes and checklist state. This is browser/device-local data, not a cloud account or cross-device synchronization.

## 11. Known constraints

- The project is a downloadable standalone web app, not currently a hosted service. Public sharing requires static hosting.
- Automatic reminders after the browser closes are delegated to an imported calendar event; delivery is controlled by the calendar application/device.
- There is no server-side login or sync.
- Official syllabus topics, exam regulations and equipment permissions are not invented. Confirm them with the lecturer/department.
- Calendar clients differ in handling timezone and end-relative alarms; test after importing to the target calendar.
