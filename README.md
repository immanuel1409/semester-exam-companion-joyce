# Semester Exam Companion — Joyce Edition

A mobile-friendly semester exam planner for the supplied 11-paper timetable, with subject-themed daily wishes and prayers, exam briefings, preparation checklists, personal notes, countdowns, and calendar export.

## Live app

**Production site:** https://semester-exam-companion-joyce.vercel.app/

The site is deployed on Vercel and linked to this GitHub repository. The Vercel build extracts the complete project from `semester-exam-companion-github-cloudflare-ready.zip`, runs its static build script, and publishes the generated `dist` directory. Pushes to `main` trigger the connected Git deployment.

## Timetable

All exams are scheduled at ICT, Nigeria time (Africa/Lagos).

| Course | Date | Time | Week |
|---|---|---|---:|
| GLT121 | Fri 23 Oct 2026 | 11:30 AM–2:30 PM | 1 |
| CHM121 | Tue 27 Oct 2026 | 8:00 AM–11:00 AM | 2 |
| BIO122 | Wed 28 Oct 2026 | 8:00 AM–11:00 AM | 2 |
| CHM102 | Fri 30 Oct 2026 | 3:00 PM–6:00 PM | 2 |
| GST121 | Mon 2 Nov 2026 | 8:00 AM–11:00 AM | 3 |
| GST124 | Tue 3 Nov 2026 | 8:00 AM–11:00 AM | 3 |
| GLT122 | Fri 6 Nov 2026 | 8:00 AM–11:00 AM | 3 |
| BIO125 | Fri 6 Nov 2026 | 3:00 PM–6:00 PM | 3 |
| PHY127 | Sat 7 Nov 2026 | 11:30 AM–2:30 PM | 3 |
| PHY121 | Tue 10 Nov 2026 | 8:00 AM–11:00 AM | 4 |
| MTH121 | Fri 13 Nov 2026 | 8:00 AM–11:00 AM | 4 |

## Features

- Next-exam countdown and timetable grouped by week.
- Individual exam briefings, packing checklist and recommended early arrival.
- Search and status filters.
- Personal notes and checklist persistence in the browser.
- Calendar (.ics) export with reminders one day and two hours before each exam.
- Subject-themed daily wishes and prayers that change with the next paper.
- A distinct final-paper-day message and a separate post-exam congratulations, prayer and blessings for Joyce Ayenajeh.
- Print-friendly schedule and responsive layout.

## Final celebration timing

The full celebration is revealed in the app after the scheduled end of the final paper, MTH121, on Friday 13 November 2026 at 11:00 AM Africa/Lagos time. This is based on the timetable, not a live signal that the candidate has physically finished writing.

## Privacy and surprise

This repository is currently public. Client-side content, including messages embedded in front-end source, can be inspected by anyone who can download the source or access the deployed assets. The app hides the celebration in its normal interface until the scheduled time, but this does not make the message secret from someone inspecting the code. For a genuinely private reveal, move the final message to a server-side endpoint with an unlock check and keep the source repository private.

Personal notes and checklist selections are stored in the browser on that device; they are not synced to a cloud account.

## Run locally

Download and extract the complete source ZIP while preserving its folder structure. From the extracted project directory, run:

```bash
npm run check
npm run validate
npm run build
npm run serve
```

Then open http://localhost:8000.

## Deployment

The connected Vercel project is named `semester-exam-companion-joyce`. The production deployment is published at the live-app address above. The build command extracts the uploaded ZIP into `.buildsrc/` and runs `scripts/build.mjs`; the published output directory is `.buildsrc/semester-exam-companion-joyce/dist`.

Calendar alarms are included in the exported `.ics` file. Delivery depends on the user's calendar app and its notification permissions. The browser app itself does not guarantee alerts while it is closed.

## Important

The exam kit suggestions are prompts to check against official university/exam instructions; they do not replace lecturer or invigilator rules. The timetable data must be confirmed against the institution's official schedule before use.
