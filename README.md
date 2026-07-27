# Fieldwork — Research Dashboard

A responsive first version of the personal research and study dashboard we designed together. It runs without a build step and keeps task and note changes in your browser's local storage.

## Run it

Open `index.html` in a browser, or serve this folder with any static-file server.

## Current capabilities

- Overview for four projects and two courses
- Deadline calendar and task-progress indicators
- Project workspaces with tasks, notes, timeline, and linked resources
- Editable working notes, quick task capture, and task completion tracking
- Archive completed projects and courses while preserving their full history
- Minimal weekly overview planner for assigning morning and afternoon workspaces
- Responsive layout for phone and desktop

## Cloud sync and Google sign-in

The Supabase cloud foundation is built into the app. Follow [CLOUD_SETUP.md](CLOUD_SETUP.md) to run the secure schema, enable Google sign-in, and add your project's URL and publishable key to `supabase-config.js`.

Once connected, the dashboard loads a private per-user cloud state on sign-in and securely syncs later changes. Google sign-in requests only basic identity; it does not request access to Google Drive, Gmail, or Calendar.
