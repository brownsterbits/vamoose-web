# waitlist RLS fix - test plan (draft, not applied)

Run on a non-prod copy/branch first. No real emails in tests; use `rls-test+N@example.com`.

1. Pre-check: `select relrowsecurity, relforcerowsecurity from pg_class where oid='public.waitlist'::regclass;` -> expect `f,f` today.
2. Apply migration. Re-run step 1 -> expect `t,t`. Supabase advisor `rls_disabled_in_public` should clear for waitlist.
3. anon blocked: `curl "$SUPABASE_URL/rest/v1/waitlist?select=*" -H "apikey: $ANON" -H "Authorization: Bearer $ANON"` -> 401/403 or `[]`, never rows.
   Same for a POST insert -> rejected.
4. service_role works: POST `/api/waitlist` with a test email on the preview deploy -> 200 `{success:true}`; duplicate -> 409.
5. Keep-alive workflow (`/rest/v1/` root) still returns 200.
6. Rollback: SQL at the bottom of the migration; only needed if step 4 fails.
