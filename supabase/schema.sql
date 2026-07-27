-- Fieldwork cloud foundation
-- Run this file in the Supabase SQL Editor before connecting the browser app.

create table if not exists public.dashboard_state (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default timezone('utc'::text, now())
);

alter table public.dashboard_state enable row level security;

drop policy if exists "Users can read their own dashboard" on public.dashboard_state;
create policy "Users can read their own dashboard"
  on public.dashboard_state for select to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "Users can create their own dashboard" on public.dashboard_state;
create policy "Users can create their own dashboard"
  on public.dashboard_state for insert to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "Users can update their own dashboard" on public.dashboard_state;
create policy "Users can update their own dashboard"
  on public.dashboard_state for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

create or replace function public.set_dashboard_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = public
as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$;

drop trigger if exists dashboard_state_updated_at on public.dashboard_state;
create trigger dashboard_state_updated_at
  before update on public.dashboard_state
  for each row execute procedure public.set_dashboard_updated_at();

-- Private research-note images. Images must be uploaded under <user-id>/...
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('project-images', 'project-images', false, 10485760, array['image/jpeg', 'image/png', 'image/webp', 'image/gif'])
on conflict (id) do update set public = false, file_size_limit = 10485760,
  allowed_mime_types = array['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

drop policy if exists "Users read their own research images" on storage.objects;
create policy "Users read their own research images"
  on storage.objects for select to authenticated
  using (bucket_id = 'project-images' and (storage.foldername(name))[1] = (select auth.uid()::text));

drop policy if exists "Users upload their own research images" on storage.objects;
create policy "Users upload their own research images"
  on storage.objects for insert to authenticated
  with check (bucket_id = 'project-images' and (storage.foldername(name))[1] = (select auth.uid()::text));

drop policy if exists "Users update their own research images" on storage.objects;
create policy "Users update their own research images"
  on storage.objects for update to authenticated
  using (bucket_id = 'project-images' and (storage.foldername(name))[1] = (select auth.uid()::text))
  with check (bucket_id = 'project-images' and (storage.foldername(name))[1] = (select auth.uid()::text));

drop policy if exists "Users delete their own research images" on storage.objects;
create policy "Users delete their own research images"
  on storage.objects for delete to authenticated
  using (bucket_id = 'project-images' and (storage.foldername(name))[1] = (select auth.uid()::text));
