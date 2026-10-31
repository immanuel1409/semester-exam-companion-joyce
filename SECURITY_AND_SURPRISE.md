# Surprise reveal and repository privacy

The repository is currently public. Anyone can inspect or download files stored here.

The post-exam congratulatory copy is part of a client-side application. Hiding the card until the scheduled final exam end is a presentation rule only; it is not a security boundary. A visitor with access to the source or deployed JavaScript can inspect the content before the reveal.

To preserve a genuine surprise:
1. Change this repository to private in GitHub Settings → General → Danger Zone → Change repository visibility.
2. Keep the complete source archive private.
3. For a public deployed app, move the final congratulatory message into a server-side function or protected content endpoint that does not return the message before the release time.
4. Ensure any deployment platform has access to the private repository through an authorized GitHub App connection.

Do not commit API keys, passwords, OAuth tokens, or other credentials.
