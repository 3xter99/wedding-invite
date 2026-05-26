-- Выполните этот SQL в Supabase: SQL Editor → New query → Run

create table if not exists rsvp_responses (
  id bigint generated always as identity primary key,
  full_name text not null,
  attendance text not null,
  drinks text[] not null default '{}',
  submitted_at timestamptz not null default now()
);

alter table rsvp_responses enable row level security;

-- Гости могут только отправлять ответы (не читать чужие)
create policy "Anyone can submit RSVP"
  on rsvp_responses
  for insert
  to anon, authenticated
  with check (true);
