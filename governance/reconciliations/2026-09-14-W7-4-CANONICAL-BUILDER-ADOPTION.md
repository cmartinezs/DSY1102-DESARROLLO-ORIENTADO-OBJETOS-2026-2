# W7.4 Canonical Builder Adoption — DSY1102

**Issue:** #4  
**Wave:** W7.4  
**Repository:** `cmartinezs/DSY1102-DESARROLLO-ORIENTADO-OBJETOS-2026-2`  
**Classification target:** `EDUCATIONAL`  
**Facets:** `COURSE_REPOSITORY`, `LEARNER_FIRST`  
**Status:** `READY_FOR_CANONICAL_REPLAY`

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

## Initial conformance state

`W7-4-ADOPTION-001` remains OPEN only for the adoption workflow itself:

- canonical Builder replay;
- deterministic build evidence;
- product/link/shell/discoverability acceptance;
- representative desktop/mobile and temporal-truth review;
- publication-readiness classification.

No required EDUCATIONAL concern is knowingly absent from the mapped repository sources at replay start.

## Acceptance

The canonical replay must prove:

- exact adopter revision recorded;
- `repository-site.adel` compiles;
- production semantic input is `adel-resolved-projection`;
- all declared knowledge sources exist;
- deterministic output;
- no fixture-specific schema fork;
- no repository-specific Builder hardcoding;
- generated link integrity acceptable for publication;
- governed shell and knowledge discoverability pass;
- learner-first orientation is preserved;
- desktop/mobile review passes;
- temporal truth does not advertise stale `page/` or stale current-week markers;
- publication readiness is explicitly classified.

## Wave progression

W7.4 is the final planned adopter of the current cohort. Full Wave 7 completion MUST NOT be claimed until this adopter is classified and its PR is merged or otherwise closed with an accepted outcome.

## Non-claims

This branch does not yet claim:

- W7.4 complete;
- Wave 7 full cohort complete;
- provider-side Pages state verified;
- ADEL Core changes required;
- `repository-site@0.2` required;
- AVA authority replaced.

## Next action

Run the current governed W7 adopter gates from `standard-repo-website-builder` against this branch, classify machine acceptance, then perform representative browser/human review before merging the adoption PR.
