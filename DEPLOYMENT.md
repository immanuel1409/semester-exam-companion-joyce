# Deploy to Cloudflare Pages

1. Sign in to Cloudflare and open Workers & Pages.
2. Select Create application, then Pages, then Connect to Git.
3. Authorize GitHub and select immanuel1409/semester-exam-companion-joyce.
4. Configure the build using the repository's package scripts. Use the documented build command and output directory from the complete source project ZIP.
5. Start deployment and wait for the Pages build to complete.
6. Open the generated pages.dev URL and test the timetable, calendar export, notes persistence, and responsive layout.

## Privacy warning

The repository currently has public visibility. Any source files pushed here can be read and downloaded publicly. Do not commit private credentials or secrets. The Joyce celebration copy is client-side content and should not be treated as confidential. For a genuinely hidden reveal, keep the source private and serve the final message from a protected server-side endpoint.

## Notification behavior

Calendar reminders are exported as an .ics calendar file. Delivery depends on importing it into a calendar app and enabling notifications there. A static website cannot guarantee notifications while closed.
