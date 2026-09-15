
### `assets/img/*`

Owns local visual assets, including the shared SVG icon sprite. Site-owned iconography should not require third-party runtime CDNs.

## Compatibility URLs

Historical root HTML URLs may remain only as compatibility redirects to canonical `pages/*` targets. They are not valid locations for a second implementation.

## Instructional control conventions

- Boolean completion controls are rendered as switches while retaining an accessible checkbox input underneath.
- Reusable actions should have consistent local iconography.
- A completed learning checkpoint must preserve approved progress when the learner enters review mode.
- Review/read-only modes must not mutate XP, completion state or checkpoint results.

## Git instruction pattern for learners

When a teaching feature asks a student to create evidence in Git, the site must not assume terminal proficiency.

Every Git checkpoint should present two equivalent routes:

1. **GitHub Desktop**: review `Changes`, select the intended files, enter the required Summary, commit to the current branch and `Push origin`.
2. **Terminal / CLI**: present one command at a time in execution order, with a short explanation of what the learner should observe before continuing.

CLI instructions must follow these conventions:

- present the CLI as a realistic terminal session, including a prompt and terminal-like visual treatment;
- state once, before the sequence begins, that the terminal must already be located at the repository root;
- do not repeat `cd` before every Git operation or every checkpoint;
- keep each command independently copyable and executable;
- prefer observable sequences such as `git status → git add → git status → git commit → git push`;
- the second `git status` is a verification step: learners must confirm exactly what is staged before committing;
- do not visually imply that several commands form one script to paste and execute as a block;
- if a command fails, the sequence stops until the learner understands or resolves the error;
- expected CLI output must be reconciled with the actual instruction of the learning step, not presented as a catalogue of every possible Git state;
- for a step that creates a file, the primary pre-staging expectation is that exact file as `Untracked`; for a step that edits an existing file, it is that exact file under `Changes not staged for commit`; mixed steps may show both only when the instructions themselves require both states;
- IDE auto-staging is treated as a specific exception, not a second generic scenario: if IntelliJ IDEA already performed `Add to Git`, explain that the same expected files may already appear in `Changes to be committed` with the corresponding `new file` or `modified` status;
- expected-output guidance must identify files from the current step and tell the learner to stop when unrelated files are staged.
