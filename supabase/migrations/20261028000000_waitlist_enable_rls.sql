-- Vamoose: lock down public.waitlist (RLS currently reported OFF).
-- DRAFT - DO NOT APPLY without Chad's go. Not applied to any database.
--
-- Access model (from app/api/waitlist/route.ts):
--   * The only writer is the Next.js server route, which uses SUPABASE_SERVICE_ROLE_KEY.
--   * No client code reads or writes waitlist with the anon/publishable key.
--   * The keep-alive workflow hits /rest/v1/ root only (no table), so it is unaffected.
-- Therefore: anon and authenticated get NO access; service_role keeps full access
-- (service_role bypasses RLS, so no policy is needed for it).

begin;

alter table public.waitlist enable row level security;
alter table public.waitlist force row level security;  -- applies to table owner too (service_role still bypasses)

-- Remove the default PostgREST grants so the table is not exposed to the public API at all.
revoke all on table public.waitlist from anon, authenticated;

-- Explicit deny-by-default documentation policy (no rows visible/writable to API roles).
-- With RLS on and no permissive policy, anon/authenticated are already denied; this
-- restrictive policy makes the intent explicit and survives an accidental re-grant.
drop policy if exists waitlist_no_public_access on public.waitlist;
create policy waitlist_no_public_access
  on public.waitlist
  as restrictive
  for all
  to anon, authenticated
  using (false)
  with check (false);

commit;

-- ROLLBACK (restores the current, insecure state - only if the signup route breaks):
-- begin;
--   drop policy if exists waitlist_no_public_access on public.waitlist;
--   alter table public.waitlist no force row level security;
--   alter table public.waitlist disable row level security;
--   grant select, insert, update, delete on table public.waitlist to anon, authenticated;
-- commit;
