# Validation — 3.2.1

Local validation performed on 2026-11-11 before the authorized GitHub publication. Repository publication does not deploy or validate Firebase rules.

## Executed

- `npm install --ignore-scripts --no-audit --no-fund`: completed, pinned Playwright 1.62.1 with package lock.
- `npm run manifest`: generated local version.json from the current HTML bytes.
- `npm run check:manifest`: passed; application version, official URL and SHA-256 match.
- `npm test`: **36 passed, 0 failed, 0 skipped**. Inline JavaScript syntax, functional browser scenarios and isolated fake-backend cases ran in Chromium.
- `git diff --check`: passed.

## Coverage

All six Work Order templates; required fields and focus/error feedback; technical-test and side-panel output; independent PT-BR/EN document language; manual multiline content preservation; offline and connected/master account UI; five synchronization states; 40 language switches; counts and before/after comparison; equal-count edits and moved cards; duplicate card IDs across duplicated workspaces; escaped comparison HTML; cancel behavior; stale local/remote confirmation; transaction conflicts and paused retries; edits preserved during failed upload; successive acknowledged cloud writes; full backup variable modes, trash, workspaces, 60 Userscripts and long notes; disabled/untrusted restored scripts; storage-failure rollback; recovery preview and restoration; Google/verified account UI checks; São Paulo reminder recurrence and snooze; equipment quote calculations; English equipment search; loaded page operation without networking; mobile language controls.

## Not validated here

Live Google OAuth, live Firestore authorization/rules, production synchronization and Firestore emulator execution. Those require the actual rule export and authorized test-project access. Browser fixtures never contacted Firebase, used no production accounts and do not prove backend authorization. The candidate rules and compatibility limits are documented in SECURITY_REVIEW.md. GitHub Actions is prepared but has not run on GitHub. Public version.json and the public website have not been changed by this work.

## Selectable review — 3.2.1

Additional tests verify friendly card/setting/reminder previews with no JSON or internal IDs; per-card, per-client and per-setting choices; dependency handling for new tabs/workspaces; preserving unchecked removals and edits; legacy string cards and clients without IDs; search/select-visible/clear/keep-current actions; selected-only cloud download and upload via fake backend; selected-only recovery; desktop side-by-side and mobile stacked layout; PT/EN switching without resetting checkboxes; and preventing a second commit while confirmation is running. Desktop and mobile screenshots were inspected. The HTML is 1,267,716 bytes (1,267.716 decimal KB / 1,238.004 KiB).
