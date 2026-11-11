# Security and recovery review — 3.2.0

This review covers the local HTML and candidate rules in this checkout. Publishing the repository does not deploy these candidate Firebase rules. The active Firebase rules have NOT been downloaded, inspected or changed. This environment has no configured Firebase administrative identity. Passing browser tests with a fake backend is not verification of server authorization.

## Changes prepared

- Candidate `firestore.rules`: verified Google identities, active accounts, server-side profile roles, immutable identity fields, constrained self-updates, typed profiles, bounded app_data, restricted settings/template paths, authenticated audit authors and deny-by-default. The HTML rules dialog contains the same candidate text. Client-side badges and role checks remain presentation only; the deployed rules determine access.
- JSON import/cloud application: validate every workspace, reserved keys, identifiers and color values before rendering. Reject malformed secondary workspaces instead of trusting the active workspace alone. Restored Userscripts remain disabled and untrusted.
- Full-backup sanitizer retains workspaces, variable modes, trash, keywords, sound and document language. Writes use rollback, and destructive local replacements require a recoverable snapshot first. Snapshots are app-only localStorage records, retain up to three points subject to space, and exclude authentication tokens and Firebase configuration. Exported backups still require the user to store them safely.
- Detailed comparisons include before/after values and stable card IDs, not just counts. Reject stale local confirmation; reread remote content before acceptance/upload. Firestore transactions detect concurrent remote edits and pause automatic retry until the user reviews the conflict. No network write occurs merely by opening or canceling a review.
- New UI uses fixed message identifiers. Historical text matching remains as a compatibility path. Names, personal notes, script bodies and document values are excluded from UI translation.
- Update manifest is generated from exact HTML bytes and checked locally/CI. SHA-256 verifies consistency with that manifest, not independent publisher authenticity.

## Required server verification before deploying rules

Review against the actual project configuration and existing documents. The candidate uses stricter types, Google-only authentication and app_data-only settings paths; existing documents must be inventoried for compatibility. The current rules were unavailable, so do not assume replacing them is a migration-free change.

Run Firestore emulator tests with the reviewed rules: anonymous read/write denied; unverified/non-Google identity denied; active user reads/writes only own app_data; self-promotion, unblocking and identity edits denied; blocked account app_data/template access denied (own profile read remains available to report the blocked state); admin listing/status/role operations allowed as intended; malformed payloads denied; audit author forgery denied; undeclared paths denied. Then validate with test accounts in a staging project. These server tests were NOT executed here, and no production user records were accessed.

## Remaining boundaries

The single HTML file cannot enforce authorization against a modified client. Userscripts explicitly trusted by an operator execute with that page's privileges. Local storage is readable by same-origin scripts and by anyone using the browser profile. Recoveries and comparisons cannot undo a cloud write already committed before a review started. Automatic local-to-cloud synchronization remains available, guarded by transaction conflict checks; incoming replacements and manual overwrite flows require review.
