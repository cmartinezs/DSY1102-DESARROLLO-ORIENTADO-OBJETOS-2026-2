# Site Architecture

## Purpose

The DSY1102 public site is organized as a layered static application rather than a flat collection of HTML files.

## Canonical layout

```text
assets/
  img/
  css/
    global.css
    pages/
  js/
    global.js
    business/
    pages/
pages/
  home/
  weeks/
  labs/
  exercises/
  challenges/
  project/
  progress/
  student-repository/
```

## Responsibilities

### `pages/**/index.html`

Owns semantic document structure and page content. Canonical HTML must not contain significant presentation CSS or application logic.

### `assets/css/global.css`

Owns shared design tokens and reusable components such as buttons, notices, icons and switches.

### `assets/css/pages/*`

Owns feature/page-specific presentation.

### `assets/js/global.js`

Owns reusable browser/UI utilities that are not feature-domain rules.

### `assets/js/pages/*`

Owns DOM interaction and page controllers. Controllers render state, bind events and call business modules, but must not duplicate domain rules.

### `assets/js/business/*`

Owns state transitions, validation, progress rules, persistence contracts and reusable feature data. Business modules must not depend on the DOM.

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

CLI instructions must not visually imply that several commands are a single script. Each command is an independent action and must have its own copy control. The learner executes one command, reads the result, and only then proceeds to the next command. If a command returns an error, the sequence stops until that error is understood or resolved.

Both routes must lead to the same expected Git state and commit message.

## Separation rules

1. `master/page/` must not exist.
2. Published UI implementation belongs to `gh-pages`.
3. Canonical teaching/source content remains in the teaching structures on `master` (`semanas/`, `labs/`, `ejercicios/`, `docs/`, `proyecto-formativo/`, etc.).
4. Runtime site code must not fetch its own implementation from `raw.githubusercontent.com`.
5. A legacy URL may redirect, but it must not contain its own feature logic.
6. Business modules must remain independently understandable without browser DOM APIs.
7. Page controllers own presentation orchestration, not domain semantics.

## Cutover discipline

A migrated feature is complete only when:

- its canonical `pages/*` target exists;
- required local assets exist;
- internal navigation points to canonical targets;
- legacy URLs are redirects only;
- own runtime dependencies do not use `raw.githubusercontent.com`;
- significant inline CSS is eliminated;
- dynamic logic is outside canonical HTML;
- business state/rules are outside the page controller where applicable.
