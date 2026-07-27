# Connect Fieldwork to Supabase

The app stores a user's complete dashboard as one private, versioned cloud state. This keeps the first cloud deployment simple while preserving every current workspace, task, note, archive entry, and weekly-plan choice. A later upgrade can split it into individual project tables without changing the user experience.

## 1. Create the project and schema

1. Create a new Supabase project in a region appropriate for your research data.
2. Open **SQL Editor**, create a new query, paste the contents of [`supabase/schema.sql`](supabase/schema.sql), and run it.
3. In **Project Settings → API**, copy the Project URL and **publishable** key into `supabase-config.js`.

Never use or expose a `service_role` key in this project. The browser only uses the publishable key; row-level-security rules in the SQL file restrict every row and image to its signed-in owner.

## 2. Enable Google sign-in

1. Create a Google OAuth web client in Google Cloud Console.
2. Add this authorized redirect URI in Google: `https://<your-project-ref>.supabase.co/auth/v1/callback`.
3. In Supabase, open **Authentication → Providers → Google**, enable it, and paste the Google client ID and client secret.
4. In **Authentication → URL Configuration**, set your deployed dashboard URL as the Site URL and add it to Additional Redirect URLs.

The app requests Google identity only; it does not request Drive, Gmail, or Calendar access.

## 3. Deploy the static app

Deploy this folder to a static host over HTTPS. Add that exact HTTPS URL to Supabase's allowed redirect URLs. Do not use `file://` when testing Google sign-in.

## What happens after sign-in

On the first successful login, the dashboard currently saved in the browser is copied into your private `dashboard_state` row. Later changes save locally first and then sync to that row after a short delay. When you sign in from a second device, it loads the private cloud version.

The `project-images` bucket is private and accepts JPEG, PNG, WebP, and GIF images up to 10 MB. Its UI uploader is the next feature to wire into note pages.
