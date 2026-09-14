# W7.4 Canonical Builder Adoption — DSY1102

**Issue:** #4  
**Wave:** W7.4  
**Repository:** `cmartinezs/DSY1102-DESARROLLO-ORIENTADO-OBJETOS-2026-2`  
**Classification target:** `EDUCATIONAL`  
**Facets:** `COURSE_REPOSITORY`, `LEARNER_FIRST`  
**Status:** `MACHINE_PASS_PENDING_HUMAN_REVIEW`

## Purpose

Validate the canonical Repository Information Contract and Repository Site pipeline against a learner-first course repository whose primary information architecture is pedagogical progression rather than product or engineering architecture.

W7.4 is the final planned adopter of the current Wave 7 cohort. It must not introduce an EDUCATIONAL-specific schema fork, Builder branch, hidden semantic discovery or a parallel web authority.

## Governed fixture

The authoritative fixture requires:

```text
repository.type = EDUCATIONAL
repository.facets = [COURSE_REPOSITORY, LEARNER_FIRST]
audiences.primary = [USER]
audiences.secondary = [DEVELOPER, GOVERNANCE]
```

Required concerns and mapped sources:

| Concern | Source |
| --- | --- |
| Course orientation | `README.md` |
| Learning path | `semanas/README.md` |
| Weekly progression | `semanas/README.md` |
| Concepts | `semanas/README.md` and weekly material linked from it |
| Examples | `ejemplos/README.md` |
| Exercises | `ejercicios/README.md` |
| Challenges | `ejercicios/README.md` plus root course policy |
| Labs | `labs/README.md` |
| Formative/incremental integration | `proyecto-formativo/README.md` |
| Evaluation/evidence guidance | `docs/ACTIVIDAD-FORMATIVA-TRANSVERSAL.md` |
| Maintainer guidance | `docs/CHECKLIST-OPERACION-SEMANAL.md` |

AVA remains the institutional authority for communications, evaluations and resources that must be managed there. The Repository Site is a derived navigation/knowledge surface, not a replacement institutional source.

## Temporal-truth reconciliation before replay

The adoption audit found local documentation that no longer matched the repository tree:

- root `README.md` still described `page/` as the editable portal source although `page/` is absent from `master`;
- the weekly-operation checklist still referenced `examples/`, `practica/` and `page/` instead of this repository's actual roots `ejemplos/`, `ejercicios/` and the derived `gh-pages` publication surface;
- `ejercicios/README.md` and `labs/README.md` marked Week 04 as `Actual` despite Week 06 material already existing.

Those local truths were reconciled in this branch before canonical replay. The transversal `docs/CANON-REPOSITORIO-DOCENTE.md` is not redefined by W7.4; any future change to that shared canon must be governed independently.

## Canonical semantic path

```text
governance/repository.yaml
        +
governance/repository-site.adel
        ↓
ADEL 0.1
        ↓
adel-compiler
        ↓
resolved-projection
        ↓
Builder private Knowledge IR / CompilationInput
        ↓
standard-repo-website-builder
```

Forbidden shortcuts:

- direct `repository.yaml` production semantic interpretation in the Builder;
- EDUCATIONAL-specific Builder hardcoding;
- fixture-specific schema/profile fork;
- hidden registry/filesystem semantic rediscovery;
- generated portal content becoming course or institutional authority;
- reintroducing `page/` merely to satisfy the adopter.

## Pre-closure machine acceptance

Adopter source revision:

`3d6393804284dfb3362726ac84786f043d1b84c9`

Governed commands:

```text
make w7-adopter-replay
make w7-adopter-product-gate
make w7-adopter-browser-review
```

Command execution result: PASS for all three targets.

Canonical replay classification:

`PASS_WITH_DECLARED_GAPS`

Product acceptance classification:

`PASS_WITH_DECLARED_GAPS`

Verified machine state:

- 8 knowledge items;
- 8 sources present;
- 0 sources missing;
- 0 diagnostics;
- all 8 knowledge items are explicit descriptor entries;
- convention-discovered items = 0;
- only declared gap = `W7-4-ADOPTION-001`;
- production semantic input = `adel-resolved-projection`;
- resolved semantic nodes = 6;
- knowledge pages = 8;
- output files = 15;
- deterministic semantic nodes/output/repository identity/gaps/section hubs/page count;
- 75 generated links checked;
- 0 broken links;
- governed shell/navigation = PASS;
- knowledge discoverability = PASS;
- publication readiness = `READY_FOR_PROVIDER_VERIFICATION`;
- fixture-specific schema fork required = false;
- repository-specific Builder hardcoding required = false.

Evidence: `governance/evidence/W7-4-MACHINE-ACCEPTANCE.md`.

## Browser review readiness

Browser capture gate completed with:

`READY_FOR_HUMAN_REVIEW`

Representative pages:

- Home (`index.html`);
- Conformance (`conformance.html`);
- Knowledge (`knowledge.html`);
- Course Orientation (`knowledge/course-orientation.html`).

Each surface was captured at desktop `1440x1100` and mobile `390x844`, producing eight screenshots. Structural checks confirm shell and required navigation on every capture.

## Remaining human acceptance

The current gate is deliberately human. Review must establish:

- global navigation is coherent and usable;
- repository identity is visible and consistent;
- content hierarchy is readable without clipping or overlap;
- section/detail navigation preserves the global shell;
- mobile layout has no horizontal page overflow;
- material course knowledge is discoverable without relying on source links;
- learner-first orientation is evident;
- current-state messaging is understandable;
- stale `page/` truth is absent from current course orientation;
- stale Week 04 `Actual/Próximamente` truth is absent from the current projected learner path.

Until the representative desktop/mobile and temporal-truth review passes:

```text
W7_4_MACHINE = PASS_WITH_DECLARED_GAPS
W7_4_HUMAN = PENDING
W7_4_ADOPTION_001 = OPEN
PR_5_MERGE_ALLOWED = false
WAVE_7_FULL_COHORT_COMPLETE = false
```

## Wave progression

W7.4 is the final planned adopter of the current cohort. Full Wave 7 completion MUST NOT be claimed until this adopter is classified and PR #5 is merged or otherwise closed with an accepted outcome.

## Non-claims

This branch does not yet claim:

- final W7.4 closure;
- Wave 7 full cohort complete;
- provider-side Pages state verified;
- ADEL Core changes required;
- `repository-site@0.2` required;
- AVA authority replaced.

## Next action

Perform human review of the eight generated browser captures. If learner-first desktop/mobile usability and temporal truth pass, persist human acceptance, remove `W7-4-ADOPTION-001`, replay the adopter in gap-free post-closure state, and only then merge PR #5.
