# Installation, Use and Limitations

## Open locally

The simplest method is to extract the ZIP and open `index.html` in a modern browser. The page references `assets/css/styles.css` and `assets/js/app.js` relatively, so keep the project folder structure intact.

For a local web-server preview, run from the project root:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`. If Python is not installed, use any static web server or static-hosting provider.

## Phone use

On Android, extract the files using a file manager and open `index.html` in a browser if your environment permits local file viewing. Because local-file behavior differs between browsers, using a static web host is the more reliable way to access all project files through a normal URL. No public URL is included in this source-only delivery.

## Calendar reminders

1. Open the app and select “Export .ics” / “Add to calendar”.
2. Import the generated `.ics` into a calendar app that supports iCalendar events and alarms.
3. Confirm notification permissions and reminder settings in that calendar app.

Each remaining exam event includes alarms one day before and two hours before its start. MTH121 has a neutral alarm associated with the event end; some calendar clients may ignore or alter end-relative alarms. The app does not itself guarantee push delivery while closed.

## Local storage

Study notes and preparation checklists are stored in the current browser/device local storage. They do not sync to other devices, and clearing browser data can remove them. Keep your own backup of important notes.

## Privacy and surprise

The app sends no schedule data to a server by itself. The final congratulatory content is kept out of the initial visible UI and only becomes visible after the programmed final-paper end time. However, because this is client-side source, a person with the source ZIP or developer tools can inspect JavaScript and read text ahead of time. Do not give Joyce the source bundle if you want to keep the message as a surprise; share only a deployed site URL once you choose a host.

## Important exam information

The dates, courses, times, week numbers and venue were transcribed from the supplied handwritten photo. The app is not an official university source. Always consult official department/university instructions for changes, entry requirements, venue details and permitted stationery/equipment.


## Hosting from a private repository

The project now includes a static build script and GitHub Actions validation workflow. For a public shareable URL while keeping the repository private, use Cloudflare Pages Git integration with build command `npm run build` and output directory `dist`. See `DEPLOYMENT_CLOUDFLARE.md`. Creating a new GitHub repository and authorizing Cloudflare still require the account owner to complete the corresponding dashboard steps; this environment's GitHub tool does not provide repository creation.
